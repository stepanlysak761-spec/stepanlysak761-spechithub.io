const sportsData = [
    { name: "Formula-1 (F1)", cat: "Asphalt", desc: "Вершина кільцевих автоперегонів, де змагаються найшвидші боліди світу." },
    { name: "Ралі (WRC)", cat: "Off-Road", desc: "Змагання на різних типах покриття (асфальт, ґрунт, сніг) на відкритих дорогах." },
    { name: "MotoGP", cat: "Bikes", desc: "Найпрестижніший чемпіонат з мотоперегонів на кільцевих трасах." },
    { name: "NASCAR", cat: "Asphalt", desc: "Популярні в США перегони серійних автомобілів, відомі контактною боротьбою." },
    { name: "IndyCar", cat: "Asphalt", desc: "Американська серія перегонів, що поєднує кільцеві траси та овали." },
    { name: "24 години Ле-Мана", cat: "Asphalt", desc: "Гонки на витривалість, де важливі швидкість, надійність і командна робота." },
    { name: "Драг-рейсинг", cat: "Special", desc: "Короткі, але надзвичайно потужні заїзди на прискорення по прямій." },
    { name: "Автокрос", cat: "Off-Road", desc: "Динамічні перегони на замкнених трасах із ґрунтовим покриттям." },
    { name: "Ралі-крос", cat: "Off-Road", desc: "Змішані траси (асфальт+ґрунт) з дуже потужними авто." },
    { name: "Формула E", cat: "Asphalt", desc: "Сучасні перегони електричних болідів, орієнтовані на екологію." },
    { name: "Супербайк (WSBK)", cat: "Bikes", desc: "Чемпіонат з мотоперегонів на серійних мотоциклах." },
    { name: "Dakar Rally", cat: "Off-Road", desc: "Найтяжчий у світі марафон через пустелі та бездоріжжя." },
    { name: "Drift", cat: "Special", desc: "Мистецтво керування автомобілем у керованому заносі." },
    { name: "Karting", cat: "Asphalt", desc: "Фундамент автоспорту, з якого починають майже всі профі." },
    { name: "DTM", cat: "Asphalt", desc: "Німецька серія кузовних автомобілів високого технологічного рівня." },
    { name: "Enduro", cat: "Bikes", desc: "Мотоциклетні змагання на витривалість по пересіченій місцевості." },
    { name: "Speedway", cat: "Bikes", desc: "Гонки на мотоциклах без гальм по гаревому овалу." },
    { name: "Baja 1000", cat: "Off-Road", desc: "Екстремальні перегони пустелями Мексики на вантажівках та багі." },
    { name: "Hillclimb", cat: "Special", desc: "Гонка на час із підйому на круті гірські вершини." },
    { name: "Extreme E", cat: "Off-Road", desc: "Електричні позашляховики, що змагаються в екологічно вразливих зонах." }
];

const grid = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');

function displaySports(data) {
    grid.innerHTML = "";
    data.forEach((sport, index) => {
        const num = (index + 1).toString().padStart(2, '0');
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-num">${num} // ${sport.cat}</div>
            <div class="card-title">${sport.name}</div>
            <div class="card-desc">${sport.desc}</div>
        `;
        grid.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = sportsData.filter(s => 
        s.name.toLowerCase().includes(term) || 
        s.cat.toLowerCase().includes(term)
    );
    displaySports(filtered);
});

function filterSports(category) {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        displaySports(sportsData);
    } else {
        const filtered = sportsData.filter(s => s.cat === category);
        displaySports(filtered);
    }
}

displaySports(sportsData);
