const motorsportDatabase = {
    // CIRCUIT
    "F1": { title: "Formula 1", desc: "Королева автоспорту. Максимальні перевантаження та гібридні технології.", spec: "Швидкість: 370 км/год | 1000 к.с." },
    "F2": { title: "Formula 2 / 3 / 4", desc: "Сходинки до вершини. Монокубки, де все вирішує майстерність пілота.", spec: "Рівні умови для всіх" },
    "GT3": { title: "GT3 / GT2 / GT4", desc: "Гонки на базі серійних суперкарів. Найбільш впізнавані авто на треку.", spec: "Ferrari, Porsche, Lambo" },
    "WEC": { title: "WEC / Le Mans", desc: "Битва на витривалість. 24 години безперервного руху.", spec: "Гіперкари та стратегія" },
    "IMSA": { title: "IMSA Championship", desc: "Американський дух гонок на витривалість. Легендарні траси США.", spec: "Daytona, Sebring" },
    "DTM": { title: "DTM / TCR", desc: "Контактні кузовні гонки. Агресивна боротьба бампер у бампер.", spec: "Німецька точність" },
    "INDY": { title: "IndyCar", desc: "Найшвидші овали світу та дорожні траси Америки.", spec: "380 км/год на овалах" },
    "NASCAR": { title: "NASCAR", desc: "Культура США. Важкі авто, V8 та 40 машин у щільному потоці.", spec: "Drafting та стратегія" },
    "KART": { title: "Karting", desc: "Основа всього. Тут починали Сенна, Шумахер та Хемілтон.", spec: "Максимальна реакція" },

    // RALLY / DIRT
    "WRC": { title: "WRC Rally", desc: "Гонки на межі по гравію, снігу та асфальту.", spec: "Найкращий контроль заносу" },
    "DAKAR": { title: "Dakar Rally", desc: "Два тижні виживання у пустелі. Найважчий рейд планети.", spec: "8000 км по пісках" },
    "WRX": { title: "Rallycross", desc: "Короткі вибухові заїзди. Розгін 0-100 за 1.9 сек.", spec: "Швидше за F1" },
    // ... додайте інші за аналогією (обмеження простору)
    "MOTOGP": { title: "MotoGP", desc: "Вершина мотоспорту. Нахили у 64 градуси в поворотах.", spec: "360 км/год на двох колесах" },
    "DRIFT": { title: "Drifting", desc: "Мистецтво керування заносом. Оцінюється кут та стиль.", spec: "1000 к.с. та дим" },
    "FE": { title: "Formula E", desc: "Електричні боліди в центрах найбільших міст світу.", spec: "Нуль викидів | Attack Mode" },
    "FERRARI 499P": { title: "Dossier: Ferrari 499P", desc: "Гібридний переможець Ле-Мана. Поєднання досвіду F1 та надійності Endurance.", spec: "V6 Twin-Turbo + ERS" }
};

document.addEventListener('DOMContentLoaded', () => {
    // Анімація появи
    const reveal = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
        });
    };
    window.addEventListener('scroll', reveal);
    reveal();

    // Модальне вікно
    const modal = document.getElementById("info-modal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const data = motorsportDatabase[id];

            if (data) {
                modalBody.innerHTML = `
                    <h2 style="font-family:Orbitron; color:#FFD700; margin-bottom:20px;">${data.title}</h2>
                    <p style="font-size:1.2rem; margin-bottom:20px; line-height:1.6;">${data.desc}</p>
                    <div style="padding:15px; border-left:4px solid #FFD700; background:rgba(255,215,0,0.1);">
                        <strong>DATA SPEC:</strong> ${data.spec}
                    </div>
                `;
            } else {
                modalBody.innerHTML = `<h2>Дані завантажуються...</h2>`;
            }
            modal.style.display = "block";
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
});
