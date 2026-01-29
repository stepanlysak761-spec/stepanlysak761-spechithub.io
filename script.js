const cars = [
    {
        id: "ferrari",
        name: "Ferrari 499P",
        desc: "Переможець 24 годин Ле-Мана. Повернення легенди через 50 років.",
        color: "#ef1a2d",
        tech: "Двигун: 3.0L V6 Twin-Turbo + Гібрид"
    },
    {
        id: "porsche",
        name: "Porsche 963",
        desc: "Класична надійність Penske Motorsport у поєднанні з німецькою якістю.",
        color: "#d4af37",
        tech: "Двигун: 4.6L V8 Biturbo"
    },
    {
        id: "peugeot",
        name: "Peugeot 9X8",
        desc: "Найбільш радикальний дизайн без заднього антикрила.",
        color: "#94ad1e",
        tech: "Двигун: 2.6L V6 Twin-Turbo"
    }
];

const container = document.getElementById('cars-container');

cars.forEach(car => {
    const section = document.createElement('section');
    section.id = car.id;
    section.className = 'car-card';
    section.innerHTML = `
        <div class="car-info">
            <h2 style="color: ${car.color}">${car.name}</h2>
            <p>${car.desc}</p>
            <p><strong>${car.tech}</strong></p>
            <button class="btn" style="background: ${car.color}; color: white">Дізнатися більше</button>
        </div>
        <div class="car-image">🏎️</div>
    `;
    container.appendChild(section);
});
