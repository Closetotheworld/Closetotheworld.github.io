---
title: "트랜잭션?"

categories:
  - Database
tags:
  - [CS, interview, transaction]

toc: true
toc_sticky: true

last_modified_at: 2021-02-16T02:00:00
---

## &#10067; 트랜잭션이란?

> 데이터베이스의 상태를 변화시키기 위해서 수행하게 되는 작업 단위

상태를 변화시킨다는 것은 그럼 무엇일까?

- SQL을 통해 DB에 접근해서 다음을 수행하는 것
  - SELECT, INSERT, DELETE, PDATE

### &#10071; 트랜잭션의 특징(ACID)

- 원자성(Atomicity)

  - 트랜잭션이 DB 전체에 반영되거나 or 아예 되지 않아야 한다

- 일관성(Consistency)

  - 트랜잭션의 결과는 항상 일관성이 있어야 함

- 독립성(Isolation)

  - 둘 이상의 트랜잭션이 동시에 실행되고 있을 때, 트랜잭션의 독립성이 보장되어야 한다(다른 트랜잭션의 연산에 영향이 있어서는 안된다)

- 지속성(Durability)
  - 트랜잭션이 결국 완료가 되었다면 결과는 영구적으로 반영되어야 한다.

보통 mysql에서 commit이 하나의 트랜잭션의 단위에서의 연산이다.

### &#10071; 트랜잭션 관리

- DBMS는 보통 아래와 같이 구성이 된다.
  - Query Processor
  - Storage System
    - Page Buffer Manager / Buffer manager : 메인 메모리에 유지하는 페이지를 관리한다.
    - 버퍼 정책에 따라 UNDO, REDO가 요구되므로 트랜잭션 관리에 중요하다.
- UNDO
  - 수정된 page가 buffer 교체 알고리즘에 따라 디스크에 출력될 수 있다. 버퍼 교체는 트랜잭션과는 무관하게 버퍼의 상태에 따라서 결정되는데, 정상적으로 종료되지 않은 트랜잭션이 변경한 page는 원상복구가 되어야 한다. 이를 undo!
  - steal : 수정페이지를 언제든 디스크에 쓸 수 있는 정책
    - 대부분의 DBMS가 채택했다
    - UNDO logging과 복구를 필요로한다.
