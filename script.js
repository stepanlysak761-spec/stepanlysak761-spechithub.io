const motorsportDB = {
    "F1": { t: "FORMULA 1", d: "Максимальна швидкість та технології. Гібридні двигуни 1.6 V6.", s: "Pirelli P-Zero Premium" },
    "WRC": { t: "WRC RALLY", d: "Екстремальне водіння на межі гравітації та зчеплення.", s: "Scorpion Rally Special" },
    "MOTOGP": { t: "MOTOGP", d: "Найвищий рівень світових мотоциклетних перегонів.", s: "Slick Race Compound" },
    "DRIFT": { t: "DRIFTING", d: "Контроль заносу на надвисоких обертах та густий дим.", s: "Extreme Performance Tires" }
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("infoModal");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const data = motorsportDB[id] || { t: card.querySelector('h4').innerText, d: "Інформація оновлюється...", s: "TBA" };
            
            modalBody.innerHTML = `
                <h2 style="color: #FFD700; font-family: Orbitron; margin-bottom: 20px;">${data.t}</h2>
                <p style="line-height: 1.6; margin-bottom: 20px;">${data.d}</p>
                <div style="font-size: 0.8rem; color: #FFD700; border-top: 1px solid #444; padding-top: 15px;">TECH: ${data.s}</div>
            `;
            modal.style.display = "block";
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }
});
