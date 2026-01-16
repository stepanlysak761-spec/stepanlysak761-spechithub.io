document.addEventListener('DOMContentLoaded', () => {
    // 1. Ефект друку тексту
    const textElement = document.getElementById('typing-text');
    const fullText = textElement.innerHTML;
    textElement.innerHTML = '';
    let index = 0;

    function type() {
        if (index < fullText.length) {
            textElement.innerHTML += fullText.charAt(index);
            index++;
            setTimeout(type, 15);
        }
    }
    setTimeout(type, 800);

    // 2. Зміна кольору акценту
    const switcher = document.getElementById('color-switcher');
    const colors = ['#ff0000', '#ffd700', '#00d4ff', '#ffffff'];
    let cIndex = 0;

    switcher.addEventListener('click', () => {
        cIndex = (cIndex + 1) % colors.length;
        document.documentElement.style.setProperty('--accent-color', colors[cIndex]);
    });

    // 3. Анімація появи елементів при скролі
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.specs-card, .info-card, .timeline-item, .video-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
