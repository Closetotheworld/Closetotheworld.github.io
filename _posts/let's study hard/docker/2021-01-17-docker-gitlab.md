---
title: "Nginx in Gitlab with docker"

categories:
  - Docker
tags:
  - [container, MSA, nginx, gitlab]

toc: true
toc_sticky: true

last_modified_at: 2021-01-17T21:58:00
---

## Gitlab

허브랑은 다르게 설치형 git 저장소이다.

마음맞는 사람들과 팀 프로젝트를 진행하는데, 인프라 구성과 서버사이드를 맡게 되어서 근래 도커를 열심히 했던 것이다 :)

Gitlab을 사용하는 이유는 다음과 같다.

1. 팀 만의 저장소가 있었으면 했다.
2. gitlab에서 제공하는 CI/CD를 사용 해 보기 위함.
3. 도커 친화적이기 때문!

## How to ?

1. dockerhub에서 gitlab image를 끌어온다.

   ```bash
   docker pull gitlab:latest
   ```

2. Gitlab Container을 위한 설정파일이 포함된 docker_compose.gitlab.yml을 작성한다.

   ```bash
   #docker-compose.gitlab.yml
   gitlab:
       image: 'gitlab/gitlab-ce:latest'
       restart: always
       hostname: {your_domain}
       environment:
           GITLAB_OMNIBUS_CONFIG: |
               external_url 'http://{your_domain}'
       ports:
           - '10080:80'
           - '10443:443'
           - '10022:22'
       volumes:
           - '/{your_work_directory}/gitlab_storage/config:/etc/gitlab'
           - '/{your_work_directory}/gitlab_storage/logs:/var/log/gitlab'
           - '/{your_work_directory}/gitlab_storage/data:/var/opt/gitlab'
   ```

   image는 끌어온 gitlab 이미지  
   restart는 재시작 되었을때 다시 컨테이너를 실행 할 것인지 여부  
   environment에서 external은 domain에 대한 요청을 받기 위함이며  
   포트는 이 전 게시물에서 nginx로 reverse proxy를 사용한다고 했기에 다른 포트에서 다시 80, 443, 22로 이어주었다.  
   volume은 추후 저장소 확장에 대비하여 작업 디렉토리에 바인드 마운트로 하였다.  

3. 위와 같이 생성이 된다면, 두 가지의 방법이 생긴다.

   1. nginx와 gitlab을 같이 docker_compose -> 같은 network로 포트포워딩
   2. docker network를 이용한 internal network

   1번 방법은 추후 쿠버네티스로 확장하기 위함과 앞단에서 nginx container으로 reverse proxy를 한다는 목적에 맞지 않아 2번을 택하였다.

4. docker network 확인

   ```bash
   docker network ls
   ```

   결과물 중 bridge가 default이며 nginx와 위 gitlab은 default network로 물려있다. default network id를 이용해 추적한다.

   ```bash
   docker network inspect {network_id}
   ```

   각 컨테이너에 할당된 내부 ip가 보인다. 그에 따라 nginx에서 서브도메인을 이용해 reverse_proxy를 설정 해 준다.

   ```bash
   #gitlab.conf
   server{
           listen 80;
           server_name {git.your_domain};
           location / {
               proxy_pass http://{your_git_container_internal_ip};
               proxy_set_header Host $host;
               ...
               proxy_set_header ~~
           }
   }
   ```

   `service nginx restart`

5. git.your_domain 접속
   다음과 같이 나오면 성공!
   ![image](https://user-images.githubusercontent.com/37994634/104844719-3008cb00-5915-11eb-83ec-613af69b2c0c.png){: width:300 height:300}
