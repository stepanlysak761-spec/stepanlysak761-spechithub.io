const sportsData = [
    { name: "Формула-1", cat: "F1", color: "linear-gradient(45deg, #e10600, #333)", desc: "Вершина кільцевих автоперегонів, де змагаються найшвидші боліди." },
    { name: "Ралі (WRC)", cat: "Rally", color: "linear-gradient(45deg, #FFB800, #333)", desc: "Змагання на різних типах покриття з етапами на відкритих дорогах." },
    { name: "MotoGP", cat: "Bikes", color: "linear-gradient(45deg, #2E3192, #333)", desc: "Найпрестижніший чемпіонат з мотоперегонів на кільцевих трасах." },
    { name: "NASCAR", cat: "Stock Car", color: "linear-gradient(45deg, #0078C1, #333)", desc: "Популярні в США перегони серійних автомобілів з контактною боротьбою." },
    { name: "IndyCar", cat: "Formula", color: "linear-gradient(45deg, #00AEEF, #333)", desc: "Американська серія перегонів, що поєднує кільцеві траси та овали." },
    { name: "24h Le Mans", cat: "Endurance", color: "linear-gradient(45deg, #000, #444)", desc: "Гонки на витривалість: швидкість, надійність та командна робота." },
    { name: "Drag Racing", cat: "Special", color: "linear-gradient(45deg, #444, #111)", desc: "Надзвичайно потужні заїзди на прискорення по прямій." },
    { name: "Rally-Cross", cat: "Off-Road", color: "linear-gradient(45deg, #603813, #333)", desc: "Динамічні перегони на замкнених трасах із ґрунтовим покриттям." },
    { name: "Formula E", cat: "Electric", color: "linear-gradient(45deg, #00E5FF, #333)", desc: "Перегони електричних болідів, орієнтовані на екологію." },
    { name: "Superbike", cat: "Bikes", color: "linear-gradient(45deg, #C1272D, #333)", desc: "Мотоперегони на серійних моделях, близьких до дорожніх." }
    // Додайте решту 10 за прикладом...
];

function displaySports(data) {
    const grid = document.getElementById('grid');
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

displaySports(sportsData);
