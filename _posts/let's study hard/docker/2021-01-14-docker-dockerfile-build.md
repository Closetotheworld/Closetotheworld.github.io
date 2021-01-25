---
title: "Dockerfile을 사용하여 이미지 빌드하기"

categories:
  - Docker
tags:
  - [container, MSA]

toc: true
toc_sticky: true

last_modified_at: 2021-01-14T01:40:00
---

## 자신의 이미지 빌드하기

- 두 가지 방법이 있다

  1. `docker commit`을 이용하는 방법
  2. `Dockerfile`을 이용하는 방법

  1번 방법을 사용하면 diff check 등 과정이 번거로워져서
  image 파일을 만들기 위한 일련의 과정들을 기술해 놓은 Dockerfile을 사용한다.

- 첫 번째 Dockerfile

  1.  샘플 레포지토리 생성.(ssh 서버를 만든다고 가정)

      ```bash
      mkdir sshd
      cd sshd
      touch Dockerfile
      ```

      sshd 라고 하는 디렉터리는 빌드 환경이며 Docker이 컨텍스트를 요청/빌드 하는 장소이다. 도커는 이 디레겉리 안에 포함되어있는 파일들과 다른 서브 디렉터리뿐만 아니라 빌드가 실행될 때 빌드 컨텍스트를 도커 데몬에 업로드한다.

  2.  Dockerfile

      ```bash
      # Dockerfile
      FROM ubuntu:18.04
      MAINTAINER wonryang Heo "hwr0450@gmail.com"
      RUN apt update
      RUN apt install -y openssh-server
      RUN mkdir /var/run/sshd
      RUN echo "root:password" | chpasswd
      EXPOSE 22
      ```

      이 파일은 다음의 워크플로우를 따른다.

      1. 이미지로부터 컨테이너를 실행
      2. 명령어가 실행되며 변경사항을 생성
      3. 새 레이어 commit
      4. 새로운 컨테이너를 실행한다.
      5. 모든 명령어가 실행될 때 까지 반복한다.

      첫 명령어는 항상 FROM이 되어야 한다.
      이후 MAINTAINER 명령어는 저작자, 이메일주소이다.
      RUN 명령어를 사용하여 각각의 명령어들이 차례대로 실행된다.

  3.  Dockerfile로 이미지 빌드하기

      ```bash
      sudo docker build -t="closetotheworld/sshd"
      # 각 스텝이 표시되며 빌드가 시작된다.
      ```

      - -t 옵션을 사용해서 이름을 관리한다.

  4.  이미지 구경해보기
      ```bash
      docker images closetotheworld/sshd
      ```

## Dockerfile을 쓰는 다른 명령어들

사용가능한 명령어 중 몇 개는 살펴보았지만 나머지 명령어들도 많다. CMD, ENTRYPOINT 등...

- CMD 명령어

  - RUN과 비슷하다.
  - RUN과의 차이점은 RUN은 빌드 될 때, CMD는 런칭되었을 때 실행한다.

- ENRTYPOINT 명령어

  - CMD와 많이 헷갈린다고들 한다.
  - 가장 큰 차이점은 컨테이너 시작 시 실행 명령에 대한 Default 지정 여부이다.

- CMD와 ENTRYPOINT 차이점

  - ENTRYPOINT는 반드시 지정한 커맨드 + 추가 인자
  - CMD는 추가인자 입력 시 CMD가 대체된다.

- WORKDIR

  - WORKDIR 명령어는 컨테이너를 위한 작업 디렉토리를 설정하는 방법을 제공한다.

- VOLUME

  - 볼륨을 추가한다. 볼륨은 데이터를 유지하거나 공유하기위해 유용한 기능을 제공한다.
    - 컨테이너 사이에서 공유되고 재사용된다
    - 컨테이너는 볼륨을 공유하기 위해 실행될 필요는 없다.
    - 볼륨에 대한 변경은 직접 적용된다
    - 볼륨에 대한 변경은 이미지를 업데이트할 때는 포함되지 않는다.
    - 볼륨은 컨테이너가 사용하지 않을 때 까지 계속 유지된다.

- ADD

  - ADD 명령어는 빌드 환경에서 이미지로 파일과 디렉터리를 추가함.

- COPY
  - COPY는 ADD와 관련이 있다.
  - COPY는 빌드 컨텍스트에서 로컬 파일을 복사하는 작업에 초점을 맞춘다.
