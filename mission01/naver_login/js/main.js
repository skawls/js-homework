
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



// 상태 변수
let isLoggedIn = false;
let errorMessage = '';

function handleLogin() {
  const emailInput = document.getElementById('userEmail');
  const passwordInput = document.getElementById('userPassword');

  const email = emailInput.value;
  const password = passwordInput.value;

  // 이메일 및 비밀번호 유효성 검사
  if (!emailReg(email)) {
    errorMessage = '이메일은 유효한 형식이어야 합니다.';
  } else if (!pwReg(password)) {
    errorMessage = '비밀번호는 영문, 숫자, 특수문자를 포함한 6자 이상 16자 이하여야 합니다.';
  } else if (email !== user.id || password !== user.pw) {
    errorMessage = '이메일 또는 비밀번호가 일치하지 않습니다.';
  } else {
    // 로그인 성공
    isLoggedIn = true;
    errorMessage = '';

    window.location.href = 'welcome.html';
  }

  // 에러 메시지 출력
  const errorMessageElement = document.getElementById('errorMessage');
  errorMessageElement.textContent = errorMessage;

  // 로그인 상태에 따른 처리
  if (isLoggedIn) {
    // 로그인 성공 시 수행할 동작
    console.log('로그인 성공!');
  } else {
    // 로그인 실패 시 수행할 동작
    console.log('로그인 실패!');
  }
}






