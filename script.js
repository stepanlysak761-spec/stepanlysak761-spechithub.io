const cars = [
    // LMH клас
    {
        id: 1,
        name: "Peugeot 9X8",
        manufacturer: "Peugeot Sport",
        color: "#94ad1e",
        iconColor: "#94ad1e",
        icon: "fas fa-lion",
        class: "LMH",
        favorite: false,
        specs: { 
            engine: "2.6L V6 Twin-Turbo", 
            power: "707 HP", 
            hybrid: "MGU Front", 
            weight: "1030 кг",
            topSpeed: "340 км/год",
            torque: "900 Нм",
            year: "2022"
        },
        description: "Авангардний дизайн без заднього крила, що використовує дифузор для створення притискної сили. Оновлена версія 2024 року отримала крило для покращеної стабільності.",
        history: "<b>Розшифровка індексу:</b> 9 — гоночний авто Peugeot для витривалості; X — гібридна технологія та повний привід; 8 — фігура сучасних моделей бренду. <br><br><b>Особливості:</b> Оригінальна версія (2022) не мала заднього крила — притискна сила створювалася дифузором. У 2024 році Peugeot додали крило для стабільності. Використовує технології i-Cockpit, а силова установка розроблена разом із TotalEnergies.",
        racing: "<b>Хронологія:</b> 2021 — концепт; 2022 — дебют у WEC; 2024 — велике оновлення. <br><br><b>Виступи:</b> Змагається з Toyota, Ferrari та Porsche. Команда Peugeot TotalEnergies поступово підвищує надійність.",
        pilots: [
            { name: "Жан-Ерік Вернь", role: "Основний пілот" },
            { name: "Пол Ді Реста", role: "Основний пілот" },
            { name: "Лоїк Дюваль", role: "Резервний пілот" },
            { name: "Міккель Єнсен", role: "Основний пілот" }
        ]
    },
    {
        id: 2,
        name: "Ferrari 499P",
        manufacturer: "Ferrari AF Corse",
        color: "#ef1a2d",
        iconColor: "#ef1a2d",
        icon: "fas fa-horse",
        class: "LMH",
        favorite: true,
        specs: { 
            engine: "2.992cc V6 Turbo", 
            power: "680 HP (max)", 
            hybrid: "ERS 200kW (272 HP)", 
            weight: "1030 кг",
            topSpeed: "345 км/год",
            torque: "710 Нм",
            year: "2023"
        },
        description: "Повернення Ferrari до вищого дивізіону гонок на витривалість після 50-річної перерви. Повністю розроблена власними силами без стандартизованих компонентів.",
        history: "Ferrari 499P — спортивний прототип класу LMH. Про повернення Ferrari оголосила у лютому 2021 року. Тести пройшли у Фіорано за участі Алессандро П'єра Гвіді та Нікласа Нільсена. До презентації прототипи пройшли понад 10 000 км на трасах Імола, Барселона та Монца.",
        racing: "Офіційна презентація відбулася 30 жовтня 2022 року в Імолі. Дебют — 17 березня 2023 на етапі «1000 миль Себрінга». На відміну від LMDh, Ferrari 499P розроблена повністю власними силами без стандартизованих шасі.",
        pilots: [
            { name: "Алессандро П'єр Гіді", role: "Основний пілот" },
            { name: "Ніклас Нільсен", role: "Основний пілот" },
            { name: "Антоніо Фуоко", role: "Основний пілот" },
            { name: "Джеймс Каладо", role: "Основний пілот" }
        ]
    },
    {
        id: 3,
        name: "Toyota GR010 Hybrid",
        manufacturer: "Toyota Gazoo Racing",
        color: "#1e6b94",
        iconColor: "#1e6b94",
        icon: "fas fa-bolt",
        class: "LMH",
        favorite: true,
        specs: { 
            engine: "3.5L V6 Twin-Turbo", 
            power: "680 HP", 
            hybrid: "MGU Rear", 
            weight: "1040 кг",
            topSpeed: "340 км/год",
            torque: ">700 Нм",
            year: "2021"
        },
        description: "Наступник TS050 Hybrid, розроблений для нового регламенту Hypercar. GR010 має обмеження потужності до 500 кВт та максимальну вагу 1040 кг.",
        history: "Наступник TS050 Hybrid, розроблений для нового регламенту Hypercar. Вперше представлений у січні 2021 року. GR010 має обмеження потужності до 500 кВт та максимальну вагу 1040 кг. Гібридна система включає електродвигун на задній осі.",
        racing: "Дебютував у 2021 році на 6 годинах Спа. Виграв чемпіонат у 2021 та 2022 роках. У 2023 році поступився Ferrari на Ле-Мані. Команда Toyota Gazoo Racing є найуспішнішою у сучасній історії WEC.",
        pilots: [
            { name: "Себастьєн Буемі", role: "Основний пілот" },
            { name: "Брендон Хартлі", role: "Основний пілот" },
            { name: "Рьо Хіракава", role: "Основний пілот" },
            { name: "Майк Конвей", role: "Основний пілот" }
        ]
    },
    
    // LMDh клас
    {
        id: 4,
        name: "Porsche 963",
        manufacturer: "Porsche Penske Motorsport",
        color: "#d4af37",
        iconColor: "#d4af37",
        icon: "fas fa-crown",
        class: "LMDh",
        favorite: false,
        specs: { 
            engine: "4.6L V8 Biturbo", 
            power: "670 HP", 
            hybrid: "LMDh Standard", 
            weight: "1030 кг",
            topSpeed: "335 км/год",
            torque: "650 Нм",
            year: "2023"
        },
        description: "Розроблений для класів LMDh та GTP у партнерстві з Penske. Двигун V8 бітурбо є розвитком агрегату RS Spyder, що також стояв у суперкарі 918 Spyder.",
        history: "Розроблений для класів LMDh та GTP у партнерстві з Penske. Двигун V8 бітурбо є розвитком агрегату RS Spyder, що також стояв у суперкарі 918 Spyder. Представлений у 2022 році в Гудвуді. Клієнтські команди: JOTA Sports, JDC MotorSports, Proton Competition.",
        racing: "Перша перемога здобута в Лонг-Біч (IMSA) екіпажем Джаміна/Тенді. У 2024 році заводська команда Porsche Penske виграла загальний залік «24 години Дайтона» (Наср, Ньюгарден, Кемерон, Кемпбелл).",
        pilots: [
            { name: "Кевін Магнуссен", role: "Основний пілот" },
            { name: "Міхаель Кристенсен", role: "Основний пілот" },
            { name: "Фредерік Маковіцькі", role: "Основний пілот" },
            { name: "Дейн Кемерон", role: "Основний пілот" }
        ]
    },
    {
        id: 5,
        name: "Cadillac V-Series.R",
        manufacturer: "Cadillac Racing",
        color: "#2d6ef5",
        iconColor: "#2d6ef5",
        icon: "fas fa-shield-alt",
        class: "LMDh",
        favorite: false,
        specs: { 
            engine: "5.5L V8", 
            power: "670 HP", 
            hybrid: "LMDh Standard", 
            weight: "1030 кг",
            topSpeed: "330 км/год",
            torque: ">700 Нм",
            year: "2023"
        },
        description: "Розроблений разом з Dallara для участі в IMSA та WEC. Двигун V8 без турбонаддуву є унікальним для класу LMDh.",
        history: "Розроблений разом з Dallara для участі в IMSA та WEC. Двигун V8 без турбонаддуву є унікальним для класу LMDh. Презентація відбулася у червні 2022 року. Cadillac повернувся в гонки на витривалість після багаторічної перерви.",
        racing: "Дебютував на 24 годинах Дайтони в 2023 році. У WEC дебютував на 1000 милях Себрінга. Найкращий результат — друге місце на 6 годинах Портімао в 2023 році.",
        pilots: [
            { name: "Алекс Лінн", role: "Основний пілот" },
            { name: "Ерл Бембер", role: "Основний пілот" },
            { name: "Річард Вестбрук", role: "Основний пілот" },
            { name: "Піпо Дерані", role: "Основний пілот" }
        ]
    },
    {
        id: 6,
        name: "BMW M Hybrid V8",
        manufacturer: "BMW M Team",
        color: "#1a94ef",
        iconColor: "#1a94ef",
        icon: "fas fa-flag",
        class: "LMDh",
        favorite: false,
        specs: { 
            engine: "P66/3 V8 Twin-Turbo", 
            power: "640 HP", 
            hybrid: "LMDh Standard", 
            weight: "1030 кг",
            topSpeed: "335 км/год",
            torque: "650 Нм",
            year: "2023"
        },
        description: "Розроблений на базі шасі Dallara. Двигун P66/3 є модифікацією агрегату, що використовувався в DTM.",
        history: "Розроблений на базі шасі Dallara. Двигун P66/3 є модифікацією агрегату, що використовувався в DTM. Презентація відбулася у лютому 2022 року на Гудвудському фестивалі швидкості. BMW повертається в гонки на витривалість після 25-річної перерви.",
        racing: "Дебютував на 24 годинах Дайтони в 2023 році. У WEC дебютував у 2024 році. Команда BMW M Team RLL бере участь у чемпіонаті IMSA, а BMW M Team WRT — у WEC.",
        pilots: [
            { name: "Шелдон Ван Дер Лінде", role: "Основний пілот" },
            { name: "Робін Фрійнс", role: "Основний пілот" },
            { name: "Рене Раст", role: "Основний пілот" },
            { name: "Філіп Енг", role: "Основний пілот" }
        ]
    },
    {
        id: 7,
        name: "Lamborghini SC63",
        manufacturer: "Lamborghini Iron Lynx",
        color: "#ffcc00",
        iconColor: "#ffcc00",
        icon: "fas fa-bull",
        class: "LMDh",
        favorite: false,
        specs: { 
            engine: "3.8L V8 Twin-Turbo", 
            power: "670 HP", 
            hybrid: "LMDh Standard", 
            weight: "1030 кг",
            topSpeed: "338 км/год",
            torque: "700 Нм",
            year: "2024"
        },
        description: "Перший прототип Lamborghini для гонок на витривалість. Розроблений на базі шасі Ligier. Представляє нову еру для італійського бренду в автоспорті.",
        history: "Оголошений у 2022 році як перша спроба Lamborghini у вищому дивізіоні витривалості. SC63 названий на честь засновника Ferruccio Lamborghini (SC — його ініціали) та року заснування компанії (1963).",
        racing: "Дебют відбувся у 2024 році на 24 годинах Дайтони. У WEC планується дебют на 1812 км Катару. Команда Lamborghini Iron Lynx поєднує італійську пристрасть з німецькою інженерією.",
        pilots: [
            { name: "Романо Гатті", role: "Основний пілот" },
            { name: "Мірко Бортолотті", role: "Основний пілот" },
            { name: "Андреа Кальдареллі", role: "Основний пілот" },
            { name: "Матео Кресоні", role: "Основний пілот" }
        ]
    },
    
    // LMGT3 клас
    {
        id: 8,
        name: "Ferrari 296 GT3",
        manufacturer: "Ferrari AF Corse",
        color: "#ff2800",
        iconColor: "#ff2800",
        icon: "fas fa-horse-head",
        class: "LMGT3",
        favorite: true,
        specs: { 
            engine: "3.0L V6 Twin-Turbo", 
            power: "600 HP", 
            hybrid: "Відсутня", 
            weight: "1240 кг",
            topSpeed: "300 км/год",
            torque: "710 Нм",
            year: "2023"
        },
        description: "Наступник успішної 488 GT3, з новим двигуном V6 з подвійним турбонаддувом. Перший GT3 автомобіль Ferrari з двигуном V6.",
        history: "Представлений у 2022 році як заміна для 488 GT3. Двигун заснований на дорожній версії Ferrari 296 GTB, але значно модифікований для гоночних потреб. Відрізняється покращеною аеродинамікою та кращим балансом.",
        racing: "Дебютував у 2023 році в чемпіонаті GT World Challenge Europe. У 2024 році представляє Ferrari у новому класі LMGT3 WEC. Вже здобув перемоги в Daytona 24H та Себрінгу.",
        pilots: [
            { name: "Алессіо Ровера", role: "Професійний пілот" },
            { name: "Роберт Шварцман", role: "Професійний пілот" },
            { name: "Франческо Кастеллаччі", role: "Пілот-аматор" },
            { name: "Томас Нойбауер", role: "Професійний пілот" }
        ]
    },
    {
        id: 9,
        name: "Porsche 911 GT3 R",
        manufacturer: "Porsche Motorsport",
        color: "#000000",
        iconColor: "#d4af37",
        icon: "fas fa-car",
        class: "LMGT3",
        favorite: false,
        specs: { 
            engine: "4.2L Flat-6", 
            power: "565 HP", 
            hybrid: "Відсутня", 
            weight: "1240 кг",
            topSpeed: "295 км/год",
            torque: "590 Нм",
            year: "2023"
        },
        description: "Найновіша версія легендарного 911 GT3 R, оптимізована для нового регламенту LMGT3. Зберігає традиційний опозитний двигун без турбонаддуву.",
        history: "Еволюція успішної лінійки Porsche 911 GT3 R. Версія 2023 року отримала нову аеродинаміку, покращену ефективність гальм та оновлену електроніку. Заснована на дорожньому 911 GT3 RS.",
        racing: "Один з найпопулярніших GT3 автомобілів у світі. В WEC представляється командами Proton Competition та Manthey Racing. Має багату історію перемог у 24 годинах Ле-Мана та інших престижних гонках.",
        pilots: [
            { name: "Кевін Естре", role: "Заводський пілот" },
            { name: "Рішар Ліц", role: "Заводський пілот" },
            { name: "Мікаель Кристенсен", role: "Заводський пілот" },
            { name: "Фред Маковікі", role: "Заводський пілот" }
        ]
    },
    {
        id: 10,
        name: "Corvette Z06 GT3.R",
        manufacturer: "Corvette Racing",
        color: "#ff4500",
        iconColor: "#ff4500",
        icon: "fas fa-flag-usa",
        class: "LMGT3",
        favorite: false,
        specs: { 
            engine: "5.5L V8", 
            power: "590 HP", 
            hybrid: "Відсутня", 
            weight: "1240 кг",
            topSpeed: "305 км/год",
            torque: "650 Нм",
            year: "2024"
        },
        description: "Перший справжній GT3 автомобіль від Corvette, розроблений спеціально для міжнародних змагань замість GTLM. Потужний атмосферний V8 двигун.",
        history: "Розроблений для переходу Corvette Racing з класу GTLM до нового LMGT3. Представлений у 2023 році. Відрізняється від попередніх Corvette тим, що це перший автомобіль бренду, розроблений відповідно до специфікацій GT3 з нуля.",
        racing: "Дебютував на 24 годинах Дайтони 2024 року. У WEC представляє Pratt Miller Motorsport. Американський автомобіль з європейською гоночною історією через успіхи в Le Mans GTE Pro.",
        pilots: [
            { name: "Антоніо Гарсія", role: "Заводський пілот" },
            { name: "Джордан Тейлор", role: "Заводський пілот" },
            { name: "Томмі Мілнер", role: "Заводський пілот" },
            { name: "Нік Кетсбург", role: "Заводський пілот" }
        ]
    },
    {
        id: 11,
        name: "Aston Martin Vantage GT3",
        manufacturer: "Aston Martin Racing",
        color: "#00a78e",
        iconColor: "#00a78e",
        icon: "fas fa-wings",
        class: "LMGT3",
        favorite: true,
        specs: { 
            engine: "4.0L V8 Twin-Turbo", 
            power: "585 HP", 
            hybrid: "Відсутня", 
            weight: "1240 кг",
            topSpeed: "298 км/год",
            torque: "700 Нм",
            year: "2024"
        },
        description: "Оновлена версія успішного Aston Martin Vantage GT3 з двигуном від Mercedes-AMG. Покращена аеродинаміка та надійність.",
        history: "Еволюція попередньої версії Vantage GT3, яка виграла чемпіонат світу FIA GT у 2022 році. Версія 2024 року отримала новий передній спліттер, заднє крило та оновлену систему охолодження.",
        racing: "У WEC представляється командою Heart of Racing. Також бере участь у чемпіонатах IMSA, GT World Challenge та British GT. Має перемоги в 24 годинах Спа та 12 годинах Себрінга.",
        pilots: [
            { name: "Росс Ганн", role: "Заводський пілот" },
            { name: "Алекс Ріберс", role: "Заводський пілот" },
            { name: "Даррен Тернер", role: "Заводський пілот" },
            { name: "Марко Серенсен", role: "Заводський пілот" }
        ]
    },
    {
        id: 12,
        name: "Ford Mustang GT3",
        manufacturer: "Ford Multimatic Motorsports",
        color: "#0033a0",
        iconColor: "#0033a0",
        icon: "fas fa-horse",
        class: "LMGT3",
        favorite: false,
        specs: { 
            engine: "5.4L V8", 
            power: "580 HP", 
            hybrid: "Відсутня", 
            weight: "1240 кг",
            topSpeed: "302 км/год",
            torque: "680 Нм",
            year: "2024"
        },
        description: "Повернення Ford до GT-гонок після успіху з GT у 2016-2019 роках. Заснований на дорожньому Mustang Dark Horse, але радикально перероблений для гонок.",
        history: "Оголошений у 2022 році як частина повернення Ford до витривалості. Розроблений спільно з Multimatic, який також створював Ford GT. Перший Mustang, розроблений для міжнародних GT3 змагань.",
        racing: "Дебют у 2024 році на 24 годинах Дайтони. У WEC представляється командою Proton Competition. Планується участь у Ле-Мані 2024 року, де Mustang повертається після багаторічної перерви.",
        pilots: [
            { name: "Гаррі Тінкнелл", role: "Заводський пілот" },
            { name: "Енді Прайол", role: "Заводський пілот" },
            { name: "Джоуї Генд", role: "Заводський пілот" },
            { name: "Дірк Мюллер", role: "Заводський пілот" }
        ]
    },
    {
        id: 13,
        name: "McLaren 720S GT3 Evo",
        manufacturer: "McLaren Customer Racing",
        color: "#ff8700",
        iconColor: "#ff8700",
        icon: "fas fa-speedometer",
        class: "LMGT3",
        favorite: false,
        specs: { 
            engine: "4.0L V8 Twin-Turbo", 
            power: "590 HP", 
            hybrid: "Відсутня", 
            weight: "1240 кг",
            topSpeed: "310 км/год",
            torque: "700 Нм",
            year: "2024"
        },
        description: "Оновлена версія успішної 720S GT3 з покращеною аеродинамікою, надійністю та ефективністю. Один з найшвидших автомобілів у класі.",
        history: "Еволюція McLaren 720S GT3, яка дебютувала у 2019 році. Версія Evo представлена у 2023 році з понад 20 оновленнями, включаючи новий передній спліттер, дифузор та систему охолодження.",
        racing: "У WEC представляється командою United Autosports. Також активно бере участь у GT World Challenge, Intercontinental GT Challenge та IMSA. Відомий своєю швидкістю на прямих ділянках.",
        pilots: [
            { name: "Олівер Джавіс", role: "Заводський пілот" },
            { name: "Джеймс Котінгем", role: "Заводський пілот" },
            { name: "Брендон Леїч", role: "Професійний пілот" },
            { name: "Марвін Кірхгофер", role: "Професійний пілот" }
        ]
    }
];

