---
title: "Pythonic 2 (헬퍼함수) - python series 2"

categories:
  - Python
tags:
  - [python, codingskill, cleancode, PEP8]

toc: true
toc_sticky: true

last_modified_at: 2021-02-15T23:09:00
---

## &#10067; 복잡한 표현식? -> 헬퍼함수

&#10003; 파이썬에서는 많은 로직을 한 줄로 쓰는 경우가 빈번하다. 예를들면 다음을 보자.

URL에서 오는 쿼리 문자열을 decode 한 것이다.

```py
from urllib.parse import parse_qs
my_values = parse_qs('red=1&blue=0&green=',keep_blank_values=True)
```

하지만 쿼리 문자열 파라미터에 따라 값이 여러개일 수 있고, 한 개일 수도 있으며 비어있을 수도 있고 파라미터가 없을 수도 있다. 이 때 기본적인 default 값을 지정할 수 있으면 좋을 텐데, 이러한 로직에 `if`문 까지 써야할까? 다음과 같이 처리하면 boolean 방식으로 처리할 수 있다.

```py
red = my_values.get('red',[''])[0] or 0
```

빈 문자열, 빈 리스트, 0이 모두 False로 평가되는 파이썬의 특징을 이용한 것인데, 첫 표현식이 False라면 두번째 표현식이 대입되는 과정이다. 하지만 이 표현식은 읽기 어렵다. 결국 문자열이기 때문에 정수값으로 파싱까지 하게되면 다음과 같이 너무 복잡해진다.

```py
red = int(my_values.get('red',[''])[0] or 0)
```

이를 삼항연산자로 풀어보자. 그렇다면 다음과 같다.

```py
red = my_values.get('red',[''])
red = int(red[0]) if red[0] else 0
```

하지만 이 모든 로직을 반복하여 사용해야 한다면 헬퍼함수를 쓰는 게 좋다.

```py
def get_int(values, key, default=0):
  found_str = values.get(key,[''])
  if found_str[0]:
    found_str = int(found_str[0])
  else:
    found_str = default
  return found_str
```

결국 호출코드는 다음과 같아진다.

```py
red = get_int(my_values,'red')
```

1.삼항 연산자를 사용하지 않아서 -> 명확하다 2. 한 줄로 표현할 로직을 따로 분리했다 -> 이해하기 쉽다
파이썬의 내장모듈 sys 안을 조사하여서도 알아낼 수 있다.
