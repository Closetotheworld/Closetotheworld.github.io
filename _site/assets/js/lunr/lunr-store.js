var store = [{
        "title": "git블로그 시작!!!",
        "excerpt":"첫 블로그의 첫 글을 시작했따!  ","categories": ["daily"],
        "tags": ["diary"],
        "url": "https://closetotheworld.github.io/daily/post/",
        "teaser": null
      },{
        "title": "TCP와 UDP ?",
        "excerpt":"개인적으로 정리한 의견임다! 네트워크에서의 단어들 프로토콜 -&gt; 네트워크의 통신 규칙 네트워크 아키텍처 -&gt; 프로토콜 여러개를 조합한 것 호스트 -&gt; TCP/IP로 통신하는 각종 네트워크 기기 전반. 그래서 TCP가 뭔데? 신뢰성 있는 바이트 스트림을 전송하고 받는 것 소켓이라는 종단점을 생성함으로서 이루어짐. 연결 설정 3-way handshake 전이중(전송이 양 방향으로 가능), 점대점(2개의 종단점) 방식....","categories": ["Network"],
        "tags": ["CS","interview"],
        "url": "https://closetotheworld.github.io/network/post2/",
        "teaser": null
      },{
        "title": "Golang와의 첫 만남 - Go series(1)",
        "excerpt":"학습 한 내용 Go의 특징 Golang은? 고루틴을 활용한 동시성 프로그래밍 Golang의 특징 개발속도 Java나 C는 컴파일러들이 전체 라이브러리의 의존성을 탐색하지만 GO 컴파일러는 직접참조 라이브러리의 의존성만 해석함. 동시성 Golang의 강력한 기능 중 하나. 고루틴(goroutine)은 스레드와 유사하지만 더 적은 메모리를 소비하며 더 적은 양의 코드로 구현 가능. 프로그램의 진입점을 비롯하여 다른 고루틴과...","categories": ["Golang"],
        "tags": ["language","tutorial"],
        "url": "https://closetotheworld.github.io/golang/post3/",
        "teaser": null
      },{
        "title": "2021-01-06",
        "excerpt":"오랜만에 집을 왔다 얼마만에 집을 온건지, 추석 이후로 오랜만에 본가에 왔다. 가족들의 얼굴을 오랜만에 보니 너무 좋다. 작년 하반기에는 취업준비니 개인 프로젝트니 공부니 나 자신을 너무 채찍질 했던 것 같다. 그래도 주변 사람과 가족은 챙기면서 살아야지. 다잡은 목표 취업준비를 열심히 하되 나를 놓지말자. 내가 좋아하는 것, 옷이나 클래식음악 등등 쉴...","categories": ["daily"],
        "tags": ["diary"],
        "url": "https://closetotheworld.github.io/daily/210106-diary/",
        "teaser": null
      },{
        "title": "2021-01-07",
        "excerpt":"집에 오니 너무 편하당      일단 잘 먹는다   부모님 얼굴 매일보니 좋다   평화롭다   study      Golang 실습코드 만드느라 포스팅은 몰아서 해야겠다   CS공부한것도 하나씩 올려야지   아무래도 본가에 와서 노트북만 들고 하려니 더블모니터가 그리워잇      오늘도 고생했다!   ","categories": ["daily"],
        "tags": ["diary"],
        "url": "https://closetotheworld.github.io/daily/210107-diary/",
        "teaser": null
      },{
        "title": "2021-01-08",
        "excerpt":"오늘 먹은 것         뒷고기는 항상 옳으시다    내일은 다시 구미로      다시 가서 열심히 포스트하고 열심히 공부하고   얼마 남지않은 연구실에서의 공부 야무지게 끝내자잇   오늘도 고생했따!  ","categories": ["daily"],
        "tags": ["diary"],
        "url": "https://closetotheworld.github.io/daily/210108-diary/",
        "teaser": null
      },{
        "title": "Golang, 간단히 살펴보자!- Go series(2)",
        "excerpt":"학습 한 내용      Go의 흐름   Golang의 실행흐름   Golang의 실행흐름을 알아보자           main.go 에서 보통 시작한다.       # main.go  import (   \"log\"   \"os\" )  func init(){   log.setOutput(os.Stdout) }  func main(){   search.Run(\"wonryang\") }              main 이라는 패키지에 구현되어있다.   Go의 모든 코드는 패키지에 종속되어야 한다.  ","categories": ["Golang"],
        "tags": ["language","tutorial"],
        "url": "https://closetotheworld.github.io/golang/go_series_2/",
        "teaser": null
      },{
        "title": "VScode extension - material theme (vscode custom)",
        "excerpt":"VS code! 내가 가장 좋아하는 에디터이다. 일반 테마보다 예쁜 테마와 아이콘을 사용해보고자 커스텀 하는 법을 검색한 내용을 정리한다. material theme vscode extension을 click ! 이후 material theme을 검색하면 이와 같은 테마가 나온다. extension을 설치한 후 f1을 입력하여 material theme을 적용하면 끝! 본인은 기본테마를 사용한다 . . ! material Icon theme...","categories": ["etc"],
        "tags": ["vscode","custom","tutorial"],
        "url": "https://closetotheworld.github.io/etc/vscode-custom/",
        "teaser": null
      },{
        "title": "WSL2 terminal custom",
        "excerpt":"WSL2? Windows Subsystem Linux 윈도우 시스템을 Linux로도 이용할 수 있는 것! WSL1보다 2가 조금 더 성능이 좋다고 한다. 리눅스의 terminal을 좋아하는 나로서는 너무 환영! terminal을 바꿔보자 MAC에서도 사용하는 oh my zsh를 설치할 것이다. 조금 더 예쁜 터미널 .. 완성이 되면 개발이 더 하고싶어질 거에요! 우선 먼저 zsh를 다운받아야 합니다..! zsh...","categories": ["etc"],
        "tags": ["wsl2","terminal","custom","tutorial"],
        "url": "https://closetotheworld.github.io/etc/wsl2-custom/",
        "teaser": null
      },{
        "title": "2021-01-09",
        "excerpt":"다시 구미로 왔다! 디지털관의 냄새가 역시 제일 편하다 터미널에서 내려서 바로 연구실로 왔다! 바로 집으로 가면 포스트를 안할 것 같아서.. 퀄리티 있는 포스트 적기가 어렵다 아는것 대로 다 적으면 요점이 안 사는 것 같고,, 처음이라 그렇겠지? 많은 포스트를 하게되면 조금 더 괜찮아 질 것 같다 커스텀 포스트를 너무 대충 적은...","categories": ["daily"],
        "tags": ["diary"],
        "url": "https://closetotheworld.github.io/daily/210109-diary/",
        "teaser": null
      },{
        "title": "Programmers level-3 (2xn 타일)",
        "excerpt":"2xn 타일 문제 가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다. 타일을 가로로 배치 하는 경우 타일을 세로로 배치 하는 경우 예를들어서 n이 7인 직사각형은 다음과 같이...","categories": ["Programmers"],
        "tags": ["algorithm","fibonacci"],
        "url": "https://closetotheworld.github.io/programmers/programmers-2xn/",
        "teaser": null
      },{
        "title": "VCNC 코딩테스트 후기",
        "excerpt":"VCNC? 타다, 비트윈을 만든 회사! 타다는 몰라도 비트윈을 여자친구와 사용하고 있어서 공고에서는 vcnc? 라고 궁금했지만 비트윈을 만든 회사라니! 마침 블라인드 채용을 진행하고 있기에 코딩테스트를 신청했다! 처음 신청 시에 어느 회사에 지원할 건지 뜨는데, 비트윈 사용자이기에 비트윈 서버개발자로 신청을 했고, 쏘카에 복수지원 할 것인지도 물어보아서 쏘카 이용자이기도 하기에 체크를 했다! 코딩테스트!...","categories": ["Reviews"],
        "tags": ["codingtest","lookingforajob"],
        "url": "https://closetotheworld.github.io/reviews/vcnc-coding-test-review/",
        "teaser": null
      },{
        "title": "CentOS 7 user 생성과 sudoer",
        "excerpt":"wheel과 sudoer 보통 centOS를 설치하면 초기 아이디는 root로 하여 패스워드를 설정하게 된다. sudo / wheel 그룹은 sudoers 파일에 정의 된 내용을 기반으로 하는 권한을 갖는다. STEP 1 - 사용자 생성 &amp; 비밀번호 설정 &amp; sudo권한 주기 우선 사용자를 생성한다. closetotheworld 를 사용하고싶은 이름으로 바꾸어서 실행. adduser closetotheworld 비밀번호를 설정한다 passwd...","categories": ["linux"],
        "tags": ["CentOS7"],
        "url": "https://closetotheworld.github.io/linux/centos-user-config/",
        "teaser": null
      },{
        "title": "docker 시작 시 참고 사이트",
        "excerpt":"시작할 때 보면 좋은 사이트   1번 사이트  2번 사이트  3번 사이트(subicura님)(도커 무중단 배포하기)  4번 사이트(subicura님)(쿠버네티스 시작하기)  ","categories": ["Docker"],
        "tags": ["container","MSA"],
        "url": "https://closetotheworld.github.io/docker/docker-sites/",
        "teaser": null
      },{
        "title": "Programmers level-3 (kakao 2018 추석트래픽)",
        "excerpt":"추석 트래픽 문제 이번 추석에도 시스템 장애가 없는 명절을 보내고 싶은 어피치는 서버를 증설해야 할지 고민이다. 장애 대비용 서버 증설 여부를 결정하기 위해 작년 추석 기간인 9월 15일 로그 데이터를 분석한 후 초당 최대 처리량을 계산해보기로 했다. 초당 최대 처리량은 요청의 응답 완료 여부에 관계없이 임의 시간부터 1초(=1,000밀리초)간 처리하는 요청의...","categories": ["Programmers"],
        "tags": ["algorithm"],
        "url": "https://closetotheworld.github.io/programmers/programmers-kakao-2018-thanksgiving/",
        "teaser": null
      }]
