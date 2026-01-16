/**
 * FERRARI 499P - TECHNICAL DOSSIER LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ЕФЕКТ ДРУКУ ТЕКСТУ (Typing Effect)
    const textElement = document.getElementById('typing-text');
    if (textElement) {
        const content = textElement.innerHTML;
        textElement.innerHTML = '';
        
        let i = 0;
        function type() {
            if (i < content.length) {
                textElement.innerHTML += content.charAt(i);
                i++;
                setTimeout(type, 15); // Швидкість друку (мс)
            }
        }
        
        // Запуск через невелику паузу після завантаження
        setTimeout(type, 500);
    }

    // 2. НАЛАШТУВАННЯ GLITCH ЕФЕКТУ
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSection = document.querySelector('.hero');
    
    if (heroTitle && heroSection) {
        // Копіюємо текст заголовка в атрибут data-text для CSS ефектів
        heroSection.setAttribute('data-text', heroTitle.innerText);
    }

    // 3. АНІМАЦІЯ ПРИ СКРОЛІ (Reveal Animation)
    // Робимо так, щоб блоки специфікацій та відео плавно з'являлися
    const observerOptions = {
        threshold: 0.2 // Подія спрацює, коли 20% блоку буде видно
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Додаємо класи для відстеження (Specs та Video)
    const elementsToAnimate = document.querySelectorAll('.specs-box, .video-showcase, .info-content');
    elementsToAnimate.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        revealObserver.observe(el);
    });

    // 4. ФУНКЦІЯ ДЛЯ ПЛАВНОЇ ПОЯВИ (допоміжний клас)
    // Додаємо CSS стиль динамічно через JS для анімації появи
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // 5. ЛОГУВАННЯ СТАТУСУ (Для імітації "системи")
    console.log("--- FERRARI 499P SYSTEMS ONLINE ---");
    console.log("Telemetry: Connected");
    console.log("Aero Data: Optimized");
});

/** * ДОДАТКОВО: Паралакс ефект для Hero (опціонально)
 * Робить фонове зображення рухомим при скролі
 */
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = (scrollValue * 0.5) + 'px';
    }
});
