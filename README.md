# Everytime board clone

# 대학교 컴퓨터학부 커뮤니티 
 
<p align="center">
 <img src="https://user-images.githubusercontent.com/93184838/181136182-12f2580d-d4e9-4f12-857a-b8fcea97ad96.png">
</p>

 
## Description  

학교 커뮤니티 서비스인 에브리타임을 기반으로 제작한 프로젝트입니다. 3개월 간 스터디한 내용을 바탕으로 MongoDB, Express.js, React.js, Node.js 스택을 활용해 CRUD 기능을 구현하고 개발역량과 팀 협업 능력을 키우는 것을 목표로 했습니다.

## Features
  
#### 로그인
 
1. 처음 접속 시 메인화면을 로그인으로 설정
2. 토큰을 이용하여 유저가 비로그인 시 마이페이지, 게시판 페이지 안보이게 설정
3. 로그인 시 userId, userPw가 일치하는지 체크
4. input에 userId, userPw 정보가 다 들어왔는지 확인

#### 회원가입 

1. 아이디 및 비밀번호 글자 수 제한 
2. 아이디 중복 체크
3. 학교 검색 및 학번 추가 기능
4. input에 정보가 다 들어왔는지 확인하고 회원가입 승인

#### 게시판

* 차별점을 두기 위해 총 4개의 게시판으로 나뉨 

## Preview
![image](https://user-images.githubusercontent.com/93184838/174944445-8fa8f870-3ca9-4208-a2aa-682ec7537800.png)

- 자유 게시판
- 정보공유 게시판
- 자랑 게시판
- 구인 게시판

## Preview


![image](https://user-images.githubusercontent.com/93184838/174944615-e46b9bfe-79d5-454c-b680-7085c8df1bd0.png)


1. user profile에 설정한 닉네임 표시
2. 게시판 글 작성 기능(300자 이내)
3. 게시판 글 작성 시 익명 기능 및 작성시간 추가
4. 등록된 게시글 좋아요 및 댓글 기능 추가
5. 게시판 페이지네이션 기능 추가





#### 마이페이지

![image](https://user-images.githubusercontent.com/93184838/174944957-fa45f6b6-cc64-40af-8f76-55f91302a2cc.png)

1. 계정 정보 변경 기능 및 메뉴 추가(nickname, email, pass word)
2. 내가 쓴 게시글 및 좋아요 한 글, 작성한 댓글 모아보기 설정
3. 내가 쓴 게시글 및 댓글 삭제 기능 추가
4. 회원탈퇴 기능 추가

#### 로그인 & 회원가입

![image](https://user-images.githubusercontent.com/93184838/174944872-8970c795-8641-4a53-a1cc-ed55398a9835.png)
![image](https://user-images.githubusercontent.com/93184838/174944989-cab04770-de2c-4177-b04d-67a66e76c288.png)

## Requirements

### Language

- Frontend
  - Javascript
- Backend
  - Node.js

### Framework

- Frontend
  - React
- Backend
  - Express.js

### Database

- Backend
  - MongoDB

### Library

- Frontend

  - Redux
  - Styled-components
  - Axios
  - @material-ui/lab
  - @Bootstrap

- Backend
  - Mongoose
  - Bcrypt
  - JWT
  
  -------------------------------------------------- 수정 사항 ---------------------------------------------------

## (추가) 음성인식을 통한 글 작성

1. (추가) 음성인식을 통한 글 작성
![image](https://user-images.githubusercontent.com/93184838/174944610-6574d1f9-ea7e-40c6-984a-3d96dd570c24.png)
![image](https://user-images.githubusercontent.com/93184838/174944692-10725d2c-770a-4655-a97a-e7c2f51083b4.png)
- JS 라이브러리를 사용하여 음성인식을 통한 게시글 작성 가능

2. (추가) 욕설 필터링 구현
![image](https://user-images.githubusercontent.com/93184838/174944701-9c7fdac5-f4e9-4a77-9163-6a3ae262f74d.png)
- 알고리즘을 구현하여 게시글 내에 욕설을 자동으로 필터링하는 기능

3. (예정) 타입스크립트로 재구성      22.09.03
