## The Movie DataBase API ##
The Movie DataBase Api를 Axios로 받은 후 리액트로 데이터를 보여주는 간단한 사이트입니다.
페이지 구성은 메인페이지와 각 영화의 세부페이지 그리고 영화 검색페이지로 이루어져 있습니다.

React React-Router Axios

작업기간 2021-02-16 ~ 2021-02-19

2021-02-16
Scroll이벤트로 데이터를 불러오려고 했으나 5페이지 부터 로드시 오류가 발생하여 버튼으로 교체함

2021-02-17
DetailPage, SearchPage 추가 ... 검색 후 세부페이지 들어갔다가 뒤로가기시 state가 유지 되지 않아 데이터가 초기화 되버리는 경우가 있음

2021-02-18
localStorage에 검색어를 저장하여 뒤로 갔을 때 기존 검색 값이 다시 로드 될 수 있게 변경함

2021-02-19
SearchPage 검색버튼 Enter 이벤트 추가
