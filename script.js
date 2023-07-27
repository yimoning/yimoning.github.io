let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hide');
    } else {
        navbar.classList.remove('hide');
    }
    lastScrollTop = scrollTop;
});

window.addEventListener('mousemove', (event) => {
    if (event.clientY <= 50) {
        navbar.classList.remove('hide');
    }
});
