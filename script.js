/**
 * Motorsport 360 - Глобальна база даних автоспорту
 * Логіка керування контентом та інтерфейсом
 */

const motorsportDatabase = {
    // 01 CIRCUIT RACING
    "F1": { 
        title: "FORMULA 1", 
        desc: "Найвищий клас гонок на автомобілях з відкритими колесами. Технологічний пік аеродинаміки та гібридних силових установок.", 
        spec: "Pirelli P Zero F1 Spec | 1000+ HP | V6 Turbo Hybrid" 
    },
    "F2": { 
        title: "FORMULA 2 3 4", 
        desc: "Сходинки до вершини автоспорту. Моносерії, де перемагає майстерність пілота, а не бюджет команди.", 
        spec: "Dallara Chassis | Mecachrome Engines | Pirelli Tires" 
    },
    "GT": { 
        title: "GT SERIES", 
        desc: "Перегони на базі серійних суперкарів. Класи GT3 та GT2 є найпопулярнішими у світі клієнтського автоспорту.", 
        spec: "ABS & Traction Control allowed | BoP Balance of Performance" 
    },
    "WEC": { 
        title: "WEC LE MANS", 
        desc: "Чемпіонат світу з гонок на витривалість. Головна подія року — легендарні 24 години Ле-Мана.", 
        spec: "Hypercars LMDh & LMH | Hybrid AWD Systems" 
    },
    "INDY": { 
        title: "INDYCAR NASCAR", 
        desc: "Головні гоночні серії США. Поєднання швидкісних овалів та складних дорожніх трас.", 
        spec: "High Speed Oval Aero Kit | 350+ km/h top speed" 
    },

    // 02 DIRT RALLY
    "WRC": { 
        title: "WRC ERC", 
        desc: "Світовий та європейський чемпіонати з ралі. Гонки на межі можливостей по гравію, асфальту та снігу.", 
        spec: "Rally1 Hybrid Units | Spaceframe Chassis | 4WD" 
    },
    "DAKAR": { 
        title: "RALLY RAIDS", 
        desc: "Найважчі марафони планети. Багатоденні випробування техніки та людей у пустелях та горах.", 
        spec: "Custom Off-road Prototypes | 500L Fuel Tanks" 
    },
    "WRX": { 
        title: "RALLYCROSS", 
        desc: "Короткі, вибухові заїзди на змішаному покритті. Контактна боротьба та величезна потужність на старті.", 
        spec: "0-100 km/h in 1.8 seconds | Dual Motor Electric or Petrol" 
    },
    "BAJA": { 
        title: "BAJA BUGGY", 
        desc: "Американський стиль оффроуду. Трофі-траки та багі, що здатні «ковтати» величезні нерівності на високій швидкості.", 
        spec: "Long Travel Suspension (up to 1m) | V8 Engines" 
    },
    "HILL": { 
        title: "HILL CLIMB", 
        desc: "Гонка проти часу вгору по серпантину. Максимальна притискна сила та екстремальне полегшення конструкції.", 
        spec: "Huge Aero Wings | High Altitude Engine Tuning" 
    },

    // 03 MOTO RACING
    "MOTOGP": { 
        title: "MOTOGP WSBK", 
        desc: "Королівський клас мотоциклетних перегонів. Найкращі пілоти світу та прототипи, що не мають серійних аналогів.", 
        spec: "Lean Angle: 64 degrees | Michelin/Pirelli Race Spec" 
    },
    "MX": { 
        title: "MOTOCROSS SX", 
        desc: "Стрибки, бруд та фізична витривалість. Найвидовищніша дисципліна на закритих та відкритих стадіонах.", 
        spec: "450cc 4-stroke / 250cc 2-stroke | Long-travel Forks" 
    },
    "ENDURO": { 
        title: "HARD ENDURO", 
        desc: "Поєднання мотокросу та тріалу. Виживання в диких умовах, де фінішу дістаються лише одиниці.", 
        spec: "Low Pressure Tires | Extreme Protection Kits" 
    },
    "SPEED": { 
        title: "SPEEDWAY", 
        desc: "Гонки по колу на гаревому або льодовому покритті. Мотоцикли без гальм та з однією передачею.", 
        spec: "Methanol Fuel | No Brakes | Drift cornering style" 
    },
    "TRIAL": { 
        title: "MOTO TRIAL", 
        desc: "Мистецтво балансу. Подолання вертикальних перешкод без торкання землі ногами.", 
        spec: "Ultra-lightweight (under 70kg) | No Seat" 
    },

    // 04 TECHNOLOGY
    "FE": { 
        title: "FORMULA E", 
        desc: "Майбутнє автоспорту. Повністю електричні боліди, що змагаються в самому серці найбільших міст світу.", 
        spec: "350kW Power | Attack Mode | Sustainability Focus" 
    },
    "DRIFT": { 
        title: "DRIFTING", 
        desc: "Дисципліна, де оцінюється не час кола, а стиль, кут заносу та дим з-під коліс.", 
        spec: "Angle Sensors | 1000+ HP Engines | Quick Steering Racks" 
    },
    "DRAG": { 
        title: "DRAG RACING", 
        desc: "Битва на чверть милі. Максимальне прискорення та використання парашутів для зупинки.", 
        spec: "Nitromethane Fuel | 10,000+ HP (Top Fuel) | Wheelie Bars" 
    },
    "TIME": { 
        title: "TIME ATTACK", 
        desc: "Ідеальне коло. Кожна деталь автомобіля налаштована на витискання абсолютного максимуму на конкретній трасі.", 
        spec: "Carbon Everything | Time Attack Aero Packages" 
    },
    "HIST": { 
        title: "HISTORIC RACING", 
        desc: "Друге життя легендарних болідів минулих епох. Від 1930-х до золотого віку 1990-х.", 
        spec: "Original Engine Blocks | Modern Safety Upgrades" 
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("infoModal");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector(".close-btn");

    // Функція відкриття модального вікна
    const openInfo = (id, fallbackTitle) => {
        const info = motorsportDatabase[id] || { 
            title: fallbackTitle, 
            desc: "Детальна технічна специфікація готується до публікації в системі Motorsport 360.", 
            spec: "DATA PENDING" 
        };

        modalBody.innerHTML = `
            <div class="modal-header">
                <h2 style="font-family: 'Orbitron'; color: #FFD700; margin-bottom: 20px; font-size: 2rem; border-bottom: 2px solid #FFD700; display: inline-block;">${info.title}</h2>
            </div>
            <div class="modal-description">
                <p style="font-size: 1.2rem; line-height: 1.8; color: #eee; margin-bottom: 30px;">${info.desc}</p>
            </div>
            <div class="tech-box" style="background: rgba(255, 215, 0, 0.1); padding: 20px; border-left: 5px solid #FFD700;">
                <span style="color: #FFD700; font-weight: bold; letter-spacing: 1px; font-family: 'Orbitron'; font-size: 0.8rem; display: block; margin-bottom: 10px;">TECHNICAL SPECIFICATION</span>
                <span style="font-size: 1.1rem; color: #fff;">${info.spec}</span>
            </div>
        `;
        
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Заборона скролу фону
    };

    // Додавання обробника кліку для кожної картки
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const title = card.querySelector('h4').innerText;
            openInfo(id, title);
        });
    });

    // Закриття модального вікна
    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    closeBtn.addEventListener('click', closeModal);

    // Закриття при кліку поза вікном
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Закриття клавішею Escape
    window.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });
});
