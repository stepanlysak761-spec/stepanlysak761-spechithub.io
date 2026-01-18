function toggleInfo(card) {
    // Отримуємо назву дисципліни з заголовка
    const title = card.querySelector('.card-header').innerText;
    
    // Ефект "активної" картки
    card.style.borderColor = "#ff4d4d";
    
    alert("Ви обрали: " + title + "\nБільше інформації у відео Shifted та На Колесах!");
    
    // Скидаємо колір через 2 секунди
    setTimeout(() => {
        card.style.borderColor = "#444";
    }, 2000);
}

console.log("Модуль автоспорту завантажено. Обирайте свою гонку!");
