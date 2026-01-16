document.addEventListener('DOMContentLoaded', () => {
    // 1. Блок 20 історичних фактів
    const historyFacts = [
        "499P — перший заводський прототип Ferrari для топового класу за 50 років.",
        "Число 499 означає робочий об'єм одного циліндра у двигуні V6.",
        "Літера 'P' у назві — це Prototype, символ експериментальних технологій.",
        "Жовті елементи ліверії — це повага до Ferrari 312 PB 1970-х років.",
        "Двигун V6 має кут розвалу 120 градусів для екстремально низького центру ваги.",
        "Силова установка побудована на базі двигуна від дорожньої Ferrari 296 GTB.",
        "Гібридна система на передній осі видає потужність 272 к.с. (200 кВт).",
        "Згідно з регламентом BoP, потужність системи обмежена на рівні 680 к.с.",
        "Енергія зберігається в батареї з високою напругою 900 Вольт.",
        "У 2023 році екіпаж №51 переміг у Ле-Мані вперше за півстоліття.",
        "Ця перемога стала десятим абсолютним тріумфом Ferrari у легендарному марафоні.",
        "Повний привід AWD активується лише при швидкості понад 190 км/год.",
        "Двигун інтегрований у структуру монокока як несучий елемент.",
        "Шасі повністю виготовлено з вуглецевого волокна за авіаційними стандартами.",
        "У 2024 році Ferrari здобула другу поспіль перемогу в Ле-Мані (екіпаж №50).",
        "499P Modificata — клієнтська версія без лімітів FIA, потужністю 870 к.с.",
        "Аеродинаміка боліда генерує понад 1000 кг притискної сили на швидкості.",
        "Кермо боліда містить понад 40 кнопок для налаштування диференціалів та ERS.",
        "На прямій Мюльсан болід розвиває швидкість понад 340 км/год.",
        "Система Brake-by-Wire дозволяє ідеально балансувати гальмування та рекуперацію."
    ];

    const factsContainer = document.getElementById('facts-container');
    historyFacts.forEach((fact, index) => {
        const item = document.createElement('div');
        item.className = 'fact-item';
        item.innerHTML = `
            <span class="fact-id">FACT №${index + 1}</span>
            <p class="fact-text" style="font-size: 0.85rem; color: #ccc;">${fact}</p>
        `;
        factsContainer.appendChild(item);
    });

    // 2. Друкарська машинка
    const typeText = "Запуск протоколу CORE_DATA... Ferrari 499P — це не просто машина, це повернення легенди до вершин гонок на витривалість. Кожен факт у цій базі даних підтверджує домінування технологій Maranello.";
    const typewriter = document.getElementById('typewriter');
    let i = 0;
    function typeEffect() {
        if (i < typeText.length) {
            typewriter.innerHTML += typeText.charAt(i);
            i++;
            setTimeout(typeEffect, 30);
        }
    }

    // 3. Скрол-анімація
    const revealOnScroll = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) el.classList.add('active');
        });
    };

    // 4. Engine Mode Switcher
    const modeBtn = document.getElementById('mode-btn');
    let mode = 0;
    modeBtn.addEventListener('click', () => {
        mode = (mode + 1) % 3;
        const colors = ['#ff0000', '#ffd700', '#00f2ff'];
        document.documentElement.style.setProperty('--accent', colors[mode]);
        document.getElementById('status-display').innerText = mode === 0 ? 'SYS_NOMINAL' : mode === 1 ? 'LEGACY_ACTIVE' : 'HYBRID_OVERDRIVE';
    });

    window.addEventListener('scroll', revealOnScroll);
    setTimeout(typeEffect, 1000);
    revealOnScroll();
});
