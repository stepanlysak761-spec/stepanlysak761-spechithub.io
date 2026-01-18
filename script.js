const sportsData = [
    { name: "Formula 1", cat: "Asphalt", color: "linear-gradient(45deg, #e10600, #ff4d4d)", desc: "Пік інженерної думки та найшвидші боліди планети." },
    { name: "NASCAR", cat: "Asphalt", color: "linear-gradient(45deg, #0078C1, #00aeff)", desc: "Контактні перегони на витривалість на овальних треках США." },
    { name: "WRC", cat: "Off-Road", desc: "Ралі на серійних авто через ліси, сніги та гравій.", color: "linear-gradient(45deg, #FFB800, #ff9900)" },
    { name: "MotoGP", cat: "Bikes", desc: "Еліта мотоспорту: неймовірні нахили та швидкість 350+ км/год.", color: "linear-gradient(45deg, #2E3192, #1b1e5e)" },
    { name: "Dakar Rally", cat: "Off-Road", desc: "Двотижневий марафон через пустелі, де головне — навігація.", color: "linear-gradient(45deg, #ED1C24, #911216)" },
    { name: "IndyCar", cat: "Asphalt", desc: "Відкриті колеса, що борються на швидкостях до 380 км/год.", color: "linear-gradient(45deg, #00AEEF, #005f82)" },
    { name: "Drift", cat: "Special", desc: "Контрольований занос та оцінки за кут і стиль.", color: "linear-gradient(45deg, #F7941D, #d67a00)" },
    { name: "Formula E", cat: "Special", desc: "Майбутнє автоспорту на електричній тязі в центрі міст.", color: "linear-gradient(45deg, #00E5FF, #00a1b3)" },
    { name: "Le Mans 24h", cat: "Asphalt", desc: "Гонка на витривалість: людина проти техніки протягом доби.", color: "linear-gradient(45deg, #333, #000)" },
    { name: "Rallycross", cat: "Off-Road", desc: "Динамічний мікс асфальту та бруду на закритих трасах.", color: "linear-gradient(45deg, #603813, #3d240c)" },
    { name: "Motocross", cat: "Bikes", desc: "Польоти та боротьба в багнюці на кросових байках.", color: "linear-gradient(45deg, #00A859, #006b39)" },
    { name: "Drag Racing", cat: "Special", desc: "402 метри чистої потужності та прискорення.", color: "linear-gradient(45deg, #444, #222)" },
    { name: "DTM", cat: "Asphalt", desc: "Німецький кузовний чемпіонат з передовою аеродинамікою.", color: "linear-gradient(45deg, #D71920, #a11218)" },
    { name: "Karting", cat: "Special", desc: "Фундамент, з якого починали Сенна, Шумахер та Гамільтон.", color: "linear-gradient(45deg, #8CC63F, #618a2c)" },
    { name: "Superbike", cat: "Bikes", desc: "Перегони на серійних байках, які можна купити в салоні.", color: "linear-gradient(45deg, #C1272D, #801a1d)" },
    { name: "Speedway", cat: "Bikes", desc: "Овали, гареве покриття і байки абсолютно без гальм.", color: "linear-gradient(45deg, #555, #333)" },
    { name: "Autocross", cat: "Off-Road", desc: "Божевільні багі на ґрунтових кільцевих трасах.", color: "linear-gradient(45deg, #754C24, #4d3218)" },
    { name: "Extreme E", cat: "Off-Road", desc: "Електро-позашляховики змагаються в Арктиці та пустелях.", color: "linear-gradient(45deg, #16FF74, #0fb351)" },
    { name: "Baja 1000", cat: "Off-Road", desc: "Мексиканська пустеля, вантажівки Trophy Trucks та пісок.", color: "linear-gradient(45deg, #FF5722, #e64a19)" },
    { name: "Hillclimb", cat: "Special", desc: "Швидкісний підйом на гору по вузьких серпантинах.", color: "linear-gradient(45deg, #3F51B5, #2c387e)" }
];

const grid = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');

// Функція відображення карток
function displaySports(data) {
    grid.innerHTML = "";
    data.forEach(sport => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header" style="background: ${sport.color}">${sport.name}</div>
            <div class="card-body">
                <span class="category-tag">${sport.cat}</span>
                <p class="card-desc">${sport.desc}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Пошук
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = sportsData.filter(s => s.name.toLowerCase().includes(term));
    displaySports(filtered);
});

// Фільтрація кнопками
function filterSports(category) {
    if (category === 'all') {
        displaySports(sportsData);
    } else {
        const filtered = sportsData.filter(s => s.cat === category);
        displaySports(filtered);
    }
    
    // Оновлення активної кнопки
    document.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
}

// Початковий запуск
displaySports(sportsData);
