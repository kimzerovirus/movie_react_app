# The Movie DataBase API
>
> - The Movie DataBase Api를 Axios로 받은 후 리액트로 데이터를 보여주는 간단한 사이트입니다.
> - 페이지 구성은 메인페이지와 각 영화의 세부페이지 그리고 영화 검색페이지로 이루어져 있습니다.

<br>

[🎬movie_react_app 보러가기](https://kimzerovirus.github.io/movie_react_app/)

<br>

### 📚 기술스택

| 분야           | 사용 기술                               |작업기간                | 비고 |
| -------------- | -------------------------------------- |----------------------------------- |-------------------------|
| FrontEnd       | React, React-Router, ES6 | 2021-02-16 ~ 2021-02-19 ||
|   | Typescript, Styled-Components, Redux  | 2022-01-07 ~ | 코드 리팩토링 및 마이그레이션 작업|

<br>

### 🛠 작업 내역

---

2021-02-16
 - 프로젝트 환경 설정 및 MainPage 구현

2021-02-17
 - DetailPage, SearchPage 추가 ... 검색 후 세부페이지 들어갔다가 뒤로가기시 state가 유지 되지 않아 데이터가 초기화 되버리는 이슈가 있음

2021-02-18
 - localStorage에 검색어를 저장하여 뒤로 갔을 때 기존 검색 값이 다시 로드 될 수 있게 변경함

2021-02-19
 - SearchPage 검색버튼 Enter 이벤트 추가

2022-01-07
 - Typescript 마이그레이션 작업 시작
 - React Router V6 마이그레이션

2022-01-15
 - 기존의 버튼방식을 무한스크롤방식으로 변경함
 - localStorage에 저장하던 방식을 리덕스로 변경

2022-01-16
 - Styled-Components로 마이그레이션 및 반응형 디자인으로 스타일 변경으로 기존에 모바일 환경에서 이미지 크기가 안맞는 이슈 해결