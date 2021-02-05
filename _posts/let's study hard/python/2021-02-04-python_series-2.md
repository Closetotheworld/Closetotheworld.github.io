---
title: "Pythonic 1 (버전, PEP8 그리고 bytes, unicode, str 차이) - python series 1"

categories:
  - Python
tags:
  - [python, codingskill, cleancode, PEP8]

toc: true
toc_sticky: true

last_modified_at: 2021-02-04T02:09:00
---

## &#10067; 사용 중인 파이썬의 버전을 알고 쓰자

&#10003; 기본적으로 --version 플래그를 이용하여 사용 중인 파이썬의 버전은 짚고 넘어가자!

```bash
python --version
Python 3.7.8
```

파이썬의 내장모듈 sys 안을 조사하여서도 알아낼 수 있다.

```py
import sys
print(sys.version_info)
```

## &#10067; PEP 8 스타일 가이드를 따르자

Python Enhancement Proposal의 줄임말이다.  
PEP 8에는 방법이 자세히 나와있다.
링크는 [여기여기](https://www.python.org/dev/peps/pep-0008/)

### &#10071; whitespace

&#10003; 파이썬에서 공백은 문법적으로 의미가 있는데, 특히 코드의 명료성 때문에 민감하다.

- 탭이 아닌 스페이스로 들여쓰기
- 들여쓰기는 각 수준마다 스페이스 네 개
- 한 줄의 문자 길이가 79자 이하
- 표현식이 길어서 다음줄로 이어진다면, 일반적인 들여쓰기 수준에 추가로 스페이스 네 개를 사용
- 함수와 클래스는 빈 줄 두 개로 구분해야 한다.
- 클래스에서 메서드는 빈 줄 하나로 구분해야 한다.
- 리스트 인덱스, 함수 호출, 키워드 인수 할당에는 스페이스를 사용하지 않는다.
- 변수할당 앞 뒤에 스페이스를 하나만 사용한다.

### &#10071; 명명

&#10003; PEP8은 독자적 명명 스타일을 제안함.

- 함수, 변수, 속성은 lowercase_underscore 형식
- protected 인스턴스는 \_leading_underscore 형식
- private 인스턴스는 \_\_double_leading_underscore 형식
- 클래스와 예외는 CapitalizedWord 형식
- 모듈 수준 상수는 ALL_CAPS
- 클래스의 인스턴스 메서드는 첫 파라미터를 self
- 클래스 메서드 첫 파라미터 cls

### &#10071; 표현식과 문장

&#10003; 파이썬에서는 "어떤 일을 하는 확실한 방법이 하나만 있어야 한다." 는 말이 있다.

- 긍정 표현식의 부정( `if not a is b`) 대신에 인라인 부정(`if a is not`)을 사용한다.
- 길이를 확인하여 빈 값을 확인하지 않는다.
  - &#10060; `if len(somelist) == 0`
  - &#128640; `if not somelist`
- 비어있지 않은 값에도 위와 같은 방식이 적용된다. 비어있지 않는다면 `if somelist`가 `True` 이다.
- 한 줄로 된 if문, for문과 while 루프, except문을 쓰지 않는다.
- 항상 파일의 맨 위에 `import` 문을!
- 모듈을 import 할 때는 항상 절대 이름을 사용한다.
  - bar 패키지의 foo 모듈을 임포트 할 때는 `import foo`가 아닌 `from bar import foo`!
- 상대적 임포트를 해야 한다면, 명시적인 구문을 써서 `from . import foo` 라고 한다.
- `import` 시에는 표준 라이브러리 모듈, 서드파티 모듈, 자신이 만든 모듈 순으로 구분한다.

### &#128526; 핵심

- 파이썬 코드를 작성할 때 PEP8을 따르자
- 협업을 위해 공통 스타일을 공유해야 한다.
- 일관성 있는 스타일로 작성하면 수정이 쉽다.

## &#10067; bytes, str, unicode의 차이점을 알자.

&#10003; 파이썬 3은 bytes와 str 두 타입으로 문자 시퀀스를 나타낸다.

- bytes는 raw 8비트, str은 유니코드 문자

&#10003; 유니코드를 바이너리 데이터(raw 8비트)로 표현하는 방법은 많은데, 가장 일반적인 방법은 `UTF-8` 이다. 유니코드 문자를 바이너리로 변환 할 때에는 `encode` 메서드를 사용하며 반대는 `decode`이다.

&#10003; 보통 외부에 제공할 인터페이스에서는 유니코드를 인코드하고 디코드한다. 프로그램의 핵심 부분에서는 유니코드 문자 타입을 사용하며, 문자 인코딩에 대해서는 어떤 가정도 하지 않는다. 이렇게 하면 출력 텍스트 인코딩이 유지되면서도 다른 텍스트 인코딩을 쉽게 수용할 수 있다.

파이썬에서는 문자타입이 분리되어있는 탓에 일반적으로 다음 두 가지 상황에 부딪힌다.

- UTF-8로 인코드된 문자인 raw 8비트 값 처리
- 인코딩이 없는 유니코드 문자 처리

이 두 경우에는 헬퍼함수가 필요하게 된다.

```py
def to_str(bytes_or_str):
  if isinstance(bytes_or_str, bytes):
    value = bytes_or_str.decode('utf-8')
  else:
    value = bytes_or_str
  return value
```

반대의 상황도 마저 필요하게 된다.

```py
def to_bytes(bytes_or_str):
  if isinstance(bytes_or_str, str):
    value= bytes_or_str.encode('utf-8')
  else:
    value = bytes_or_str
  return value
```

### &#128526; 핵심

- bytes는 8비트 raw, str은 unicode를 저장한다. >나 +를 함께 사용할 수 없다.
- 헬퍼를 사용하여 처리할 입력값이 원하는 문자 시퀀스 타입으로 되어있게 하도록 한다.
