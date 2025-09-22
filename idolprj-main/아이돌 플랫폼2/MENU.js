document.addEventListener('DOMContentLoaded', () => {
    // === 기본 메뉴 및 탭 기능 ===
    
    // 탭 버튼과 콘텐츠 선택
    const tabs = document.querySelectorAll('.kategore li[data-target]');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.target;

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');

            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // 페이지 로드 시 기본 활성화 (highlight)
    const defaultTab = document.querySelector('.kategore li[data-target="highlight"]');
    if (defaultTab) defaultTab.click();

    // '더 보기' 버튼 토글
    const readMoreButton = document.querySelector('.read-more-button');
    const profileSection = document.querySelector('.profile');

    if (readMoreButton && profileSection) {
        readMoreButton.addEventListener('click', () => {
            profileSection.classList.toggle('expanded');
            readMoreButton.textContent = profileSection.classList.contains('expanded') ? '접기' : '더 보기';
        });
    }

    // 헤더 그림자 효과 (스크롤)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // '+' 버튼 (동영상 업로드)
    const uploadButton = document.getElementById('upload-button');
    const videoInput = document.getElementById('video-input');
    const statusMessage = document.getElementById('status-message');

    if (uploadButton && videoInput && statusMessage) {
        uploadButton.addEventListener('click', () => {
            videoInput.click();
        });

        videoInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                uploadVideo(file);
            }
        });

        function uploadVideo(file) {
            const formData = new FormData();
            formData.append('video', file);

            fetch('/api/upload-video', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                statusMessage.textContent = '동영상 업로드 완료! 🎉';
                console.log('업로드 성공:', data);
            })
            .catch(error => {
                statusMessage.textContent = '업로드 실패 😢';
                console.error('업로드 실패:', error);
            });
        }
    }

    // === 사이드 메뉴 및 로그인 버튼 기능 ===

    // HTML 요소들을 가져옵니다.
    const openMenuBtn = document.getElementById('open-menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('overlay');
    const loginBtn = document.getElementById('login-btn');

    // 메뉴 열기 버튼을 클릭했을 때
    if (openMenuBtn && sideMenu && overlay) {
        openMenuBtn.addEventListener('click', () => {
            sideMenu.classList.add('active');
            overlay.classList.add('active');
        });

        // 오버레이를 클릭했을 때 메뉴를 닫습니다.
        overlay.addEventListener('click', () => {
            sideMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    // 로그인 버튼 클릭 시 간단한 알림창
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('로그인 페이지로 이동합니다!');
        });
    }
});