// DOM елементи
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalData = document.getElementById('modal-data');
const filterButtons = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';

/**
 * Створення частинок для анімації фону
 */
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Випадкові параметри
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = Math.random() * 25 + 15;
        const opacity = Math.random() * 0.3 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = opacity;
        
        particlesContainer.appendChild(particle);
    }
}

/**
 * Рендеринг карток автомобілів
 * @param {string} filter - Фільтр для відображення автомобілів
 */
function renderCars(filter = 'all') {
    gallery.innerHTML = '';
    
    let filteredCars = cars;
    
    if (filter === 'lmh') {
        filteredCars = cars.filter(car => car.class === 'LMH');
    } else if (filter === 'lmdh') {
        filteredCars = cars.filter(car => car.class === 'LMDh');
    } else if (filter === 'lmgt3') {
        filteredCars = cars.filter(car => car.class === 'LMGT3');
    } else if (filter === 'favorite') {
        filteredCars = cars.filter(car => car.favorite);
    }
    
    filteredCars.forEach((car) => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.dataset.id = car.id;
        
        card.innerHTML = `
            <div class="card-header">
                <div class="car-badge">${car.class}</div>
                <div class="car-icon" style="background: ${car.iconColor}">
                    <i class="${car.icon}"></i>
                </div>
                <h3 class="car-name">${car.name}</h3>
                <div class="car-manufacturer">${car.manufacturer} • ${car.specs.year}</div>
            </div>
            <div class="card-content">
                <p class="car-description">${car.description}</p>
                <div class="car-specs">
                    <div class="spec">
                        <span class="spec-label">Двигун</span>
                        <span class="spec-value">${car.specs.engine}</span>
                    </div>
                    <div class="spec">
                        <span class="spec-label">Потужність</span>
                        <span class="spec-value">${car.specs.power}</span>
                    </div>
                    <div class="spec">
                        <span class="spec-label">Гібрид</span>
                        <span class="spec-value">${car.specs.hybrid}</span>
                    </div>
                    <div class="spec">
                        <span class="spec-label">Вага</span>
                        <span class="spec-value">${car.specs.weight}</span>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="view-btn">
                    <i class="fas fa-chart-bar"></i> Детальна інформація
                </button>
            </div>
        `;
        
        // Додаємо обробник подій для картки
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('view-btn') && !e.target.closest('.view-btn')) {
                openModal(car.id);
            }
        });
        
        // Додаємо обробник для кнопки "Детальна інформація"
        const viewBtn = card.querySelector('.view-btn');
        viewBtn.addEventListener('click', () => openModal(car.id));
        
        gallery.appendChild(card);
    });
}

