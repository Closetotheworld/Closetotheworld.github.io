---
title: "django를 postgre와 docker을 이용해서 구동하자 "

categories:
  - docker
tags:
  - [python, django, framework, tutorial]

toc: true
toc_sticky: true

last_modified_at: 2021-01-25T23:30:00
---

## django 컨테이너 이미지

- django 앱 컨테이너를 생성하고 실행한다. 블로그에 django 시작하기에서 만든 예시를 사용한다.

- django project root directory로 가서 도커 이미지를 만든다.

- 그 전에 django project에 dockerfile을 생성한다.

  ```docker
  FROM python:3

  WORKDIR /app
  ADD ./requirements.txt /app/
  RUN pip install -r requirements.txt

  ADD ./myapp /app/myapp
  ADD ./polls /app/polls
  ADD ./manage.py /app/

  CMD ["python", "manage.py", "runserver", "8000"]
  ```

  python 3버전을 포함한 이미지에서 시작.  
   work directory를 /app으로 설정.  
   requirements.txt를 복사 후 pip으로 설치.(의존성)  
   현재의 프로젝트 폴더를 추가.  
   실행

- 도커 이미지 생성
  ```bash
  docker build -t <이미지이름> <Dockerfile이 있는 디렉토리>
  ```
- django 프로젝트를 docker으로 실행하려면 데이터베이스 컨테이너도 필요하다.

  - postgre container 생성

  ```bash
  docker run -d --rm --name db \
  -e POSTGRES_DB=myappDB \
  -e POSTGRES_USER=myappUser \
  -e POSTGRES_PASSWORD=myappSecret \
  --volume=$(pwd)/docker/data:/var/lib/postgresql/data \
  postgres
  ```

  이 -e로 옵션을 정하는 것은 django project에서 settings.py에 정한 대로 입력하여야 한다.

- 이제 앱 컨테이너를 실행해보자.
  ```bash
  docker run -it --rm \
  -p 8000:8000 \
  --link db \
  -e DJANGO_DB_HOST=db \
  --volume=$(pwd):/app/ \
  my-app-django \
  ./manage.py runserver 0:8000
  ```

## 도커 컴포즈의 활용

- 도커 컴포즈를 사용하여 컨테이너 실행에 필요한 위 챕터의 옵션들을 관리할 수 있으며 실행 순서, 의존성도 관리할 수 있다.

```dockercompose
version: "3"

volumes:
  postgre-volume: {}

services:
  db:
    image: postgres
    volumes:
      - postgre-volume:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=appDB
      - POSTGRES_USER=myappUser
      - POSTGRES_PASSWORD=myappSecret
      - POSTGRES_INITDB_ARGS=--encoding=UTF-8

  django:
    build:
      context: .
      dockerfile: ./Dockerfile
    environment:
      - DJANGO_DB_HOST=db
      - DJANGO_DB_PORT=5432
      - DJANGO_DB_NAME=appDB
      - DJANGO_DB_USERNAME=myappUser
      - DJANGO_DB_PASSWORD=myappSecret
      - DJANGO_SECRET_KEY=dev_secret_key
    ports:
      - 8000:8000
    volumes:
      - ./:/app/
```
