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

## 사용 중인 파이썬의 버전을 알고 쓰자

기본적으로 --version 플래그를 이용하여 사용 중인 파이썬의 버전은 짚고 넘어가자!

```bash
python --version
Python 3.7.8
```

파이썬의 내장모듈 sys 안을 조사하여서도 알아낼 수 있다.

```py
import sys
print(sys.version_info)
```

## PEP 8 스타일 가이드를 따르자

Python Enhancement Proposal의 줄임말이다.  
PEP 8에는 방법이 자세히 나와있다.
링크는 [여기여기](https://www.python.org/dev/peps/pep-0008/)

### whitespace

파이썬에서 공백은 문법적으로 의미가 있는데, 특히 코드의 명료성 때문에 민감하다.

- 탭이 아닌 스페이스로 들여쓰기
- 들여쓰기는 각 수준마다 스페이스 네 개
- 한 줄의 문자 길이가 79자 이하
- 표현식이 길어서 다음줄로 이어진다면, 일반적인 들여쓰기 수준에 추가로 스페이스 네 개를 사용
- 함수와 클래스는 빈 줄 두 개로 구분해야 한다.
- 클래스에서 메서드는 빈 줄 하나로 구분해야 한다.
- 리스트 인덱스, 함수 호출, 키워드 인수 할당에는 스페이스를 사용하지 않는다.
- 변수할당 앞 뒤에 스페이스를 하나만 사용한다.

### 명명

PEP8은 독자적 명명 스타일을 제안함.

- 함수, 변수, 속성은 lowercase_underscore 형식
- protected 인스턴스는 \_leading_underscore 형식
- private 인스턴스는 \_\_double_leading_underscore 형식
- 클래스와 예외는 CapitalizedWord 형식
- 모듈 수준 상수는 ALL_CAPS
- 클래스의 인스턴스 메서드는 첫 파라미터를 self
- 클래스 메서드 첫 파라미터 cls

### 표현식과 문장
