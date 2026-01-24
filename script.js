const sportsData = [
    { 
        name: "Formula-1 (F1)", 
        cat: "Asphalt", 
        img: "https://images.unsplash.com/photo-1534491336415-42bc9d0d8262?q=80&w=800",
        short: "Королівські перегони на болідах з відкритими колесами.", 
        full: "«Формула-1» — чемпіонат світу з кільцевих автоперегонів. Боліди розвивають швидкість до 360 км/год та витримують перевантаження до 5 g. Команди змагаються за Кубок конструкторів, а пілоти — за титул чемпіона світу. Це вершина інженерної думки у світі спорту." 
    },
    { 
        name: "Ралі (WRC)", 
        cat: "Off-Road", 
        img: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=800",
        short: "Екстремальні заїзди на час по природних трасах.", 
        full: "WRC — Чемпіонат світу з ралі. Змагання проходять на закритих дорогах загального користування з різним покриттям: гравій, сніг, лід та асфальт. Кожен етап — це випробування швидкості та майстерності екіпажу." 
    },
    { 
        name: "NASCAR", 
        cat: "Asphalt", 
        img: "https://images.unsplash.com/photo-1563294373-6110901b872b?q=80&w=800",
        short: "Американська серія перегонів на овальних треках.", 
        full: "NASCAR — найпопулярніша гоночна серія в США. Особливістю є перегони на великих овальних трасах, де автомобілі рухаються на швидкостях понад 300 км/год у дуже щільному потоці." 
    },
    { 
        name: "MotoGP", 
        cat: "Bikes", 
        img: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=800",
        short: "Найвищий рівень мотоциклетних перегонів на прототипах.", 
        full: "MotoGP — це найшвидші мотоцикли світу. Пілоти використовують унікальні прототипи, які не мають аналогів серед серійних байків, демонструючи неймовірну техніку нахилу в поворотах." 
    },
    { 
        name: "Drifting", 
        cat: "Special", 
        img: "https://images.unsplash.com/photo-1506469717960-433ce8b66ddb?q=80&w=800",
        short: "Видовищні змагання з контролю авто в заносі.", 
        full: "Дрифтинг — це вид автоспорту, де головним є не швидкість кола, а майстерність проходження траси в безперервному заносі. Оцінюється кут, швидкість, траєкторія та кількість диму." 
    },
    { 
        name: "Dakar Rally", 
        cat: "Off-Road", 
        img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=800",
        short: "Найскладніший у світі марафонський ралі-рейд.", 
        full: "Ралі Дакар — це тижні змагань у найсуворіших умовах пустель. Учасники на вантажівках, джипах та мотоциклах долають тисячі кілометрів бездоріжжя." 
    },
    { 
        name: "24h Le Mans", 
        cat: "Asphalt", 
        img: "https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?q=80&w=800",
        short: "Легендарна 24-годинна гонка на витривалість.", 
        full: "24 Години Ле-Мана — найстаріша гонка світу на витривалість. Перемагає той, хто проїде найбільшу дистанцію за рівно одну добу." 
    }
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
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (category === 'all') {
        displaySports(sportsData);
    } else {
        displaySports(sportsData.filter(s => s.cat === category));
    }
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
    displaySports(sportsData.filter(s => s.name.toLowerCase().includes(term)));
});

// Start
displaySports(sportsData);
