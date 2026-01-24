const sportsData = [
    { name: "Formula-1 (F1)", cat: "Asphalt", img: "https://images.unsplash.com/photo-1534491336415-42bc9d0d8262?q=80&w=800", short: "Вершина кільцевих автоперегонів світу.", full: "«Формула-1» — чемпіонат світу з кільцевих автоперегонів на автомобілях з відкритими колесами. Це найпопулярніший міжнародний спорт. Боліди розвивають швидкість до 360 км/год та витримують перевантаження до 5 g. Команди змагаються за Кубок конструкторів, а пілоти — за титул чемпіона світу." },
    { name: "Ралі (WRC)", cat: "Off-Road", img: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=800", short: "Чемпіонат світу з ралі.", full: "WRC — це серія перегонів на спеціально підготовлених автомобілях. Змагання проходять на закритих дорогах з різним покриттям: гравій, сніг, лід та асфальт. Кожен етап — це випробування швидкості та майстерності екіпажу." },
    { name: "NASCAR", cat: "Asphalt", img: "https://images.unsplash.com/photo-1563294373-6110901b872b?q=80&w=800", short: "Американські перегони серійних авто.", full: "NASCAR — найпопулярніша гоночна серія в США. Особливістю є використання «стокових» авто та перегони на великих овальних треках, де швидкість майже ніколи не падає нижче 300 км/год." },
    { name: "IndyCar", cat: "Asphalt", img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800", short: "Найпрестижніша серія Північної Америки.", full: "Головна подія сезону — легендарна гонка «Indy 500». Серія відома високою конкуренцією, оскільки всі команди використовують однакове шасі, що робить майстерність пілота вирішальною." },
    { name: "24h Le Mans", cat: "Asphalt", img: "https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?q=80&w=800", short: "Найвідоміші перегони на витривалість.", full: "24 Години Ле-Мана — найстаріша гонка на витривалість у світі. Мета — проїхати найбільшу кількість кіл за рівно 24 години. Це випробування не лише швидкості, а й надійності техніки." },
    { name: "MotoGP", cat: "Bikes", img: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=800", short: "Вершина мотоспорту на прототипах.", full: "MotoGP — це найшвидші мотоцикли світу. Пілоти використовують унікальні прототипи, які не мають аналогів серед серійних байків, демонструючи неймовірну техніку нахилу в поворотах." },
    { name: "Drifting", cat: "Special", img: "https://images.unsplash.com/photo-1506469717960-433ce8b66ddb?q=80&w=800", short: "Мистецтво керування в заносі.", full: "Дрифт — техніка проходження поворотів із навмисним зривом провідної осі. Оцінюється траєкторія, кут заносу, швидкість та видовищність." },
    { name: "Dakar Rally", cat: "Off-Road", img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=800", short: "Трансконтинентальний ралі-марафон.", full: "Щорічний ралі-рейд через пустелі, дюни та скелі. Це гонка на виживання, де навігація є такою ж важливою, як і швидкість." },
    { name: "Formula E", cat: "Asphalt", img: "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?q=80&w=800", short: "Електричні боліди на вулицях міст.", full: "Чемпіонат FIA для повністю електричних болідів. Перегони проходять на вуличних трасах у найбільших містах світу, просуваючи екологічність." },
    { name: "Superbike (WSBK)", cat: "Bikes", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800", short: "Чемпіонат на серійних байках.", full: "Використовує мотоцикли, які зовні ідентичні тим, що продаються в салонах, але мають глибоку технічну підготовку." },
    { name: "Drag Racing", cat: "Special", img: "https://images.unsplash.com/photo-1594144408221-5079a4996452?q=80&w=800", short: "Парні заїзди на прискорення.", full: "Битва потужностей на прямій 402 метри. Топ-фюел драгстери розганяються до 500 км/год менш ніж за 4 секунди." },
    { name: "Rallycross (WRX)", cat: "Off-Road", img: "https://images.unsplash.com/photo-1603504332294-87803d15836c?q=80&w=800", short: "Асфальт + ґрунт.", full: "Контактні перегони на коротких кільцевих трасах зі змішаним покриттям. Швидко, видовищно, зі стрибками." },
    { name: "Karting", cat: "Asphalt", img: "https://images.unsplash.com/photo-1559067515-bf7d799b6d4d?q=80&w=800", short: "Основа автоспорту.", full: "Картинг — база для професійних гонщиків. Маленькі машини без підвіски вчать ідеальним траєкторіям та відчуттю машини." },
    { name: "DTM", cat: "Asphalt", img: "https://images.unsplash.com/photo-1541890289-b86df5bafd81?q=80&w=800", short: "Німецька кузовна серія.", full: "Престижна серія, де змагаються високотехнологічні прототипи, що зовні схожі на серійні дорожні авто." },
    { name: "Enduro", cat: "Bikes", img: "https://images.unsplash.com/photo-1463947628408-f8581a2f4acc?q=80&w=800", short: "Витривалість на бездоріжжі.", full: "Мотоциклетні змагання на складних маршрутах через ліси та гори із природними перешкодами." },
    { name: "Hillclimb", cat: "Special", img: "https://images.unsplash.com/photo-1469033051802-0a568eeb19d1?q=80&w=800", short: "Підйом вгору на час.", full: "Максимально швидкий підйом по небезпечному гірському серпантину. Одна з найстаріших дисциплін автоспорту." },
    { name: "Speedway", cat: "Bikes", img: "https://images.unsplash.com/photo-1615569507982-f67339d6756b?q=80&w=800", short: "Гонки без гальм по овалу.", full: "Заїзди по гаревому треку. Спеціальні мотоцикли не мають гальм і проходять повороти у постійному заносі." },
    { name: "Baja 1000", cat: "Off-Road", img: "https://images.unsplash.com/photo-1547420310-6a7597159a2a?q=80&w=800", short: "Пустельна гонка через Каліфорнію.", full: "Виснажливий рейд через пустелю для багі, трофі-траків та мотоциклів. Тисяча миль екстриму." },
    { name: "Extreme E", cat: "Off-Road", img: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?q=80&w=800", short: "Електричні SUV у дикій природі.", full: "Перегони на електричних позашляховиках у вразливих екосистемах планети для захисту навколишнього середовища." },
    { name: "GT World Challenge", cat: "Asphalt", img: "https://images.unsplash.com/photo-1547434571-08197771746f?q=80&w=800", short: "Гран-турізмо суперкари.", full: "Престижні перегони автомобілів класу GT3. Тут борються Ferrari, Porsche, Lamborghini у гонках на витривалість." },
    { name: "Autocross", cat: "Off-Road", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800", short: "Маневреність на багі.", full: "Динамічні заїзди на закритих ґрунтових трасах. Використовуються легкі багі з неймовірним прискоренням." }
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
            <img src="${sport.img}" class="card-img" alt="${sport.name}" loading="lazy">
            <div class="card-content">
                <div class="card-num" style="color:${color}">${sport.cat}</div>
                <div class="card-title">${sport.name}</div>
                <div class="card-desc">${sport.short}</div>
            </div>
        `;
        
        card.onclick = () => {
            document.getElementById('modalTitle').innerText = sport.name;
            document.getElementById('modalBody').innerText = sport.full;
            document.getElementById('modalImg').src = sport.img;
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

window.onclick = (e) => {
    if(e.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    displaySports(sportsData.filter(s => s.name.toLowerCase().includes(term) || s.cat.toLowerCase().includes(term)));
});

displaySports(sportsData);
