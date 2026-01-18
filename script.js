const sportData = {
    "FERRARI 499P": {
        title: "ARCHIVE_FILE: 499P_HYPERCAR",
        desc: "Переможець 24 годин Ле-Мана. Гібридна силова установка з повним приводом. Вершина технологічного регламенту LMH.",
        specs: ["POWER: 680 HP (System)", "WEIGHT: 1030 KG", "ENGINE: 2.9L V6 TWIN TURBO"]
    },
    "FORMULA 1": {
        title: "F1_GRAND_PRIX_DATA",
        desc: "Вища категорія гонок з відкритими колесами. Найшвидші боліди у світі на кільцевих трасах.",
        specs: ["MAX SPEED: 370 KM/H", "0-100: 2.4 SEC", "CHASSIS: CARBON MONOCOQUE"]
    },
    "WRC": {
        title: "WORLD_RALLY_LOG",
        desc: "Екстремальні перегони по пересіченій місцевості. Гравій, сніг та асфальт.",
        specs: ["ENGINE: 1.6L TURBO HYBRID", "DRIVE: 4WD", "POWER: 500+ HP"]
    },
    "DRIFTING": {
        title: "DRIFT_RECORDS",
        desc: "Оцінка кута, траєкторії та димності. Парні заїзди — найвидовищніша частина дисципліни.",
        specs: ["TIRES: SEMI-SLICK", "POWER: 800-1200 HP", "DRIVE: RWD ONLY"]
    },
    "MOTOGP": {
        title: "MOTO_ELITE_SPEC",
        desc: "Прототипи мотоциклів, створені виключно для гонок. Кути нахилу в поворотах понад 60 градусів.",
        specs: ["WEIGHT: 157 KG", "POWER: 250+ HP", "TOP SPEED: 360+ KM/H"]
    },
    "DAKAR RALLY": {
        title: "DAKAR_MARATHON_FILE",
        desc: "Найскладніша гонка-марафон у світі. Тижні через дюни, каміння та пил.",
        specs: ["DURATION: 14 DAYS", "DISTANCE: 8000+ KM", "NAVIGATION: DIGITAL ROADBOOK"]
    },
    "GT3 / GT2 / GT4": {
        title: "GT_CATEGORY_CORE",
        desc: "Гонки на базі дорожніх суперкарів. Ferrari, Lamborghini, Porsche, BMW.",
        specs: ["ABS/TC: ENABLED", "ENGINE: FRONT/MID/REAR", "CLASSES: PRO / AM"]
    },
    "DRAG RACING": {
        title: "ACCELERATION_ARCHIVE",
        desc: "Битва на 1/4 милі. Драгстери Top Fuel розганяються до 500 км/год за лічені секунди.",
        specs: ["FUEL: NITRO-METHANE", "POWER: 11000 HP", "BRAKES: PARACHUTE"]
    }
    // Сюди можна додати решту 40 видів за аналогією
};

document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animation
    const reveal = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
        });
    };
    window.addEventListener('scroll', reveal);
    reveal();

    // Modal Logic
    const modal = document.getElementById("infoModal");
    const modalData = document.getElementById("modalData");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('h4').innerText;
            const data = sportData[name];

            if (data) {
                modalData.innerHTML = `
                    <h2 class="modal-h">${data.title}</h2>
                    <p class="modal-p">${data.desc}</p>
                    <div class="spec-list">
                        ${data.specs.map(s => `<div class="spec-line">>> ${s}</div>`).join('')}
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
