document.addEventListener('DOMContentLoaded', () => {
    // 1. Друк тексту
    const text = "Ferrari 499P — це вершина інженерії Hypercar. Повернення Ferrari до Ле-Ману після 50 років призвело до трьох послідовних перемог у 2023, 2024 та 2025 роках.";
    const output = document.getElementById('typewriter-output');
    let i = 0;

    function type() {
        if (i < text.length) {
            output.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }

    // 2. Скрол-анімація
    const reveal = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) el.classList.add('active');
        });
    };

    // 3. Зміна кольору (MODE)
    const btn = document.getElementById('mode-trigger');
    let mode = 0;
    btn.addEventListener('click', () => {
        mode = (mode + 1) % 2;
        document.documentElement.style.setProperty('--accent', mode === 0 ? '#ff0000' : '#ffd700');
    });

    window.addEventListener('scroll', reveal);
    type();
    reveal();
});
