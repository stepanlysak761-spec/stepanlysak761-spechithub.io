const sportsData = [
    { name: "Formula-1 (F1)", cat: "Asphalt", desc: "Вершина кільцевих автоперегонів, де технології зустрічаються зі швидкістю." },
    { name: "Ралі (WRC)", cat: "Off-Road", desc: "Екстремальні випробування на витривалість на природних трасах світу." },
    { name: "MotoGP", cat: "Bikes", desc: "Найшвидші двоколісні монстри на найвідоміших треках планети." },
    { name: "NASCAR", cat: "Asphalt", desc: "Американська класика перегонів на овальних треках." },
    { name: "IndyCar", cat: "Asphalt", desc: "Відкриті колеса, неймовірна швидкість та боротьба до останнього кола." },
    { name: "24h Le Mans", cat: "Asphalt", desc: "Легендарний марафон, де витривалість важливіша за чисту швидкість." },
    { name: "Drifting", cat: "Special", desc: "Мистецтво контролю автомобіля у безперервному заносі." },
    { name: "Dakar Rally", cat: "Off-Road", desc: "Найскладніший у світі рейд-марафон через пустелі." }
];

const grid = document.getElementById('grid');

function displaySports(data) {
    grid.innerHTML = "";
    data.forEach((sport) => {
        const techId = Math.random().toString(16).slice(2, 8).toUpperCase();
        
        // Відтінки фіолетового для різних категорій
        let color = "#a855f7"; // Основний фіолетовий
        if (sport.cat === "Off-Road") color = "#d8b4fe"; // Світло-фіолетовий
        if (sport.cat === "Bikes") color = "#7e22ce";    // Темно-фіолетовий
        if (sport.cat === "Special") color = "#c084fc";  // Маджента

        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderLeftColor = color;

        card.innerHTML = `
            <div class="card-num" style="color: ${color}">${sport.cat}</div>
            <div class="card-title">${sport.name}</div>
            <div class="card-desc">${sport.desc}</div>
            <div class="card-footer">
                <span>SYSTEM: STABLE</span>
                <span>SCAN_ID: ${techId}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Пошук та фільтрація (залишаються як були)
document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    displaySports(sportsData.filter(s => s.name.toLowerCase().includes(term) || s.cat.toLowerCase().includes(term)));
});

function filterSports(category) {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (category === 'all') displaySports(sportsData);
    else displaySports(sportsData.filter(s => s.cat === category));
}

displaySports(sportsData);
