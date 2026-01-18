const motorsportDB = {
    "F1": { t: "FORMULA 1", d: "Максимальні технології. Гібридні мотори 1.6L V6 Turbo.", s: "Pirelli P-Zero" },
    "MOTOGP": { t: "MOTOGP", d: "Найшвидші мотоцикли планети. Екстремальні нахили.", s: "Michelin Slick" },
    "WRC": { t: "WRC", d: "Ралі в найсуворіших умовах світу на будь-якому покритті.", s: "Scorpion Rally" },
    "DRIFT": { t: "DRIFTING", d: "Мистецтво керування заносом при потужності 1000+ к.с.", s: "Valino Pergea" }
};

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    const muteBtn = document.getElementById('muteBtn');
    const modal = document.getElementById('infoModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-btn');

    // Музика (Skyfall)
    const initMusic = () => {
        music.play().then(() => {
            muteBtn.innerText = "🔊 SOUND: ON";
        }).catch(() => console.log("Чекаю кліку..."));
    };

    document.addEventListener('click', initMusic, { once: true });

    muteBtn.onclick = (e) => {
        e.stopPropagation();
        if (music.paused) { music.play(); muteBtn.innerText = "🔊 SOUND: ON"; }
        else { music.pause(); muteBtn.innerText = "🔇 SOUND: OFF"; }
    };

    // Картки та Модалка
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const data = motorsportDB[id] || { t: card.querySelector('h4').innerText, d: "Технічні дані завантажуються...", s: "TBA" };
            
            modalBody.innerHTML = `
                <h2 style="color:#FFD700; font-family:Orbitron; margin-bottom:15px;">${data.t}</h2>
                <p style="line-height:1.6; margin-bottom:15px; font-size:0.9rem;">${data.d}</p>
                <div style="font-size:0.75rem; color:#FFD700; border-top:1px solid #444; padding-top:10px;">TECH: ${data.s}</div>
            `;
            modal.style.display = "block";
            music.volume = 0.2; 
        });
    });

    closeBtn.onclick = () => { modal.style.display = "none"; music.volume = 1.0; };
    window.onclick = (e) => { if (e.target == modal) { modal.style.display = "none"; music.volume = 1.0; } };
});
