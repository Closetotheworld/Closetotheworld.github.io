---
title: "git 커맨드 정리"

categories:
  - etc
tags:
  - [github, git, command]

toc: true
toc_sticky: true

last_modified_at: 2021-02-03T17:05:00
---

# 깃 커맨드 정리

> 매번 vscode와 pycharm에서 관리도구로 사용하다 보니 커맨드는 필요할 때마다 찾는 것 같아서 정리를 한다.

## 자주 사용하는 명령어

#### 로컬 저장소 생성

- `git init`

#### 원격 저장소를 로컬로 복제

- `git clone <remote github url>`

#### 수정 파일 스테이징

- ` git add <filename or dir>` : 특정 파일을 스테이징
- `git add .` : 전체 스테이징

#### 커밋

- `git commit -m "commit message" `

#### 스테이징과 커밋

- `git commit -am "commit message"` : 기존 커밋한 경우만

#### 원격저장소를 연동

- `git remote add origin <remote github url>`

#### 푸쉬

- `git push origin <push_branch>`

## 되돌리기나 취소 명령어

#### 스테이징 전 수정파일 되돌리기

- `git checkout --filename`

#### 스테이징을 되돌린다

- ` git reset HEAD fileName`

#### 최신 커밋을 취소(스테이징도 같이됨)

- `git reset HEAD^`

#### 특정 커밋으로 돌리기(특정 커밋 이후의 커밋을 삭제한다는 뜻)

- `git reset --hard <특정커밋의 해쉬값>` : 해쉬값은 git log를 통해 가져옴

#### 특정 커밋으로 돌리기(미삭제)

- `git revert <특정커밋 해쉬값>`

## 브랜치 관련

#### 브랜치를 확인한다

- `git branch`

#### 브랜치를 바꾼다

- `git branch checkout <change_branch_name>`

#### 브랜치의 정보는?

- ` git log --oneline --branches`

#### 브랜치의 정보를 그래프로

- `git log --oneline --graph`

#### 브랜치1을 기준으로 2와 비교

- `git log branch1 branch2`

## 브랜치 병합 명령어

#### 다른 파일을 병합(미충돌 시)

- `git merge <branch_name>`

#### 브랜치 삭제

- `git branch -d <branch_name>: 삭제할 때는 기본 브랜치`Main`으로 이동 후 수행하자
  > 동일한 이름으로 브랜치 재생성시 예전 내용이 보임.

#### 원격저장소에 브랜치 삭제 반영

-`git push origin :<branch_name>`
