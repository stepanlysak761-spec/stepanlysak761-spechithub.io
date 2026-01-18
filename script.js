const motorsportData = {
    "F1": { title: "FORMULA 1", desc: "Вершина автоспорту. Гібридні двигуни та аеродинаміка.", spec: "Шини: Pirelli P Zero F1 Spec" },
    "WRC": { title: "WRC RALLY", desc: "Найшвидші ралійні машини світу на гравії та снігу.", spec: "4WD Hybrid | 500 HP" },
    "MOTOGP": { title: "MOTOGP", desc: "Королівський клас мотоциклів. Нахил до 64 градусів.", spec: "360 km/h | 280 HP" },
    "DRIFT": { title: "DRIFTING", desc: "Контрольований занос на максимальній швидкості.", spec: "Траса: Кліппінг зони" }
    // Скрипт автоматично обробить інші карти, навіть якщо їх немає в базі
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("infoModal");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const info = motorsportData[id] || { 
                title: card.querySelector('h4').innerText, 
                desc: "Детальна технічна інформація знаходиться в архіві Motorsport 360.", 
                spec: "DATA PENDING" 
            };

            modalBody.innerHTML = `
                <h2 style="font-family:Orbitron; color:#FFD700; margin-bottom:20px;">${info.title}</h2>
                <p style="font-size:1.2rem; line-height:1.6; margin-bottom:20px;">${info.desc}</p>
                <div style="background:rgba(255,215,0,0.1); padding:15px; border-left:4px solid #FFD700;">
                    <strong>TECHNICAL SPEC:</strong> ${info.spec}
                </div>
            `;
            modal.style.display = "block";
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };
});
