---
title: "Programmers level-3 (단어변환)"

categories:
  - Programmers
tags:
  - [algorithm, DFS]

toc: true
toc_sticky: true

last_modified_at: 2021-01-17T18:46:00
---

### 문제

두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

```
1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.
```

예를 들어 begin이 hit, target가 cog, words가 [hot,dot,dog,lot,log,cog]라면 hit -> hot -> dot -> dog -> cog와 같이 4단계를 거쳐 변환할 수 있습니다.

두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

- 제한사항
  - 각 단어는 알파벳 소무자로만 이루어져 있습니다.
  - 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
  - words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
  - begin과 target은 같지 않습니다.
  - 변환할 수 없는 경우에는 0을 return 합니다.
- 입출력 예

  | begin | target | words                          | return |
  | ----- | ------ | ------------------------------ | ------ |
  | "hit" | "cog"  | [hot, dot, dog, lot, log, cog] | 4      |
  | "hit  | "cog"  | [hot, dot, dog, lot, log, cog] | 0      |

### 코드

- 문제 접근
  - begin word에서 target으로 나아갈 때 필요한 조건?
    1. target으로 가기 위해 글자 하나가 다른 단어가 words에 있는가?
    2. 1번 조건을 만족한다면, 그 단어로 변환 후 다시 그 단어가 될 수는 없다.
    3. 따라서 가지를 칠 수 있는 방법 중 변환이 되는 시점에서의 count를 구한다.
    4. 변환이 되는 시점에서의 count를 모은 list에서 min값을 반환한다.

```py
def solution(begin, target, words):
    answer = []
    def dfs(count, word, target, words, visited):
        if word == target:
            answer.append(count)
        elif all(visited) == True:
            return
        for i, w in enumerate(words):
            if [w1 == w2 for w1,w2 in zip(word,w)].count(False) == 1 and visited[i] == False:
                visited[i] = True
                dfs(count+1,w,target,words,visited)
                visited[i] = False

    visited = [False] * len(words)

    dfs(0,begin,target,words,visited)
    if len(answer) == 0:
        answer = 0
    else:
        answer = min(answer)
    return answer
```
