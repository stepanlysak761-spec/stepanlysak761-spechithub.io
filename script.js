const sportsData = [
    { 
        name: "Formula-1 (F1)", 
        cat: "Asphalt", 
        short: "Вершина кільцевих автоперегонів світу.", 
        full: "«Формула-1» (повна назва: FIA Formula One World Championship) — чемпіонат світу з кільцевих автоперегонів на автомобілях з відкритими колесами. Це термін, який визначає набір правил, обов'язкових для всіх учасників. Боліди розвивають швидкість до 360 км/год та здатні витримувати перевантаження до 5 g. Пілот-переможець отримує титул чемпіона світу, а команда — Кубок конструкторів. Глобальна телеаудиторія становить близько 527 млн глядачів." 
    },
    { 
        name: "Ралі (WRC)", 
        cat: "Off-Road", 
        short: "Чемпіонат світу з ралі.", 
        full: "WRC (World Rally Championship) — це чемпіонат світу з ралі та однойменний клас автомобілів, що відповідають спеціальним вимогам ФІА. Змагання проходять на природних дорогах (ґрунт, сніг, лід, асфальт). Це випробування не лише швидкості, а й витривалості техніки та майстерності екіпажу в екстремальних умовах." 
    },
    { 
        name: "NASCAR", 
        cat: "Asphalt", 
        short: "Американські перегони серійних авто.", 
        full: "Національна Асоціація перегонів серійних автомобілів (NASCAR) — приватне підприємство в США, що проводить чемпіонати на стокових автомобілях. Три найбільші серії (Cup, Xfinity, Truck) складають вищий дивізіон. Більшість гонок проходить на овальних трасах, де автомобілі рухаються на величезних швидкостях у щільному потоці." 
    },
    { 
        name: "IndyCar", 
        cat: "Asphalt", 
        short: "Найпрестижніша серія Північної Америки.", 
        full: "NTT IndyCar Series — найпрестижніша серія автоперегонів з відкритими колесами Північної Америки. Була заснована 1996 року. Головною подією сезону є легендарна гонка «Індіанаполіс 500» (Indy 500)." 
    },
    { 
        name: "24h Le Mans", 
        cat: "Asphalt", 
        short: "Легендарні перегони на витривалість.", 
        full: "24 Години Ле-Мана — найвідоміші автомобільні перегони на витривалість, що проходять щорічно у Франції. Мета — проїхати найбільшу відстань за 24 години. Перші перегони відбулися у 1923 році." 
    },
    { 
        name: "Drifting", 
        cat: "Special", 
        short: "Керований занос на швидкості.", 
        full: "Дрифт — техніка проходження поворотів і вид автоспорту, що характеризуються навмисним зривом провідної осі для проходу в керованому заносі. Оцінюється швидкість, кут заносу, траєкторія та видовищність виконання." 
    },
    { 
        name: "Dakar Rally", 
        cat: "Off-Road", 
        short: "Трансконтинентальний ралі-рейд.", 
        full: "Ралі Дакар — щорічний марафонський ралі-рейд. У перегонах беруть участь як професійні заводські команди, так і аматори на позашляховиках, вантажівках та мотоциклах. Це випробування навігації та витривалості в пустелях." 
    },
    { 
        name: "Formula E", cat: "Asphalt", short: "Електричні боліди.", full: "Інноваційний чемпіонат для повністю електричних болідів, що проводиться на тимчасових вуличних трасах." 
    },
    { 
        name: "Superbike (WSBK)", cat: "Bikes", short: "Серійні мотоцикли.", full: "Чемпіонат світу з шосейно-кільцевих перегонів на вдосконалених версіях серійних мотоциклів." 
    },
    { 
        name: "Drag Racing", cat: "Special", short: "Заїзди на 402 метри.", full: "Парні заїзди на максимальне прискорення по прямій трасі довжиною 402 метри або 1/4 милі." 
    },
    { 
        name: "Rallycross (WRX)", cat: "Off-Road", short: "Асфальт + ґрунт.", full: "Контактні перегони на коротких кільцевих трасах зі змішаним покриттям." 
    },
    { 
        name: "Karting", cat: "Asphalt", short: "Основа автоспорту.", full: "Перегони на невеликих машинах без підвіски. Фундамент для кожного гонщика F1." 
    },
    { 
        name: "DTM", cat: "Asphalt", short: "Кузовна серія Німеччини.", full: "Німецька кузовна серія, де змагаються високотехнологічні силует-прототипи." 
    },
    { 
        name: "Enduro", cat: "Bikes", short: "Мото-витривалість.", full: "Мотоциклетні змагання на витривалість по складних маршрутах із перешкодами." 
    },
    { 
        name: "Hillclimb", cat: "Special", short: "Підйом вгору на час.", full: "Перегони на час, де пілоти мають максимально швидко піднятися вгору по серпантину." 
    },
    { 
        name: "Speedway", cat: "Bikes", short: "Гонки без гальм.", full: "Гонки на мотоциклах без гальм по овальному треку з гаревим покриттям." 
    },
    { 
        name: "Baja 1000", cat: "Off-Road", short: "Пустельна гонка.", full: "Позашляхова гонка через мексиканський півострів Каліфорнія для багі та траків." 
    },
    { 
        name: "Extreme E", cat: "Off-Road", short: "Електричні позашляховики.", full: "Перегони на електричних SUV у віддалених куточках світу для захисту клімату." 
    },
    { 
        name: "GT World Challenge", cat: "Asphalt", short: "Гран-турізмо суперкари.", full: "Престижні перегони автомобілів класу GT на базі серійних суперкарів." 
    },
    { 
        name: "Autocross", cat: "Off-Road", short: "Швидкість на багі.", full: "Змагання на маневреність та швидкість на закритих ґрунтових трасах." }
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
        card.style.setProperty('--glow', color);

        card.innerHTML = `
            <div class="card-num" style="color:${color}">${sport.cat}</div>
            <div class="card-title">${sport.name}</div>
            <div class="card-desc">${sport.short}</div>
            <div class="card-footer">DATA_SCAN: ${Math.random().toString(16).slice(2, 8).toUpperCase()}</div>
        `;
        
        card.onclick = () => {
            document.getElementById('modalTitle').innerText = sport.name;
            document.getElementById('modalBody').innerText = sport.full;
            document.getElementById('modalCat').innerText = sport.cat;
            document.getElementById('modalCat').style.color = color;
            modal.style.display = "block";
        };
        grid.appendChild(card);
    });
}

document.querySelector('.close-btn').onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; };

displaySports(sportsData);
