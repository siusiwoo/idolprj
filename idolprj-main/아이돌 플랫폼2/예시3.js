// HTML 요소들을 가져옵니다.
const loginPage = document.getElementById('login-page');
const mainPage = document.getElementById('main-page');
const loginButton = document.getElementById('login-btn');

loginButton.addEventListener('click', () => {
    // 여기에 로그인 성공 여부 로직...
    
    // 로그인 성공 시
    // 로그인 화면을 숨기고 메인 화면을 보이게 합니다.
    loginPage.style.display = 'none';
    mainPage.style.display = 'block';
});