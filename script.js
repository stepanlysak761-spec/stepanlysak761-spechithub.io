document.addEventListener('DOMContentLoaded', () => {
    // 1. Масив з 20 історичними фактами
    const historyFacts = [
        "499P — перший заводський прототип Ferrari для Ле-Мана за 50 років.",
        "Число 499 — це об'єм одного циліндра двигуна в кубічних сантиметрах.",
        "Літера 'P' у назві означає Prototype (Прототип).",
        "Ліверія авто — данина поваги легендарній моделі Ferrari 312 PB 1972 року.",
        "Двигун V6 має кут розвалу 120°, що значно знижує центр ваги боліда.",
        "Силова установка базується на архітектурі двигуна від Ferrari 296 GTB.",
        "Електромотор на передній осі видає 272 к.с. та забезпечує повний привід.",
        "Загальна потужність обмежена FIA на рівні 680 к.с. (500 кВт).",
        "Гібридна система працює під надвисокою напругою 900 Вольт.",
        "У 2023 році екіпаж №51 виграв Ле-Ман у свій дебютний сезон.",
        "Перемога 2023 року стала 10-ю абсолютною перемогою Ferrari у 24-годинних гонках.",
        "AWD активується лише після 190 км/год згідно з правилами BoP.",
        "Двигун V6 є структурним елементом шасі, до якого кріпиться задня підвіска.",
        "Монокок повністю виготовлений з вуглецевого волокна в Маранелло.",
        "У 2024 році Ferrari захистила титул Ле-Мана екіпажем №50.",
        "Версія Modificata має 870 к.с., оскільки не обмежена гоночними лімітами.",
        "Аеродинаміка включає активне заднє антикрило та складне днище.",
        "Кожна фара боліда важить лише кілька сотень грамів для економії маси.",
        "У 2025 році приватна команда AF Corse здобула сенсаційну перемогу з №83.",
        "Кермо боліда має понад 40 перемикачів для керування телеметрією в реальному часі."
    ];

    // Генерація фактів у сітку
    const factsContainer = document.getElementById('facts-container');
    historyFacts.forEach((fact, index) => {
        const factCard = document.createElement('div');
        factCard.className = 'fact-item';
        factCard.innerHTML = `
            <span class="fact-id">DATA_FACT_${index + 1}</span>
            <p class="fact-text" style="font-size: 0.85rem; color: #ccc;">${fact}</p>
        `;
        factsContainer.appendChild(factCard);
    });

    // 2. Ефект друкарської машинки
    const typeText = "Ferrari 499P знаменує нову еру в історії Scuderia. Гібридний прототип поєднує безкомпромісну потужність V6 та інтелектуальну електричну тягу для підкорення найскладніших трас світу.";
    const typewriter = document.getElementById('typewriter');
    let i = 0;
    function type() {
        if (i < typeText.length) {
            typewriter.innerHTML += typeText.charAt(i);
            i++;
            setTimeout(type, 25);
        }
    }

    // 3. Скрол-анімація
    const reveal = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) el.classList.add('active');
        });
    };

    // 4. Перемикач ENGINE_MODE
    const btn = document.getElementById('mode-btn');
    let mode = 0;
    btn.addEventListener('click', () => {
        mode = (mode + 1) % 3;
        const colors = ['#ff0000', '#ffd700', '#00f2ff'];
        const titles = ['499P', '312 PB', 'E-AWD'];
        document.documentElement.style.setProperty('--accent', colors[mode]);
        document.getElementById('hero-title').innerText = titles[mode];
    });

    window.addEventListener('scroll', reveal);
    setTimeout(type, 800);
    reveal();
});
