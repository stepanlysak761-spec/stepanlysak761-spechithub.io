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
    { name: "Superbike (WSBK)", cat: "Bikes", desc: "Чемпіонат світу на базі серійних спортивних мотоциклетів." },
    { name: "Drag Racing", cat: "Special", desc: "Битва потужностей: 402 метри за лічені секунди." },
    { name: "Rallycross (WRX)", cat: "Off-Road", desc: "Короткі вибухові заїзди на змішаних трасах: асфальт + ґрунт." },
    { name: "Karting", cat: "Asphalt", desc: "Фундамент професійного автоспорту, де народжуються майбутні чемпіони." },
    { name: "DTM", cat: "Asphalt", desc: "Престижна німецька серія високотехнологічних кузовних автомобілів." },
    { name: "Enduro", cat: "Bikes", desc: "Мото-змагання на витривалість по найскладнішому природному бездоріжжю." },
    { name: "Hillclimb", cat: "Special", desc: "Швидкісний підйом по небезпечних гірських серпантинах." },
    { name: "Speedway", cat: "Bikes", desc: "Гонки на байках без гальм по гаревому овальному треку." },
    { name: "Baja 1000", cat: "Off-Road", desc: "Легендарна пустельна гонка через Мексику на багі та потужних траках." },
    { name: "Extreme E", cat: "Off-Road", desc: "Гонки електричних позашляховиків у найбільш віддалених точках світу." },
    { name: "GT World Challenge", cat: "Asphalt", desc: "Змагання найкращих суперкарів світу у форматі тривалих перегонів." }
];

const grid = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');

// ПАЛІТРА КОЛЬОРІВ ДЛЯ 4 КАТЕГОРІЙ
function getCategoryColor(cat) {
    switch(cat) {
        case 'Asphalt': return '#a855f7'; // Фіолетовий
        case 'Off-Road': return '#ff007f'; // Маджента (Рожевий)
        case 'Bikes': return '#00f2ff';    // Бірюзовий
        case 'Special': return '#7000ff';  // Глибокий індиго
        default: return '#ffffff';
    }
}

function displaySports(data) {
    if (!grid) return;
    grid.innerHTML = "";
    
    data.forEach((sport, index) => {
        const techId = Math.random().toString(16).slice(2, 8).toUpperCase();
        const color = getCategoryColor(sport.cat);
        
        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderLeftColor = color;
        card.style.setProperty('--card-glow', color + '66'); // Додаємо прозорість для світіння

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
        }, index * 40);
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

// Фільтрація
function filterSports(category) {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => btn.classList.remove('active'));
    
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

// Старт
document.addEventListener('DOMContentLoaded', () => {
    displaySports(sportsData);
});
