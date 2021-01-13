---
title: "D O C K E R ? "

categories:
  - Docker
tags:
  - [container, MSA]

toc: true
toc_sticky: true

last_modified_at: 2021-01-12T22:25:00
---

## 도커?

- 컨테이너 안에 있는 애플리케이션 배포를 자동화하는 오픈소스 엔진
- 가상화된 컨테이너 실행 환경 위에 애플리케이션 배포엔진을 추가한다.

- 도커의 목적
  - 도커는 빠르다.
    - 몇 분 만에 애플리케이션을 도커화 할 수 있음
  - 의무의 논리적 분리
    - 컨테이너 내부에서 동작하는 애플리케이션만 집중할 수 있음.
    - 개발자가 코드를 작성할 때의 환경과 배포 실행 환경을 보장하여 일관성을 향상시킨다.
      - ex: "개발할 땐 잘됐는데 배포때 안돼!!" 를 방지!
  - 빠르고 효율적 개발사이클
    - 도커의 사용목적은 코드작성, 테스트, 배포까지의 시간을 줄이는 데에 있기 때문이다.

## 도커 컴포넌트

- 도커 클라이언트와 서버
  - 도커는 클라이언트 - 서버 애플리케이션이다.
  - docker과 api로 이루어 져 있는데, 클라이언트에서 api를 통해 서버에 명령을 전달한다.
  - 마치 직접 명령하는 것 처럼 보인다.
- 도커 이미지
  - 이미지에서 컨테이너를 만드는데, 이는 `빌드` 에 해당한다.
  - 여러 레이어가 나뉜 형태이며 유니온 파일 시스템을 사용함.

- 도커 레지스트리

  - 도커는 커스텀 이미지를 레지스트리에 저장한다.
    - public registry : 도커 허브
    - private registry : 나중에 알아보자..

- 컨테이너
  - 이미지에서 실행이 되는 단위

## 도커 설치

- 정식 릴리즈 된 도커의 최신 버전을 다운받는다!

  ```bash
  curl -s https://get.docker.com | sudo sh
  ```

- 도커는 기본적으로 root 권한이 필요합니다! 사용하는 사용자를 docker 그룹에 추가해줍시다!
  ```bash
  sudo usermod -aG docker $USER # 현재 접속 중인 사용자에게 원한을 준다
  sudo usermod -aG docker user # user 사용자에게 권한주기
  ```
- 서비스가 끝나면 정상설치가 되었는지 확인 해 봅니다.
  ```bash
  docker -v
  ```

## 도커의 기본 명령어들

- 도커를 실행하는 명령어는 다음과 같습니다.

  ```bash
  docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
  ```

  - 다음은 run 시에 자주 사용하는 옵션입니다.

    | 옵션  |                       설명                        |
    | :---: | :-----------------------------------------------: |
    |  -d   |       detached mode. 백그라운드모드를 의미        |
    |  -p   |      호스트와 컨테이너의 포트를 연결(포워딩)      |
    |  -v   | 호스트와 컨테이너의 디렉토리를 연결(마운트)(볼륨) |
    |  -e   |     컨테이너 내에서 사용할 환경변수를 설정함.     |
    | -name |              컨테이너의 이름을 설정               |
    |  -rm  |     컨테이너의 프로세스가 종료될 시 자동제거      |
    |  -it  |           터미널 키보드 system.in 옵션            |
    | -link |      컨테이너를 연결한다 ([컨테이너명:별칭])      |

- 컨테이너 목록 확인하기(ps)

  ```bash
  docker ps [OPTIONS]
  # -a 옵션을 추가하면 종료된 컨테이너가 추가로 보입니다.
  ```

- 컨테이너 중지하기(stop)

  ```bash
  docker stop [OPTIONS] CONTAINER [CONTAINER . . . ]
  # 실행중인 컨테이너를 하나 또는 여러개로 중지할 수 있다.
  # ps로 확인된 컨테이너 ID에서 앞부분이 겹치지 않는 한 전체를 입력할 필요는 없다.
  ```

- 컨테이너 제거하기(rm)

  ```bash
  docker rm [OPTIONS] CONTAINER [CONTAINER . . .]
  # stop과 비슷하게 된다.
  ```

  > 일일이 중지 컨테이너를 삭제하는 것은 귀찮다. 그렇다면
  > `docker rm -v $(docker ps -a -q -f status=exited)`를 입력해보자!

- 이미지 목록 확인하기(images)

  ```bash
  docker images [OPTIONS] [REPOSITORY[:TAG]]
  ```

- 이미지 가져오기(pull)

  ```bash
  docker pull [OPTIONS] NAME[TAG|@DIGEST]
  ```

- 이미지 삭제하기(rmi)
  ```bash
  docker rmi [OPTIONS] IMAGE [IMAGE . . .]
  ```

## 컨테이너 둘러보기

- 컨테이너 로그 보기(logs)
  ```bash
  docker logs [OPTIONS] CONTAINER
  # -f와 --tail을 자주쓴다.
  # -f 는 실시간으로 보여주며 --tail은 최근 10개줄을 보여준다.
  ```
- 컨테이너 명령어 실행하기(exec)
  - 실행중인 컨테이너에 들어가거나 파일을 실행하고 싶을 때.
  - 보통 ssh는 권장하지 않는다고 한다.
  - 다음과 같은 명령어.
  ```bash
  docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
  #run 때와 비슷한 옵션들
  ```
