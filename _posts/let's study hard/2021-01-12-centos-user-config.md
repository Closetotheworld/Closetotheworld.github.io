---
title: "CentOS 7 user 생성과 sudoer"

categories:
  - linux
tags:
  - [CentOS7]

toc: true
toc_sticky: true

last_modified_at: 2021-01-12T19:50:00
---

### wheel과 sudoer

- 보통 centOS를 설치하면 초기 아이디는 root로 하여 패스워드를 설정하게 된다.

- sudo / wheel 그룹은 sudoers 파일에 정의 된 내용을 기반으로 하는 권한을 갖는다.

### STEP 1 - 사용자 생성 & 비밀번호 설정 & sudo권한 주기

- 우선 사용자를 생성한다.

  - <u>closetotheworld</u> 를 사용하고싶은 이름으로 바꾸어서 실행.

    ```bash
    adduser closetotheworld
    ```

  - 비밀번호를 설정한다
    ```bash
    passwd closetotheworld
    ```

- wheel그룹 추가

  ```bash
  usermod -aG wheel closetotheworld
  ```

- sudo 실행 시 비밀번호를 묻지 않게 하기 위해선 visudo를 열어 설정을 바꾸어줍니다.
  ```bash
  ## Same thing without a password
  # %wheel ALL=(ALL) NOPASSWD: ALL
  위 부분의 주석을 해제해준다
  ```

### STEP 2 - 일반사용자 su 막기

- root권한은 어느 상황이던 중요하다. root로 실행되는 명령어는 추적이 되지 않고, 최고관리자이기 때문에 보안이슈가 발생한다. 따라서 root 계정 로그인을 막는다! 오직 root로 선 로그인을 해야만 하게!

- root 계정으로 로그인을 한 후 아래 입력!

  ```bash
  chmod 4750 /bin/su
  ```

- 위와같이 설정하면 sudoer이라도 로그인을 못하는것을 볼 수 있다
  ![image](https://user-images.githubusercontent.com/37994634/104313802-eaff2600-551b-11eb-9063-f78a60e7c169.png){: width:250 height:250}
