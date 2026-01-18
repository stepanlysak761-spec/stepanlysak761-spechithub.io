/**
 * MOTORSPORT 360 - DATABASE ENGINE
 * Конфігурація: Мінімалістичний інтерфейс Pirelli Tech 2026
 */

// 1. ПОВНА БАЗА ДАНИХ (20 ДИСЦИПЛІН)
const sportsData = [
    { name: "Formula-1 (F1)", cat: "Asphalt", desc: "Вершина кільцевих автоперегонів, найшвидші боліди та передові технології світу." },
    { name: "Ралі (WRC)", cat: "Off-Road", desc: "Екстремальні змагання на відкритих дорогах: ґрунт, сніг та розпечений асфальт." },
    { name: "MotoGP", cat: "Bikes", desc: "Найвищий клас мотоциклетних перегонів на спеціалізованих кільцевих трасах." },
    { name: "NASCAR", cat: "Asphalt", desc: "Легендарні американські перегони серійних автомобілів на високошвидкісних овалах." },
    { name: "IndyCar", cat: "Asphalt", desc: "Найшвидша серія з відкритими колесами в Північній Америці, включаючи Indy 500." },
    { name: "24h Le Mans", cat: "Asphalt", desc: "Найпрестижніша гонка на витривалість, що триває 24 години без зупинки." },
    { name: "Драг-рейсинг", cat: "Special", desc: "Змагання на максимальне прискорення по прямій трасі довжиною рівно 402 метри." },
    { name: "Автокрос", cat: "Off-Road", desc: "Динамічні перегони на замкнених трасах з виключно ґрунтовим покриттям." },
    { name: "Ралі-крос", cat: "Off-Road", desc: "Контактна боротьба на коротких трасах зі змішаним покриттям (асфальт + бруд)." },
    { name: "Формула E", cat: "Asphalt", desc: "Інноваційні перегони на електричних болідах у центрі найбільших міст світу." },
    { name: "Superbike", cat: "Bikes", desc: "Чемпіонат світу з шосейно-кільцевих мотоперегонів на базі серійних моделей." },
    { name: "Dakar Rally", cat: "Off-Road", desc: "Найскладніший у світі багатоденний марафон через пустелі та бездоріжжя." },
    { name: "Drifting", cat: "Special", desc: "Технічні змагання, де оцінюється кут, швидкість та стиль проходження заносу." },
    { name: "Karting", cat: "Asphalt", desc: "Фундаментальна школа автоспорту, через яку пройшли майже всі пілоти F1." },
    { name: "DTM", cat: "Asphalt", desc: "Престижна німецька серія кузовних авто, відома своєю аеродинамікою та швидкістю." },
    { name: "Enduro", cat: "Bikes", desc: "Випробування мотоциклістів на витривалість на складних природних ландшафтах." },
    { name: "Speedway", cat: "Bikes", desc: "Гонки на спеціальних байках без гальм по гаревому або піщаному овалу." },
    { name: "Baja 1000", cat: "Off-Road", desc: "Легендарна гонка на виживання через мексиканську пустелю на багі та траках." },
    { name: "Hillclimb", cat: "Special", desc: "Індивідуальні заїзди на час по вузьких гірських дорогах до самої вершини." },
    { name: "Extreme E", cat: "Off-Road", desc: "Гонки електричних позашляховиків у найбільш віддалених точках планети." }
];

// 2. ІНІЦІАЛІЗАЦІЯ ЕЛЕМЕНТІВ
const grid = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');

/**
 * Функція вибору кольору для категорії
 */
function getCategoryColor(cat) {
    switch(cat) {
        case 'Asphalt': return '#ffb400'; // Жовтий (швидкість)
        case 'Off-Road': return '#00ff41'; // Зелений (витривалість)
        case 'Bikes': return '#ff003c';    // Червоний (адреналін)
        case 'Special': return '#00e5ff';  // Блакитний (технології)
        default: return '#ffffff';
    }
}

/**
 * Рендеринг карток
 */
function displaySports(data) {
    if (!grid) return;
    grid.innerHTML = ""; 
    
    data.forEach((sport, index) => {
        const techId = Math.random().toString(16).slice(2, 8).toUpperCase();
        const catColor = getCategoryColor(sport.cat);
        
        const card = document.createElement('div');
        card.className = 'card';
        
        // Встановлюємо індивідуальну лінію-акцент для кожної картки
        card.style.borderLeft = `3px solid ${catColor}`;
        
        // НОВИЙ ФОРМАТ: Лише назва категорії
        card.innerHTML = `
            <div class="card-num" style="color: ${catColor}">${sport.cat}</div>
            <div class="card-title">${sport.name}</div>
            <div class="card-desc">${sport.desc}</div>
            <div class="card-footer">
                <span>STATUS: ACTIVE</span>
                <span>DATA_SCAN: ${techId}</span>
            </div>
        `;
        
        grid.appendChild(card);
        
        // Плавна поява
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 30);
    });
}

// 3. ОБРОБКА ПОШУКУ
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = sportsData.filter(sport => 
            sport.name.toLowerCase().includes(term) || 
            sport.cat.toLowerCase().includes(term)
        );
        displaySports(filtered);
    });
}

// 4. ФУНКЦІЯ ФІЛЬТРАЦІЇ
function filterSports(category) {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => btn.classList.remove('active'));
    
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }

    if (category === 'all') {
        displaySports(sportsData);
    } else {
        const filtered = sportsData.filter(sport => sport.cat === category);
        displaySports(filtered);
    }
}

// 5. ЗАПУСК
document.addEventListener('DOMContentLoaded', () => {
    displaySports(sportsData);
});
