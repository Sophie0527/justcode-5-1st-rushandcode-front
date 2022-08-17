#  Rush & code

![rush_and_code](https://user-images.githubusercontent.com/105163878/176671996-42783279-4c1a-4ff8-a3ad-bf3a133bb609.JPG)

##  프로젝트 사이트 기능 구현 영상

[Rush & code](https://www.youtube.com/watch?v=woZ2RcwbpXE)

## Members

손소희 [기술블로그](https://sophie0527.tistory.com/), [깃허브](https://github.com/Sophie0527)  
정진우 [기술블로그](https://velog.io/@happyeveryone96), [깃허브](https://github.com/happyeveryone96)  
임상빈 [기술블로그](), [깃허브](https://github.com/wjdghks963)  
서수민 [기술블로그](https://velog.io/@sssm), [깃허브](https://github.com/ssm825)  

## Introduction

- 개발 인원 및 기간
  - 개발 기간 | 2022-06-20 ~ 2022-06-31
  - 개발 인원 | 총 4명
- 프로젝트 선정 이유
  - 2주라는 짧은 기간 안에 이루어지는 첫번째 프로젝트에 어울리는 기본에 충실한 웹 사이트인 LUSH를 선택하게 되었습니다. 지금까지 배웠던 기술들을 잘 녹여낼 수 있었던 프로젝트라 생각합니다.

## 레포지토리 주소

- [Front-end-repo](https://github.com/Sophie0527/justcode-5-1st-rushandcode-front)
- [Back-end-repo](https://github.com/Sophie0527/justcode-5-1st-rushandcode-back)

## Notion 프로젝트 소개

- [Rush & code 노션 페이지](https://www.notion.so/wecode/5-Rush-Code-e28f874f440d4ee8bad7e6d268b12772)

## DB modeling

- [Rush & code db 자료 구조](https://dbdiagram.io/d/6299d08254ce263527530e12)

## Technlogies

#### Front-end
<div> 
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> 
<img src="https://img.shields.io/badge/scss-1572B6?style=for-the-badge&logo=scss&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<br>

#### Back-end
<div> 
<img src="https://img.shields.io/badge/PRISMA-2D3748?style=for-the-badge&logo=PRISMA&logoColor=white"> 
<img src="https://img.shields.io/badge/MYSQL-4479A1?style=for-the-badge&logo=MYSQL&logoColor=white">
<img src="https://img.shields.io/badge/NODE.JS-339933?style=for-the-badge&logo=NODE.JS&logoColor=black">
<img src="https://img.shields.io/badge/POSTMAN-FF6C37?style=for-the-badge&logo=POSTMAN&logoColor=black">
<img src="https://img.shields.io/badge/EXPRESS-000000?style=for-the-badge&logo=EXPRESS&logoColor=white">
<br>

## 구현 기능

### Front-end

|**정진우**|**임상빈**|**서수민**|**손소희**|
|---|---|---|---|
|`제품상세`<br>`장바구니`|`메인페이지`<br>`Footer`|`제품리스트`<br>`Header`|`회원가입`<br>`로그인`<br>`이벤트`|

### **`회원가입 & 로그인`**

<img src="https://user-images.githubusercontent.com/100933263/185034068-26379fc0-c6f5-4bd1-85cb-4f3f858c52b9.gif" width="800"/>

- **회원가입&로그인**  
  - 로그인/회원가입 페이지 레이아웃  
  - 회원가입/로그인 버튼 클릭 시 조건에 맞다면 해당 화면으로 이동  
  - Input 정보 오류 시 오류 별 메세지 알림 기능   
  - 정규표현식을 사용하여 비밀번호에 대한 유효성 검사 기능을 구현  
  
- **validation 내역**  
> **`아이디`** 
<br/> 4자 미만일 경우 → 오류 메세지 띄우기 | 최소 4 이상 입력해주세요. border-color : red
<br/> 4자 이상인 경우 → 메세지 띄우기 | 글자 사용가능한 아이디 입니다. text-color: green  
<br/> **`비밀번호`** 
<br/> 7자 미만일 경우 → 오류 메세지 띄우기 | 최소 7 이상 입력해주세요. border-color : red
<br/> 특수문자 조건 부합하지 않을 경우 → 오류 메세지 띄우기 | 사용불가! 영문대/소문자,숫자,특수문자 중 2가지 이상 조합하세요. border-color : red
<br/> ( 정규표현식을 사용하여 비밀번호에 대한 유효성 검사 기능을 구현 )  
<br/> 7자 이상&특수문자 조건 부합인 경우 → 메세지 띄우기 | 안전한 비밀번호입니다. text-color: green  
<br/> **`비밀번호 확인`** 
<br/> 비밀번호와 다를 경우 → 오류 메세지 띄우기 | 비밀번호가 다릅니다. border-color : red  
<br/> **`이름`** 
<br/> 1 글자 이상 입력해야 함.  
<br/> **`아이디 비밀번호 비밀번호 확인 이름`** 
<br/> 위 조건에 부합하지 않고, 회원가입 버튼 클릭 시 → 오류 메세지 띄우기 | 필수항목입니다. border-color & text-color : red  


<br/>

### **`이벤트`**

<img src="https://user-images.githubusercontent.com/100933263/185034416-e126c9f8-b952-4023-958a-28d03a00b35f.gif" width="800"/>

- **이벤트**  
  - 이벤트 페이지 레이아웃
  - 이벤트 클릭 시 해당 이벤트 페이지로 이동
  
<br/>

---

### Back-end

|**정진우**|**임상빈**|**서수민**|**손소희**|
|---|---|---|---|
|`상품 리스트 API`|`회원가입&로그인 API`|`리뷰 API`|`제품 상세 API`|

[‣ Back-end 더보기](https://github.com/Sophie0527/justcode-5-1st-rushandcode-back)

<br/>

## Contact

- ssh30510044@gmail.com, [기술블로그](https://sophie0527.tistory.com/), [깃허브](https://github.com/Sophie0527)

