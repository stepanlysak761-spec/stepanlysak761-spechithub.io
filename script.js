/**
 * MOTORSPORT 360 - DATABASE ENGINE
 * Конфігурація: Cyber-Purple PC Edition
 */

// 1. РОЗШИРЕНА БАЗА ДАНИХ (20 ДИСЦИПЛІН)
const sportsData = [
    { name: "Formula-1 (F1)", cat: "Asphalt", desc: "Королівські перегони: найшвидші боліди та найсучасніші технології світу." },
    { name: "Ралі (WRC)", cat: "Off-Road", desc: "Екстремальні змагання на виживання на ґрунті, снігу та асфальті." },
    { name: "MotoGP", cat: "Bikes", desc: "Вершина мотоциклетного спорту: неймовірні нахили та шалена швидкість." },
    { name: "NASCAR", cat: "Asphalt", desc: "Культові американські перегони серійних авто на швидкісних овалах." },
    { name: "IndyCar", cat: "Asphalt", desc: "Найшвидші перегони з відкритими колесами в США, включаючи легендарні Indy 500." },
    { name: "24h Le Mans", cat: "Asphalt", desc: "Найвідоміший у світі добовий марафон на витривалість." },
    { name: "Drifting", cat: "Special", desc: "Мистецтво керування автомобілем у керованому заносі на межі можливостей." },
    { name: "Dakar Rally", cat: "Off-Road", desc: "Найважчий ралі-рейд планети через безкраї пустелі." },
    { name: "Formula E", cat: "Asphalt", desc: "Тихі, але надшвидкі перегони повністю електричних болідів у центрі міст." },
    { name: "Superbike (WSBK)", cat: "Bikes", desc: "Чемпіонат світу на базі серійних спортивних мотоциклів." },
    { name: "Drag Racing", cat: "Special", desc: "Битва потужностей: 402 метри за лічені секунди." },
    { name: "Rallycross (WRX)", cat: "Off-Road", desc: "Короткі вибухові заїзди на змішаних трасах: асфальт + ґрунт." },
    { name: "Karting", cat: "Asphalt", desc: "Фундамент професійного автоспорту, де народжуються чемпіони." },
    { name: "DTM", cat: "Asphalt", desc: "Престижна німецька серія високотехнологічних кузовних автомобілів." },
    { name: "Enduro", cat: "Bikes", desc: "Мото-змагання на витривалість по найскладнішому бездоріжжю." },
    { name: "Hillclimb", cat: "Special", desc: "Швидкісний підйом по небезпечних гірських серпантинах." },
    { name: "Speedway", cat: "Bikes", desc: "Гонки на байках без гальм по гаревому овальному треку." },
    { name: "Baja 1000", cat: "Off-Road", desc: "Легендарна пустельна гонка через Мексику на багі та траках." },
    { name: "Extreme E", cat: "Off-Road", desc: "Гонки електричних позашляховиків у найбільш віддалених куточках світу." },
    { name: "GT World Challenge", cat: "Asphalt", desc: "Змагання найкращих суперкарів світу (Ferrari, Porsche, Lamborghini) у форматі Endurance." }
];

const grid = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');

/**
 * Функція вибору відтінку фіолетового
 */
function getCategoryColor(cat) {
    switch(cat) {
        case 'Asphalt': return '#a855f7'; // Яскравий фіолетовий
        case 'Off-Road': return '#d8b4fe'; // Лавандовий
        case 'Bikes': return '#7e22ce';    // Глибокий індиго
        case 'Special': return '#c084fc';  // Маджента-фіолетовий
        default: return '#ffffff';
    }
}

/**
 * Відображення карток
 */
function displaySports(data) {
    if (!grid) return;
    grid.innerHTML = "";
    
    data.forEach((sport, index) => {
        const techId = Math.random().toString(16).slice(2, 8).toUpperCase();
        const color = getCategoryColor(sport.cat);
        
        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderLeftColor = color;

        card.innerHTML = `
            <div class="card-num" style="color: ${color}">${sport.cat}</div>
            <div class="card-title">${sport.name}</div>
            <div class="card-desc">${sport.desc}</div>
            <div class="card-footer">
                <span>SYSTEM: ONLINE</span>
                <span>SCAN_ID: ${techId}</span>
            </div>
        `;
        
        grid.appendChild(card);
        
        // Анімація появи
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 30);
    });
}

// Пошук
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = sportsData.filter(s => 
            s.name.toLowerCase().includes(term) || 
            s.cat.toLowerCase().includes(term)
        );
        displaySports(filtered);
    });
}

// Фільтрація кнопками
function filterSports(category) {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(b => b.classList.remove('active'));
    
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }

    if (category === 'all') {
        displaySports(sportsData);
    } else {
        const filtered = sportsData.filter(s => s.cat === category);
        displaySports(filtered);
    }
}

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
    displaySports(sportsData);
});
