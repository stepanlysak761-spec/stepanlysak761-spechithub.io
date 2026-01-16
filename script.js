document.addEventListener('DOMContentLoaded', () => {
    // 20 історичних фактів про 499P
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
        "Повний привід активується лише після 190 км/год за регламентом BoP.",
        "Двигун V6 є структурним (несучим) елементом шасі.",
        "Шасі боліда виготовлено повністю з вуглецевого волокна (карбону).",
        "У 2024 році Ferrari захистила титул, вигравши Ле-Ман вдруге поспіль.",
        "499P Modificata — клієнтська версія потужністю 870 к.с. без лімітів FIA.",
        "Аеродинаміка створює понад 1 тонну притискної сили на високих швидкостях.",
        "Кермо боліда має понад 40 кнопок та перемикачів керування системами.",
        "На прямій Мюльсан болід здатний розганятися до швидкості понад 340 км/год.",
        "Система Brake-by-Wire дозволяє ефективно заряджати батарею при гальмуванні."
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

    // Ефект друкарської машинки
    const typeText = "ACCESSING_CORE... Завантаження даних Ferrari 499P завершено. Система готова до аналізу технічних характеристик та історичних перемог.";
    let i = 0;
    function typeEffect() {
        if (i < typeText.length) {
            document.getElementById('typewriter').innerHTML += typeText.charAt(i);
            i++;
            setTimeout(typeEffect, 35);
        }
    }

    // Анімація появи при скролі
    const reveal = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                el.classList.add('active');
            }
        });
    };

    // Зміна режиму (Engine Mode)
    document.getElementById('mode-btn').addEventListener('click', () => {
        const colors = ['#ff0000', '#ffd700', '#00f2ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--accent', randomColor);
        document.getElementById('status-display').innerText = 'MODE_CHANGED';
        setTimeout(() => { document.getElementById('status-display').innerText = 'SYS_NOMINAL'; }, 2000);
    });

    window.addEventListener('scroll', reveal);
    setTimeout(typeEffect, 800);
    reveal();
});
