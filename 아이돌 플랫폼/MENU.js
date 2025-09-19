document.addEventListener('DOMContentLoaded', () => {
    // 햄버거 메뉴 토글
    document.querySelector('.menu-button').addEventListener('click', () => {
        document.querySelector('.main').classList.toggle('show-menu');
    });

    // 카테고리 메뉴 활성화
    document.querySelectorAll('.kategore li').forEach(item => {
        item.addEventListener('click', (event) => {
            document.querySelectorAll('.kategore li').forEach(li => {
                li.classList.remove('active');
            });
            event.target.classList.add('active');
        });
    });

    // 헤더 그림자 효과
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            document.querySelector('header').classList.add('scrolled');
        } else {
            document.querySelector('header').classList.remove('scrolled');
        }
    });

    // '더 보기' 버튼 토글 기능
    // `.profile` div에 확장/축소 기능을 적용한다고 가정
    const readMoreButton = document.querySelector('.read-more-button');
    const profileSection = document.querySelector('.profile');

    readMoreButton.addEventListener('click', () => {
        profileSection.classList.toggle('expanded');
        
        if (profileSection.classList.contains('expanded')) {
            readMoreButton.textContent = '접기';
        } else {
            readMoreButton.textContent = '더 보기';
        }
    });
});