const sportData = {
    "FERRARI 499P": {
        title: "DOSSIER: FERRARI 499P",
        desc: "Це вершина інженерії Scuderia Ferrari для чемпіонату WEC. Гібридний монстр, який здобув історичну перемогу в Ле-Мані через 50 років після останньої участі марки.",
        specs: ["SYSTEM: 3.0L V6 TWIN TURBO HYBRID", "POWER: 500 KW (680 HP)", "RECOVERY: 200 KW ENERGY SYSTEM"]
    },
    "FORMULA 1": {
        title: "GRAND PRIX(F1, F2, F3, F4)",
        desc: "Найвищий рівень автоспорту. Боліди з відкритими колесами, де аеродинаміка створює притискну силу, достатню для їзди по стелі тунелю.",
        specs: ["0-100: 2.4 SEC", "G-FORCE: 5.0+", "AERO: DRS SYSTEM"]
    },
    "DRIFTING": {
        title: "DRIFT",
        desc: "Мистецтво контрольованого хаосу. Перемогу отримує той, хто демонструє найбільший кут, швидкість та стиль у безперервному заносі.",
        specs: ["TIRES: SEMI-SLICK", "POWER: 1000+ HP", "STEERING: 70 DEGREE ANGLE"]
    },
    "WRC": {
        title: "WORLD RALLY(WRC/ERC)",
        desc: "Найскладніші умови для пілотування. Вузькі лісові дороги, снігові замети та гравійні серпантини.",
        specs: ["DRIVE: 4WD HYBRID", "SURFACE: SNOW, GRAVEL, ASPHALT", "GEARS: PADDLE SHIFT"]
    }
    // ... Ви можете додати решту 45 описів за цією ж структурою
};

document.addEventListener('DOMContentLoaded', () => {
    const reveal = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
        });
    };
    window.addEventListener('scroll', reveal);
    reveal();

    const modal = document.getElementById("infoModal");
    const modalData = document.getElementById("modalData");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('h4') ? card.querySelector('h4').innerText : card.querySelector('h2').innerText;
            const data = sportData[name];

            if (data) {
                modalData.innerHTML = `
                    <h2 class="modal-h">${data.title}</h2>
                    <p class="modal-p">${data.desc}</p>
                    <div style="margin-top:30px">
                        ${data.specs.map(s => `<div style="color:red; font-family:Orbitron; font-size:0.8rem; margin-bottom:10px">>> ${s}</div>`).join('')}
                    </div>
                `;
            } else {
                modalData.innerHTML = `<h2 class="modal-h">${name}</h2><p class="modal-p">Архівна інформація завантажується з центрального сервера...</p>`;
            }
            modal.style.display = "block";
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
});

