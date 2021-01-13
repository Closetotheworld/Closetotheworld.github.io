---
title: "Programmers level-3 (kakao 2018 추석트래픽)"

categories:
  - Programmers
tags:
  - [algorithm]

toc: true
toc_sticky: true

last_modified_at: 2021-01-13T18:40:00
---

## 추석 트래픽

- 문제

  - 이번 추석에도 시스템 장애가 없는 명절을 보내고 싶은 어피치는 서버를 증설해야 할지 고민이다. 장애 대비용 서버 증설 여부를 결정하기 위해 작년 추석 기간인 9월 15일 로그 데이터를 분석한 후 초당 최대 처리량을 계산해보기로 했다. 초당 최대 처리량은 요청의 응답 완료 여부에 관계없이 임의 시간부터 1초(=1,000밀리초)간 처리하는 요청의 최대 개수를 의미한다.

- 입력 형식

  - `solution` 함수에 전달되는 `lines` 배열은 N(1 ≦ N ≦ 2,000)개의 로그 문자열로 되어 있으며, 각 로그 문자열마다 요청에 대한 응답완료시간 S와 처리시간 T가 공백으로 구분되어 있다.

  - 응답완료시간 **S**는 작년 추석인 2016년 9월 15일만 포함하여 고정 길이 `2016-09-15 hh:mm:ss.sss` 형식으로 되어 있다.

  - 처리시간 T는 `0.1s`, `0.312s`, `2s` 와 같이 최대 소수점 셋째 자리까지 기록하며 뒤에는 초 단위를 의미하는 `s`로 끝난다.

  - 예를 들어, 로그 문자열 `2016-09-15 03:10:33.020 0.011s`은 2016년 9월 15일 오전 3시 10분 **33.010초**부터 2016년 9월 15일 오전 3시 10분 **33.020초**까지 **0.011초** 동안 처리된 요청을 의미한다. (처리시간은 시작시간과 끝시간을 포함)

  - 서버에는 타임아웃이 3초로 적용되어 있기 때문에 처리시간은 **0.001 ≦ T ≦ 3.000이다.**

  - `lines` 배열은 응답완료시간 S를 기준으로 오름차순 정렬되어 있다.

- 출력 형식

  - `solution` 함수에서는 로그 데이터 `lines` 배열에 대해 **초당 최대 처리량**을 리턴한다.

- 입출력 예제

  - 예제 1

    - 입력: [<br>
      2016-09-15 01:00:04.001 2.0s,<br>
      2016-09-15 01:00:07.000 2s<br>]

    - 출력: 1

  - 예제2

    - 입력: [<br>2016-09-15 01:00:04.002 2.0s<br>,
      2016-09-15 01:00:07.000 2s<br>]

    - 출력: 2

    - 설명: 처리시간은 시작시간과 끝시간을 포함하므로 첫 번째 로그는 `01:00:02.003 ~ 01:00:04.002`에서 2초 동안 처리되었으며, 두 번째 로그는 `01:00:05.001 ~ 01:00:07.000`에서 2초 동안 처리된다. 따라서, 첫 번째 로그가 끝나는 시점과 두 번째 로그가 시작하는 시점의 구간인 `01:00:04.002 ~ 01:00:05.001` 1초 동안 최대 2개가 된다.

  - 예제3

    - 입력: [<br>
      2016-09-15 20:59:57.421 0.351s,<br>
      2016-09-15 20:59:58.233 1.181s,<br>
      2016-09-15 20:59:58.299 0.8s,<br>
      2016-09-15 20:59:58.688 1.041s,<br>
      2016-09-15 20:59:59.591 1.412s,<br>
      2016-09-15 21:00:00.464 1.466s,<br>
      2016-09-15 21:00:00.741 1.581s,<br>
      2016-09-15 21:00:00.748 2.31s,<br>
      2016-09-15 21:00:00.966 0.381s,<br>
      2016-09-15 21:00:02.066 2.62s<br>
      ]

    - 출력: 7

    - 설명: 아래 타임라인 그림에서 빨간색으로 표시된 1초 각 구간의 처리량을 구해보면 `(1)`은 4개, `(2)`는 7개, `(3)`는 2개임을 알 수 있다. 따라서 초당 최대 처리량은 7이 되며, 동일한 최대 처리량을 갖는 1초 구간은 여러 개 존재할 수 있으므로 이 문제에서는 구간이 아닌 개수만 출력한다.  
      ![image](https://user-images.githubusercontent.com/37994634/104436182-a1bcde00-55d0-11eb-8c43-c2578688536c.png){: width:250 height:250}

## 풀이

- 접근 방법

  - 결국 초당 몇 개의 작업을 수행하는 지에 대한 count 중 최댓값을 구하는 것
  - 초당 작업의 수행 수가 변화는 시점에대한 비교를 `작업이 끝날 때` 해주면 된다.

  1. 우선 로그에서 날짜 부분을 떼어내고, 끝나는 시간과 작업시간으로 시작시간을 계산한다.
  2. 계산 이후 시간을 동일시한다. `ms` 단위로 동일하게 바꾸어주었다.

     ```py
     # 1,2의 접근방법에 대한 부분코드
     time_list = list()
     for line in lines:
         end_time_split = line.split(' ')[1].split(':')
         end_time_to_mil = (int(end_time_split[0]) * 3600 + int(end_time_split[1]) * 60 + float(end_time_split[2])) * 1000
         start_time_to_mil = end_time_to_mil - float(line.split(' ')[2][:-1])*1000
         time_list.append([start_time_to_mil,end_time_to_mil])
     ```

  3. 이후 시간순으로 정렬을 한다

     ```py
     time_list = sorted(time_list, key= lambda x : x[0])
     ```

  4. 끝나는 시간에 999ms를 더한다(끝난 시점부터 999ms초 까지는 그 구간에서 유효한 동시작업이라고 인정되기 때문). <br>이후 끝나는 시간과 999ms를 더한 시간 구간에 대해서 time_list를 비교하여 work_count를 센 후 max count를 반환한다.

     ```py
     work_count=0
     for time in time_list:
         start, end =time[1], time[1] + 999
         for t in time_list:
             if t[0] < end and t[1] >= start:
                 work_count+=1
         answer.append(work_count)
         work_count = 0
     return max(answer)
     ```

- 전체 코드

  ```py
  def solution(lines):
    answer = []
    time_list = list()
    for line in lines:
        end_time_split = line.split(' ')[1].split(':')
        end_time_to_mil = (int(end_time_split[0]) * 3600 + int(end_time_split[1]) * 60 + float(end_time_split[2])) * 1000
        start_time_to_mil = end_time_to_mil - float(line.split(' ')[2][:-1])*1000
        time_list.append([start_time_to_mil,end_time_to_mil])

    time_list = sorted(time_list, key= lambda x : x[0])
    work_count=0
    for time in time_list:
        start, end =time[1], time[1] + 999
        for t in time_list:
            if t[0] < end and t[1] >= start:
                work_count+=1
        answer.append(work_count)
        work_count = 0
    return max(answer)
  ```
