const sportsData = [
    { name: "Formula-1 (F1)", cat: "Asphalt", short: "Найпрестижніша гоночна серія світу.", full: "«Формула-1» — це вершина автоспорту. Боліди з відкритими колесами, гібридні двигуни V6 та найкращі пілоти планети борються за титул чемпіона світу на закритих трасах." },
    { name: "Ралі (WRC)", cat: "Off-Road", short: "Швидкісні заїзди по пересіченій місцевості.", full: "World Rally Championship — це битва проти часу на гравії, снігу та асфальті. Екіпаж складається з пілота та штурмана." },
    { name: "NASCAR", cat: "Asphalt", short: "Легендарні овальні перегони США.", full: "Найпопулярніший вид спорту в Америці. Масивні машини, величезні швидкості на овалах та контактна боротьба." },
    { name: "MotoGP", cat: "Bikes", short: "Королівський клас мотоперегонів.", full: "Найшвидші двоколісні прототипи світу. Нахили до 60 градусів у поворотах та швидкості понад 350 км/год." },
    { name: "Drifting", cat: "Special", short: "Контроль автомобіля у заносі.", full: "Змагання, де оцінюється не час кола, а кут, швидкість та стиль проходження траси у безперервному ковзанні." },
    { name: "Dakar Rally", cat: "Off-Road", short: "Найважчий марафон планети.", full: "Двотижнева подолання пустель, гір та бездоріжжя. Випробування на виживання для людей та техніки." },
    { name: "IndyCar", cat: "Asphalt", short: "Американська серія болідів.", full: "Відома гонкою Indy 500. Боліди подібні до F1, але з більшим акцентом на швидкість на овальних треках." },
    { name: "24h Le Mans", cat: "Asphalt", short: "Гонка на витривалість тривалістю добу.", full: "Найстаріша у світі гонка на витривалість. Команди мають проїхати максимальну дистанцію за 24 години." },
    { name: "Formula E", cat: "Asphalt", short: "Електричне майбутнє гонок.", full: "Перегони повністю електричних болідів на тимчасових вуличних трасах у найбільших містах світу." },
    { name: "Superbike", cat: "Bikes", short: "Перегони на серійних спортбайках.", full: "На відміну від MotoGP, тут використовуються сильно модифіковані версії мотоциклів, які можна купити в магазині." },
    { name: "Drag Racing", cat: "Special", short: "Максимальне прискорення на 402 метри.", full: "Парна дуель на прямій. Драгстери класу Top Fuel розганяються до 500 км/год менш ніж за 4 секунди." },
    { name: "Rallycross", cat: "Off-Road", short: "Короткі заїзди на змішаних трасах.", full: "Суміш ралі та кільцевих гонок. Асфальт, бруд, стрибки та багато контактної боротьби." },
    { name: "Karting", cat: "Asphalt", short: "Перша сходинка в автоспорті.", full: "Професійний картинг — це школа для всіх чемпіонів. Відсутність підвіски робить керування надзвичайно гострим." },
    { name: "DTM", cat: "Asphalt", short: "Німецький чемпіонат кузовних авто.", full: "Високотехнологічні перегони турингових автомобілів, які лише зовні нагадують серійні моделі." },
    { name: "Enduro", cat: "Bikes", short: "Мото-позашляхові випробування.", full: "Змагання на мотоциклах по природному ландшафту з подоланням каміння, колод та багна." },
    { name: "Hillclimb", cat: "Special", short: "Швидкісний підйом вгору.", full: "Гонки по гірських серпантинах. Пілот має подолати підйом за мінімальний час." },
    { name: "Speedway", cat: "Bikes", short: "Гонки на гаревому покритті.", full: "Овальний трек, мотоцикли без гальм та передач. Всі повороти проходяться у заносі." },
    { name: "Baja 1000", cat: "Off-Road", short: "Рейд мексиканською пустелею.", full: "Одна з найбільш хаотичних та небезпечних гонок поза шляхами загального користування." },
    { name: "Extreme E", cat: "Off-Road", short: "Електро-рейди заради клімату.", full: "Перегони електричних позашляховиків у найбільш віддалених та екологічно вразливих точках Землі." },
    { name: "GT3 World", cat: "Asphalt", short: "Перегони суперкарів GT3.", full: "Змагання між Ferrari, Porsche, Lamborghini та іншими престижними марками в гонках на витривалість." },
    { name: "Autocross", cat: "Off-Road", short: "Гонки на багі по ґрунту.", full: "Динамічні заїзди на закритих ґрунтових трасах на спеціальних легких автомобілях." }
];

const grid = document.getElementById('grid');
const modal = document.getElementById('infoModal');

function displaySports(data) {
    grid.innerHTML = "";
    data.forEach(sport => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-cat">${sport.cat}</div>
            <div class="card-title">${sport.name}</div>
            <div class="card-desc">${sport.short}</div>
        `;
        card.onclick = () => {
            document.getElementById('modalTitle').innerText = sport.name;
            document.getElementById('modalBody').innerText = sport.full;
            document.getElementById('modalCat').innerText = sport.cat;
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

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = sportsData.filter(s => s.name.toLowerCase().includes(term));
    displaySports(filtered);
});

displaySports(sportsData);
