document.addEventListener('DOMContentLoaded', () => {
    // Функція появи елементів при скролі
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 50;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    // Слухаємо скрол
    window.addEventListener('scroll', reveal);
    
    // Запускаємо один раз при старті
    reveal();

    // Додатковий ефект: легке миготіння тексту логотипу
    const logo = document.querySelector('.glitch');
    setInterval(() => {
        logo.style.opacity = Math.random() > 0.98 ? '0.5' : '1';
    }, 100);
});
