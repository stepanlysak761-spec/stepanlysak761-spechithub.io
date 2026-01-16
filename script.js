document.addEventListener('DOMContentLoaded', () => {
    // 20 фактів
    const historyFacts = [
        "499P — перший заводський прототип Ferrari для Ле-Мана за 50 років.",
        "Число 499 означає об'єм одного циліндра двигуна V6.",
        "Літера 'P' позначає Prototype (Прототип).",
        "Жовта ліверія — данина пам'яті Ferrari 312 PB 1972 року.",
        "Двигун V6 має кут розвалу 120 градусів для низького центру ваги.",
        "Силова установка базується на архітектурі Ferrari 296 GTB.",
        "Електромотор передньої осі видає 272 к.с. (200 кВт).",
        "Потужність системи обмежена регламентом до 680 к.с.",
        "Батарея працює під надвисокою напругою 900 Вольт.",
        "У 2023 році №51 виграв Ле-Ман у свій дебютний рік.",
        "Це стала 10-та абсолютна перемога Ferrari у Ле-Мані.",
        "Повний привід активується лише після 190 км/год за BoP.",
        "Двигун V6 є структурним (несучим) елементом шасі.",
        "Монокок виготовлений повністю з карбонового волокна.",
        "У 2024 році Ferrari виграла Ле-Ман вдруге поспіль (№50).",
        "499P Modificata — версія для клієнтів потужністю 870 к.с.",
        "Аеродинаміка створює понад 1 тонну притискної сили.",
        "Кермо має понад 40 кнопок керування системами боліда.",
        "Максимальна швидкість на прямій Мюльсан — понад 340 км/год.",
        "Система гальм Brake-by-Wire заряджає батарею при кожному натисканні."
    ];

    const factsGrid = document.getElementById('facts-container');
    historyFacts.forEach((fact, index) => {
        const item = document.createElement('div');
        item.className = 'fact-item';
        item.innerHTML = `
            <span class="fact-id">FACT №${index + 1}</span>
            <p style="font-size: 0.8rem; color: #ccc;">${fact}</p>
        `;
        factsGrid.appendChild(item);
    });

    // Друкарська машинка
    const typeText = "ACCESSING CORE... Ferrari 499P: Гібридний домінант. Повернення до витоків швидкості та перемог у Маранелло. Завантаження даних завершено.";
    let i = 0;
    function typeEffect() {
        if (i < typeText.length) {
            document.getElementById('typewriter').innerHTML += typeText.charAt(i);
            i++;
            setTimeout(typeEffect, 30);
        }
    }

    // Scroll Reveal
    const reveal = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
        });
    };

    // Mode Switcher
    document.getElementById('mode-btn').addEventListener('click', () => {
        const colors = ['#ff0000', '#ffd700', '#00f2ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--accent', randomColor);
    });

    window.addEventListener('scroll', reveal);
    setTimeout(typeEffect, 800);
    reveal();
});
