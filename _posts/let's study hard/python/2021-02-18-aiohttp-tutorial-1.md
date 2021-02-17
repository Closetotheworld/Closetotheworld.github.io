---
title: "aiohttp 튜토리얼"

categories:
  - Python
tags:
  - [python, aiohttp]

toc: true
toc_sticky: true

last_modified_at: 2021-02-18T00:16:00
---

## &#10067; aiohttp?

aiohttp는 Python용 비동기 HTTP client/server 이다.
현재 나온 최신 버전은 작성일(21-02-18) 기준 3.7.3 버전이다.

- 주요 기능
  - 클라이언트와 서버 둘 다 지원합니다.
  - Callback Hell이 없이 즉시 서버 / 클라이언트 Websocket을 모두 지원합니다.
  - 웹 서버에는 미들웨어, 라우팅 등이 있습니다.

라이브러리 설치에는 오직 아래 명령어만 입력하면 된다.

```sh
pip install aiohttp
```

### &#10071; 클라이언트 예제

```py
import aiohttp
import asyncio

# async 키워드를 사용하여 코루틴을 정의한다.
async def main():

    async with aiohttp.ClientSession() as session:

      # session에는 get 뿐만이 아니라 post, put, head, delete, options, patch 등이 존재한다!
        async with session.get('http://python.org') as response:

            print("Status:", response.status)
            print("Content-type:", response.headers['content-type'])

            html = await response.text()
            print("Body:", html[:15], "...")

# asyncio로 비동기 루프를 생성한다.
loop = asyncio.get_event_loop()

# 위에서 생성한 루프는 코루틴이 끝날 때 까지 기다린다.
loop.run_until_complete(main())
```

#### &#10003; 매개변수 전달

```py
params = {'key1': 'value1', 'key2': 'value2'}
async with session.get('http://httpbin.org/get',params=params) as resp:
  except = 'http://httpbin.org/get?key1=value1&key2=value2'
  assert str(resp.url) == expect
```

dict형을 이용하여 매개변수를 전달할 수도 있다.
