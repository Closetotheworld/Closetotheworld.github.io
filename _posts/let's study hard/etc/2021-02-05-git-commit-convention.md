---
title: "git commit convention에 대하여"

categories:
  - etc
tags:
  - [github, git, command]

toc: true
# toc_sticky: true

last_modified_at: 2021-02-05T01:16:00
---

# GIT commit convention!

협업간에 서로가 알아볼 수 있는 좋은 컨벤션의 필수성을 느꼈지만, 매번 할 때 마다 나중엔 봐야지 나중엔 봐야지 했는데 개발에 급급해 적용하지 못했다. 이번 정리를 기회로 앞으로는 컨벤션에 따라 커밋메세지를 달아봐야지.

커밋메세지는 Udacity를 참고했습니다!

### 기본 컨셉

```
type : subject

body

footer
```

#### 타입

타입은 타이틀 내에 포함되며 커밋 타입은 아래의 타입들 중 하나로 구성된다.

- feat : 새로운 기능 추가(new feature)
- fix : 버그 수정(bug fix)
- docs : 문서 수정(changes to documentation)
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor : 코드 리팩토링
- test : 테스트 코드, 리팩토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정

#### 제목

제목은 50자를 넘기면 안되며, 문장의 끝에 마침표를 넣지 않는다. 과거시제를 사용하지 말고 명령어로 작성한다.

#### 본문

커밋 본문 내용은 선택사항이다. 타이틀 이외로 추가정보를 작성하고 싶을 경우에 기입한다.

#### 푸터

푸터도 선택사항이며 보통 이슈를 추적하기 위해 이슈 ID를 넣어준다.
