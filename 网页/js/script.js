document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const nav = document.querySelector('nav');
    let currentSection = 0;
    let isScrolling = false;

    // 添加 active 类到第一个 section
    sections[currentSection].classList.add('active');


    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
          isScrolling = true;

            // Remove active class from all sections
            sections.forEach(section => section.classList.remove('active'));

            // Add active class to the current section
            sections[index].classList.add('active');

          sections[index].scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            currentSection = index;
            isScrolling = false;

             // 滚动到顶部时显示导航栏
             if (index === 0) {
                nav.classList.add('show');
            } else {
                nav.classList.remove('show');
            }

          }, 1000); // 调整超时时间以匹配滚动持续时间
        }
    }

    window.addEventListener('wheel', (event) => {
        if (isScrolling) return;

        if (event.deltaY > 0) {
            // Scrolling down
            scrollToSection(currentSection + 1);
        } else {
            // Scrolling up
            scrollToSection(currentSection - 1);
        }
    });

    // 基于滚动位置的初始显示/隐藏
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            nav.classList.add('show');
        } else {
            nav.classList.remove('show');
        }
    });

    // 页面加载时，初始显示导航栏
    function showNavOnLoad() {
        nav.classList.add('show');
    }

    // 调用此函数在最初显示导航栏
    showNavOnLoad();
});
