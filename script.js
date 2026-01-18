const sportData = {
    // CIRCUIT RACING
    "FORMULA 1": {
        title: "FORMULA 1 GRAND PRIX",
        desc: "Вища категорія автоспорту з відкритими колесами. Найдосконаліша аеродинаміка та гібридні силові установки. Тут кожен міліметр боліда створений для перемоги над часом.",
        specs: ["MAX G-FORCE: 6.0G", "TOP SPEED: 370 KM/H", "ENGINE: 1.6L V6 TURBO HYBRID"]
    },
    "WEC / LE MANS": {
        title: "WORLD ENDURANCE CHAMPIONSHIP",
        desc: "Випробування надійності та витривалості. 24 години Ле-Мана — це гонка, де перемагає не найшвидший, а той, хто не зупиняється.",
        specs: ["DURATION: UP TO 24H", "TEAMS: 3 DRIVERS", "CLASS: HYPERCAR / GT"]
    },
    "NASCAR": {
        title: "NASCAR CUP SERIES",
        desc: "Американська ікона. Важкі сток-кари, мас-старти по 40 машин та щільна боротьба на овалах у повітряному мішку суперника.",
        specs: ["ENGINE: 5.8L V8", "POWER: 750 HP", "TRACKS: OVALS & ROAD COURSES"]
    },
    "INDYCAR": {
        title: "INDYCAR SERIES",
        desc: "Найшвидша відкрита серія Америки. Мікс дорожніх трас та овалів, де швидкість боліда перевищує показники F1 на прямих.",
        specs: ["TOP SPEED: 380 KM/H", "STEERING: NO POWER ASSIST", "EVENT: INDY 500"]
    },

    // DIRT / RALLY
    "WRC": {
        title: "WORLD RALLY CHAMPIONSHIP",
        desc: "Вершина ралі. Битва людини та машини проти природи на гравії, снігу та асфальті. Пілоти WRC — еталон контролю ковзання.",
        specs: ["SURFACE: ALL TERRAIN", "DRIVE: 4WD HYBRID", "STAGES: SPECIAL STAGES (SS)"]
    },
    "DAKAR RALLY": {
        title: "DAKAR RALLY RAID",
        desc: "Найскладніший марафон планети. Два тижні виживання в пустелі, де навігація так само важлива, як і швидкість.",
        specs: ["DURATION: 14 DAYS", "DISTANCE: 8000+ KM", "VEHICLES: CARS, BIKES, TRUCKS"]
    },
    "RALLYCROSS": {
        title: "WORLD RALLYCROSS",
        desc: "Гладіаторські бої на автомобілях. Короткі вибухові заїзди на змішаному покритті. Розгін швидший за боліди F1.",
        specs: ["0-100: 1.9 SEC", "POWER: 600+ HP", "FEATURE: JOKER LAP"]
    },

    // MOTO
    "MOTOGP": {
        title: "MOTOGP WORLD DIVISION",
        desc: "Пік двоколісних технологій. Прототипи, що нахиляються у поворотах на 64 градуси. Тут немає місця для помилок.",
        specs: ["WEIGHT: 157 KG", "LEAN ANGLE: 64 DEGREES", "TOP SPEED: 360+ KM/H"]
    },
    "SPEEDWAY": {
        title: "SPEEDWAY NO BRAKES",
        desc: "Унікальні гонки по гаревому овалу. Тільки одна передача і жодних гальм. Весь поворот проходить у безперервному заносі.",
        specs: ["BRAKES: NONE", "FUEL: METHANOL", "GEARS: 1 FIXED"]
    },

    // TECHNOLOGY
    "DRIFTING": {
        title: "DRIFT BATTLE PROTOCOL",
        desc: "Оцінюється не час, а стиль, кут та димність. Парні заїзди — це танець на межі зчеплення шин з асфальтом.",
        specs: ["JUDGING: ANGLE, LINE, STYLE", "TIRE TEMP: 100C+", "POWER: 1000+ HP"]
    },
    "FORMULA E": {
        title: "FORMULA E ELECTRIC",
        desc: "Гонки майбутнього в центрах найбільших мегаполісів. Електрична потужність та стратегія управління енергією.",
        specs: ["POWER: 350 KW", "TIRES: ALL WEATHER", "MODE: ATTACK MODE"]
    },
    "FERRARI 499P": {
        title: "DOSSIER FERRARI 499P",
        desc: "Гібридний шедевр Scuderia Ferrari. Переможець Ле-Мана, що поєднав у собі досвід F1 та надійність Endurance.",
        specs: ["ENGINE: 2.9L V6 TURBO", "HYBRID: ERS FRONT AXLE", "STATUS: LE MANS WINNER"]
    }
    // Інші 30+ видів спорту додаються за аналогічним шаблоном
};

document.addEventListener('DOMContentLoaded', () => {
    // Reveal Scroll Animation
    const reveal = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
        });
    };
    window.addEventListener('scroll', reveal);
    reveal();

    // Modal Logic
    const modal = document.getElementById("info-modal");
    const modalData = document.getElementById("modal-data");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('h4') ? card.querySelector('h4').innerText : card.getAttribute('data-name');
            const data = sportData[name];

            if (data) {
                modalData.innerHTML = `
                    <h2 class="modal-h">${data.title}</h2>
                    <p class="modal-p">${data.desc}</p>
                    <div class="spec-list">
                        ${data.specs.map(s => `<span class="spec-tag">>> ${s}</span>`).join('')}
                    </div>
                `;
            } else {
                modalData.innerHTML = `<h2 class="modal-h">${name}</h2><p class="modal-p">Архівні дані завантажуються...</p>`;
            }
            modal.style.display = "block";
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
});
