    // HTML 요소들을 가져옵니다.
const openMenuBtn = document.getElementById('open-menu-btn');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const loginBtn = document.getElementById('login-btn');

// 메뉴 열기 버튼을 클릭했을 때
openMenuBtn.addEventListener('click', () => {
    // 사이드 메뉴와 오버레이에 'active' 클래스를 추가합니다.
    sideMenu.classList.add('active');
    overlay.classList.add('active');
});

// 오버레이를 클릭했을 때 메뉴를 닫습니다.
overlay.addEventListener('click', () => {
    // 사이드 메뉴와 오버레이에서 'active' 클래스를 제거합니다.
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// 로그인 버튼 클릭 시 간단한 알림창
loginBtn.addEventListener('click', () => {
    alert('로그인 페이지로 이동합니다!');
    // 여기에 실제 로그인 페이지로 이동하는 코드를 작성할 수 있습니다.
    // window.location.href = '/login'; 
});