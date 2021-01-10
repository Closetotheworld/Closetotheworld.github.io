---
title: "Programmers level-3 (2xn 타일)"

categories:
  - Programmers
tags:
  - [algorithm, fibonacci]

toc: true
toc_sticky: true

last_modified_at: 2021-01-10T22:00:00
---

### 2xn 타일 문제

- 가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.

  - 타일을 가로로 배치 하는 경우
  - 타일을 세로로 배치 하는 경우
  - 예를들어서 n이 7인 직사각형은 다음과 같이 채울 수 있습니다.  
    ![image](https://user-images.githubusercontent.com/37994634/104123669-f0c80080-538f-11eb-877c-c24f377e3480.png){: width:300 height:300}
    <br>

- 직사각형의 가로의 길이 n이 매개변수로 주어질 때, 이 직사각형을 채우는 방법의 수를 return 하는 solution 함수를 완성해주세요.

- 제한사항
  - 가로의 길이 n은 60,000이하의 자연수 입니다.
  - 경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return해주세요.

### 코드

- `풀이` : n에 따라 늘어나는 직사각형의 경우의 수를 알아보게 되면 fibonacci 수열로 늘어나게 된다. 따라서 피보나치 수를 구하면 되는 문제이다.

```py
def solution(n):
    answer = 0
    prev1, prev2 = 1,1

    for i in range(2,n+1):
        temp = prev2
        prev2 = prev1 + prev2
        prev1 = temp

    return prev2 % 1000000007

if __name__ == "__main__":
    n=0
    print(solution(n))
```
