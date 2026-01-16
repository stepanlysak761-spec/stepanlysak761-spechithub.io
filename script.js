document.addEventListener('DOMContentLoaded', () => {
    // 1. Ефект друку тексту
    const textElement = document.getElementById('typing-text');
    const fullText = textElement.innerHTML;
    textElement.innerHTML = '';
    
    let index = 0;
    function type() {
        if (index < fullText.length) {
            textElement.innerHTML += fullText.charAt(index);
            index++;
            setTimeout(type, 20); // Швидкість друку (мс)
        }
    }
    setTimeout(type, 1000); // Запускаємо друк через 1 секунду

    // 2. Анімація появи карток
    const cards = document.querySelectorAll('.specs-card, .info-card, .video-section');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.8s ease ${i * 0.2}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500);
    });

    // 3. Зміна акцентного кольору
    const colorSwitcherBtn = document.getElementById('color-switcher');
    const root = document.documentElement; // Доступ до :root змінних
    const accentColors = [
        '#ff0000',      // Оригінальний Ferrari Red
        '#ffd700',      // Giallo Modena (Ferrari Yellow)
        '#00aaff',      // Electric Blue (як технологічний акцент)
        '#00ff00'       // Lime Green (для контрасту)
    ];
    let currentColorIndex = 0;

    colorSwitcherBtn.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % accentColors.length;
        const newColor = accentColors[currentColorIndex];
        root.style.setProperty('--accent-color', newColor); // Змінюємо змінну в CSS
    });

    // 4. Паралакс ефект для Hero (опціонально)
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = (scrollValue * 0.4) + 'px'; // Зменшив множник для більш плавного ефекту
        }
    });
});
