---
title: "TCP와 UDP ?"

categories:
  - Network
tags:
  - [CS, interview]

toc: true
toc_sticky: true

last_modified_at: 2021-01-05T10:00:00
---

**개인적으로 정리한 의견임다!**
{: .notice--warning}

### 네트워크에서의 단어들

- `프로토콜` -> 네트워크의 통신 규칙
- `네트워크 아키텍처` -> 프로토콜 여러개를 조합한 것
- `호스트` -> TCP/IP로 통신하는 각종 네트워크 기기 전반.

### 그래서 TCP가 뭔데?

- 신뢰성 있는 바이트 스트림을 <u>전송하고 받는 것</u>
- 소켓이라는 종단점을 생성함으로서 이루어짐.
- 연결 설정
  - 3-way handshake  
    ![image](https://user-images.githubusercontent.com/37994634/103637860-73674f00-4f8f-11eb-9952-c1374422a947.png)
- 전이중(전송이 양 방향으로 가능), 점대점(2개의 종단점) 방식.
- 멀티캐스팅, 브로드캐스팅 미지원
- 종료
  - 4-way handshake  
    ![image](https://user-images.githubusercontent.com/37994634/103637872-78c49980-4f8f-11eb-9bb1-596a84ef3c26.png)

### 그럼 UDP는?

- `비연결형 프로토콜`
- 흐름제어, 오류제어, 손상세그먼트의 수신에 대한 <u>재전송을 하지 않음</u>
- 대표적으로 DNS가 있다! (가벼워서)
