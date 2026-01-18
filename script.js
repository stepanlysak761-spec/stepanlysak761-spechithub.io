const sportData = {
    "FORMULA 1-4": {
        title: "FORMULA_SERIES",
        desc: "Вершина світового автоспорту. Боліди з відкритими колесами, що використовують найсучаснішу аеродинаміку та гібридні силові установки.",
        specs: ["MAX SPEED: 370 KM/H", "G-FORCE: 5.0G", "ENGINE: 1.6L V6 TURBO HYBRID"]
    },
    "DRIFTING": {
        title: "DRIFT_CHAMPIONSHIP",
        desc: "Технічна дисципліна, де оцінюється кут заносу, траєкторія та стиль. Головна мета — контроль автомобіля у безперервному ковзанні.",
        specs: ["JUDGING: ANGLE, LINE, STYLE", "POWER: 1000+ HP", "TIRE SMOKE: MAXIMUM"]
    },
    "WRC / ERC": {
        title: "WORLD_RALLY",
        desc: "Гонки на виживання по гравію, снігу та вузьким лісовим дорогам. Кожен заїзд — це випробування механічної міцності та майстерності пілота.",
        specs: ["SURFACE: MULTI", "CREW: DRIVER + CO-DRIVER", "DRIVE: 4WD"]
    }
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
                    <div style="margin-top:20px">
                        ${data.specs.map(s => `<div style="color:#ff0000; font-family:Orbitron; font-size:0.7rem; margin-bottom:5px">>> ${s}</div>`).join('')}
                    </div>
                `;
            } else {
                modalData.innerHTML = `<h2 class="modal-h">${name}</h2><p class="modal-p">Архівна інформація для цього сектору ще синхронізується...</p>`;
            }
            modal.style.display = "block";
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
});
