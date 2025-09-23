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


    // 헤더 그림자 효과 (스크롤)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

   

    // '더 보기' 버튼 토글 (더 보기/접기)
    // '.read-more-button' 클릭 시 '.profile' 섹션의 'expanded' 클래스를 토글하고 버튼 텍스트를 변경합니다.
    const readMoreButton = document.querySelector('.read-more-button');
    const profileSection = document.querySelector('.profile');

    // 'readMoreButton'이 존재할 때만 이벤트 리스너를 추가합니다.
    if (readMoreButton && profileSection) {
        readMoreButton.addEventListener('click', () => {
            profileSection.classList.toggle('expanded');
            
            if (profileSection.classList.contains('expanded')) {
                readMoreButton.textContent = '접기';
            } else {
                readMoreButton.textContent = '더 보기';
            }
        });
    }
});