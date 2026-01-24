const sportsData = [
    { name: "Formula-1 (F1)", cat: "Asphalt", short: "Вершина кільцевих автоперегонів світу.", full: "«Формула-1» — чемпіонат світу з кільцевих автоперегонів на болідах з відкритими колесами. Швидкість до 360 км/год, перевантаження до 5 g. Це вершина інженерної думки та престижу." },
    { name: "Ралі (WRC)", cat: "Off-Road", short: "Чемпіонат світу з ралі на природних трасах.", full: "WRC — це серія перегонів на спеціально підготовлених авто по гравію, снігу та асфальту. Кожен етап — це випробування витривалості техніки та екіпажу." },
    { name: "NASCAR", cat: "Asphalt", short: "Американські перегони серійних авто.", full: "Найпопулярніша гоночна серія США. Особливістю є перегони на великих овальних треках зі швидкістю понад 300 км/год у щільному потоці." },
    { name: "IndyCar", cat: "Asphalt", short: "Найпрестижніша серія Північної Америки.", full: "Відома легендарною гонкою «Indy 500». Висока конкуренція завдяки використанню однакових шасі всіма командами." },
    { name: "24h Le Mans", cat: "Asphalt", short: "Найвідоміші перегони на витривалість.", full: "24 Години Ле-Мана — найстаріша гонка на витривалість. Мета — проїхати найбільшу дистанцію за 24 години без зупинки." },
    { name: "MotoGP", cat: "Bikes", short: "Вершина мотоспорту на прототипах.", full: "Найшвидші мотоцикли світу. Використовуються унікальні прототипи, що демонструють неймовірну швидкість та кути нахилу в поворотах." },
    { name: "Drifting", cat: "Special", short: "Мистецтво керування в заносі.", full: "Техніка проходження поворотів із навмисним зривом провідної осі. Оцінюється траєкторія, кут заносу та видовищність." },
    { name: "Dakar Rally", cat: "Off-Road", short: "Трансконтинентальний ралі-марафон.", full: "Гонка на виживання через пустелі та дюни. Навігація тут так само важлива, як і максимальна швидкість." },
    { name: "Formula E", cat: "Asphalt", short: "Електричні боліди на вулицях міст.", full: "Чемпіонат FIA для електромобілів. Перегони проходять у центрі мегаполісів, просуваючи екологічність та технології." },
    { name: "Superbike (WSBK)", cat: "Bikes", short: "Чемпіонат на модифікованих серійних байках.", full: "Використовує мотоцикли, які зовні ідентичні серійним моделям, але мають глибоку спортивну підготовку." },
    { name: "Drag Racing", cat: "Special", short: "Парні заїзди на прискорення (1/4 милі).", full: "Битва потужностей на прямій 402 метри. Топ-фюел драгстери розганяються до 500 км/год за лічені секунди." },
    { name: "Rallycross (WRX)", cat: "Off-Road", short: "Контактні перегони на змішаному покритті.", full: "Короткі видовищні заїзди на трасах, що поєднують асфальт та гравій. Контактна боротьба та стрибки." },
    { name: "Karting", cat: "Asphalt", short: "Основа та початок шляху в автоспорті.", full: "База для всіх професійних пілотів. Маленькі машини без підвіски вчать ідеальним траєкторіям та відчуттю машини." },
    { name: "DTM", cat: "Asphalt", short: "Німецька кузовна серія силует-прототипів.", full: "Престижний чемпіонат, де змагаються авто, що виглядають як дорожні моделі преміум-класу, але є справжніми монстрами швидкості." },
    { name: "Enduro", cat: "Bikes", short: "Витривалість на важкому бездоріжжі.", full: "Мотоциклетні змагання на складних маршрутах через природні перешкоди, ліси та гори." },
    { name: "Hillclimb", cat: "Special", short: "Максимально швидкий підйом на гору.", full: "Заїзди на час по вузьких гірських серпантинах. Вимагає неймовірної концентрації та точності." },
    { name: "Speedway", cat: "Bikes", short: "Гонки на мотоциклах без гальм по овалу.", full: "Заїзди по гаревому треку. Спеціальні байки не мають гальм і проходять всі повороти у постійному силовому заносі." },
    { name: "Baja 1000", cat: "Off-Road", short: "Пустельна гонка через Каліфорнійський півострів.", full: "Виснажливий рейд для багі та трофі-траків. Тисяча миль екстремальних умов та піску." },
    { name: "Extreme E", cat: "Off-Road", short: "Електричні SUV у вразливих зонах планети.", full: "Інноваційні перегони електричних позашляховиків, мета яких — привернути увагу до екологічних проблем планети." },
    { name: "GT World Challenge", cat: "Asphalt", short: "Гран-турізмо суперкари на витривалість.", full: "Серія для авто класу GT3. Тут борються легендарні марки: Ferrari, Porsche, Lamborghini та McLaren." },
    { name: "Autocross", cat: "Off-Road", short: "Маневреність та швидкість на ґрунтових багі.", full: "Динамічні заїзди на закритих ґрунтових трасах. Легкі багі з великим ходом підвіски та потужними двигунами." }
];

const grid = document.getElementById('grid');
const modal = document.getElementById('infoModal');

function getCategoryColor(cat) {
    switch(cat) {
        case 'Asphalt': return '#a855f7'; 
        case 'Off-Road': return '#ff007f'; 
        case 'Bikes': return '#00f2ff';    
        case 'Special': return '#7000ff';  
        default: return '#ffffff';
    }
}

function displaySports(data) {
    grid.innerHTML = "";
    data.forEach(sport => {
        const color = getCategoryColor(sport.cat);
        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderLeftColor = color;
        card.style.setProperty('--glow', color + '44');

        card.innerHTML = `
            <div class="card-num" style="color:${color}">${sport.cat}</div>
            <div class="card-title">${sport.name}</div>
            <div class="card-desc">${sport.short}</div>
        `;
        
        card.onclick = () => {
            document.getElementById('modalTitle').innerText = sport.name;
            document.getElementById('modalBody').innerText = sport.full;
            document.getElementById('modalCat').innerText = sport.cat;
            document.getElementById('modalCat').style.color = color;
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        };
        grid.appendChild(card);
    });
}

function filterSports(category, event) {
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    const filtered = (category === 'all') ? sportsData : sportsData.filter(s => s.cat === category);
    displaySports(filtered);
}

document.querySelector('.close-btn').onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

window.onclick = (e) => { if(e.target == modal) { modal.style.display = "none"; document.body.style.overflow = "auto"; } };

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    displaySports(sportsData.filter(s => s.name.toLowerCase().includes(term) || s.cat.toLowerCase().includes(term)));
});

displaySports(sportsData);
