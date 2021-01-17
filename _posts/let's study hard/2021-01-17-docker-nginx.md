---
title: "Nginx in Docker"

categories:
  - Docker
tags:
  - [container, MSA, nginx]

toc: true
toc_sticky: true

last_modified_at: 2021-01-17T14:15:00
---

## Nginx?

엔진엑스는 아파치의 C10K를 대안하기위해 만들어졌다.

`동시접속처리`에 특화된 웹 서버 프로그램이다. 아파치보다 동작이 단순하고, 전달역할만 하기 때문에 동시접속에 특화가 되어있다.

Nginx는 요청에 응답하기 위해 비동기 이벤트 기반 구조를 가진다.

> 아파차에서의 스레드/프로세스 기반 구조와 대조적이다.

서버에 많은 부하가 생길 경우의 성능을 예측하기 쉽게 해준다.

본 환경에서는 Docker에 Nginx container을 띄워 이후에 오는 container들을 각각 맵핑하기 위한

`리버스 프록시` 로서 Nginx를 이용할 것이다.

    리버스 프록시란?

    네트워크에서 클라이언트를 대신해 한 대 이상의 서버에서부터 자원을 추출하는 프록시의 일종.
    마치 클라이언트가 웹서버로 바로 요청하고 반환하는 것 처럼 보이게 해준다.
    - 장점
        - 보안 : 클라이언트나 서버 모두 IP를 숨길 수 있는 방법이 생김.
        - 성능 : 캐싱 기능과 트래픽 분산(로드밸런싱 또는 엔드포인트 매핑)으로 성능 향상을 기대할 수 있음.

## How to!

1. docker hub에서 nginx를 가져온다  
   `docker pull nginx:latest`

2. nginx 설정보관용 docker volumn 혹은 마운트 할 호스트의 디렉토리를 생성한다.
   필자는 docker volumn을 생성하였음.

   ```bash
   # docker volume 방법
   docker volume create nginx_volume

   # 마운트 방법
   $YOUR_DIR/nginx
   ```

3. docker을 띄워본다. 이 때, 선택한 volume에 따라 -v 옵션으로 마운트를 지정한다

   ```bash
   docker run --name web -it -d -p 80:80 -v nginx_volume:/etc/nginx nginx ./bin/bash
   #          컨테이너이름지정     포트지정      볼륨지정             도커이미지   실행할 마지막명령
   ```

4. aws나 ncp, gcp같은 public cloud를 사용 중이라면, 발급받은 공인ip를 접속해서 welcome nginx 문구가 보이는지 확인한다.

5. example.com 같은 도메인을 사용한다면, conf.d에 서버 별 conf 파일을 작성한다

   ```
   예시)

   nginx, django, gitlab, jenkins, apiserver, authserver 컨테이너가 구성되어있을 때

   nginx -> 리버스 프록시
   django -> example.com
   gitlab -> git.example.com
   jenkins -> jenkins.example.com
   .....
   authserver -> auth.example.com

   을 구성하기 위해서는, 우선 도메인 구입 혹은 관리처에 서브도메인으로 사용할 레코드를 지정해서 부여한다.

   이후 각 컨테이너마다 conf 파일을 작성한다.
   기본 작성)
   server{
           listen 80;
           server_name xxx.example.com
           location / {
               # your another container's info : port
           }
   }

   서버별로 conf 파일을 활용할 수 있어서 좋다.
   ```