/**
 * Відкриття модального вікна з детальною інформацією про автомобіль
 * @param {number} carId - ID автомобіля
 */
function openModal(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;
    
    // Визначаємо колір для класу
    let classColor;
    switch(car.class) {
        case 'LMH': classColor = '#f57f20'; break;
        case 'LMDh': classColor = '#00b3ff'; break;
        case 'LMGT3': classColor = '#ff2a6d'; break;
        default: classColor = car.iconColor;
    }
    
    modalData.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${car.name}</h2>
            <div class="modal-subtitle">
                <span style="color: ${classColor}; font-weight: bold">${car.class}</span>
                <span>•</span>
                <span>${car.manufacturer}</span>
                <span>•</span>
                <span>Сезон ${car.specs.year}</span>
            </div>
        </div>
        <div class="modal-body">
            <div>
                <div class="info-section">
                    <h3 class="section-title"><i class="fas fa-cogs"></i> Технічні характеристики</h3>
                    <div class="specs-grid">
                        <div class="spec-item">
                            <div class="spec-label">Двигун</div>
                            <div class="spec-value">${car.specs.engine}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Потужність</div>
                            <div class="spec-value">${car.specs.power}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Гібридна система</div>
                            <div class="spec-value">${car.specs.hybrid}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Вага</div>
                            <div class="spec-value">${car.specs.weight}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Макс. швидкість</div>
                            <div class="spec-value">${car.specs.topSpeed}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Крутний момент</div>
                            <div class="spec-value">${car.specs.torque}</div>
                        </div>
                    </div>
                </div>
                
                <div class="info-section">
                    <h3 class="section-title"><i class="fas fa-flag-checkered"></i> Екіпаж та пілоти</h3>
                    <div class="pilots-list">
                        ${car.pilots.map(pilot => `
                            <div class="pilot-item">
                                <div class="pilot-icon">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="pilot-info">
                                    <h4>${pilot.name}</h4>
                                    <p>${pilot.role}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div>
                <div class="info-section">
                    <h3 class="section-title"><i class="fas fa-history"></i> Історія та розробка</h3>
                    <div class="info-text">${car.history}</div>
                </div>
                
                <div class="info-section">
                    <h3 class="section-title"><i class="fas fa-trophy"></i> Виступи в гонках</h3>
                    <div class="info-text">${car.racing}</div>
                </div>
                
                <div class="info-section">
                    <h3 class="section-title"><i class="fas fa-palette"></i> Ідентифікація</h3>
                    <div class="info-text">
                        Основна ліверія автомобіля виконана в кольорі 
                        <span style="color: ${car.color}; font-weight: bold">${car.color}</span>.
                        <div class="color-palette">
                            <div class="color-item" style="background: ${car.color}" title="Основний колір"></div>
                            <div class="color-item" style="background: #111111" title="Чорний"></div>
                            <div class="color-item" style="background: #ffffff" title="Білий"></div>
                            <div class="color-item" style="background: #333333" title="Сірий"></div>
                        </div>
                        <p style="margin-top: 10px; font-size: 0.9rem; color: var(--text-secondary)">
                            <i class="fas fa-info-circle"></i> Клас: <span style="color: ${classColor}">${car.class}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

/**
 * Закриття модального вікна
 */
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

/**
 * Ініціалізація фільтрів
 */
function initFilters() {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Видаляємо клас active у всіх кнопок
            filterButtons.forEach(b => b.classList.remove('active'));
            // Додаємо клас active до поточної кнопки
            btn.classList.add('active');
            // Оновлюємо фільтр
            currentFilter = btn.dataset.filter;
            renderCars(currentFilter);
        });
    });
}

/**
 * Ініціалізація додатку
 */
function init() {
    createParticles();
    renderCars();
    initFilters();
    
    // Закриття модального вікна по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Оновлюємо статистику в шапці
    updateStats();
}

/**
 * Оновлення статистики в шапці
 */
function updateStats() {
    const statsBar = document.querySelector('.stats-bar');
    if (statsBar) {
        statsBar.innerHTML = `
            <div class="stat-item">
                <div class="stat-value">${cars.length}</div>
                <div class="stat-label">Автомобілів</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">3</div>
                <div class="stat-label">Класи</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${cars.reduce((total, car) => total + car.pilots.length, 0)}+</div>
                <div class="stat-label">Пілотів</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">2024</div>
                <div class="stat-label">Сезон</div>
            </div>
        `;
    }
}

// Запускаємо ініціалізацію після завантаження сторінки
document.addEventListener('DOMContentLoaded', init);
