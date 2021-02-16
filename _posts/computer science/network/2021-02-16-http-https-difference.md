---
title: "HTTP / HTTPS ?"

categories:
  - Network
tags:
  - [CS, HTTP, HTTPS, interview]

toc: true
toc_sticky: true

last_modified_at: 2021-02-16T20:50:00
---

## &#10067; HTTP

텍스트 기반의 통신 규약으로 인터넷에서 데이터를 주고받는 `프로토콜` 이다.

### &#10071; HTTP 동작

클라이언트가 url이나 다른 것을 통해서 request를 하면 response를 하는 형태로 동작한다.

- 요청 : client to server
- 응답 : server to client

### &#10071; HTTP 특징

- HTTP 메세지는 서버와 클라이언트에 의해 해석이 된다.
- TCP / IP를 이용하는 프로토콜이다( HTTP / 3 부터는 UDP(QUIC))
- 연결 상태를 유지지 않는 `비연결성 프로토콜`
  - 단점 해결을 위해 cookie나 sessioni
- 비연결성 프로토콜이기에 request/response 형식으로 작동하는 것!

## &#10067; HTTPS

하이퍼 텍스트 전송 프로토콜 보안(Hypertext Transfer Protocol Secure)의 약자!  
일반 HTTP는 전송 때 암호화가 되지 않는 문제가 있었는데, HTTPS는 SSL을 사용함으로 이 문제를 해결하였음.

### &#10071; 왜 안전할까?

- SSL 인증서가 가장 큰 비중을 차지한다.
- SSL 인증서가 사용자가 사이트에 제공하는 정보를 암호화한다.
  - TLS(전송계층보안)을 통해서도 유지하기도 한다. 데이터무결성을 제공하기 때문에 좋다.

#### &#9995; 그럼 SSL이랑 TLS의 차이는 뭐에요

- SSL(Secure Sockets Layer)은 보안 소켓 계층
- TLS(Transport Layer Security)는 SSL 3.0을 기초로 해서 보다 안전하고 안정성이 있는 목적으로 고안됨.

SSL 3.0은 1996년에 릴리즈가 되었는데, 1999년에 표준 규약으로 정리되었다. 이 때의 SSL부터가 TLS라고 불린다

버전만 다르고 본질은 같으나, 사실 두 규약이 동일한 것은 아니다. 상호 운용되지 않는다.

### &#10071; 보안말고 장점은 없나요?

- 보안상만 우위에 있는것이 아니라, SEO(검색엔진 최적화)도 큰 혜택을 볼 수 있다.
- 구글이 가산점을 더 준다 / 사용자는 안전한 사이트에 더 많이 방문한다. 는 당연한 사실!
