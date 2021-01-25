---
title: "bashrc나 zshrc 환경변수 설정 잘 못해서 아무 명령어도 가능하지 않을 때"

categories:
  - linux
tags:
  - [path, command]

toc: true
toc_sticky: true

last_modified_at: 2021-01-25T22:40:00
---

## 임시 PATH로 인식시키기

```bash
PATH="$PATH:/usr/local/bin:/usr/bin:/bin"
export PATH
```

이후 잠깐 이전처럼 명령어가 가능하므로 재설정 한다.
