// Preloader Calibration
const lights = document.querySelectorAll('.light');
let lightIdx = 0;
const interval = setInterval(() => {
    if(lightIdx < 5) {
        lights[lightIdx].classList.add('on');
        lightIdx++;
    } else {
        clearInterval(interval);
        setTimeout(() => {
            const loader = document.getElementById('loader');
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 600);
        }, 1000);
    }
}, 400);

// Smooth Cursor
const follower = document.getElementById('cursor-follower'), dot = document.getElementById('dot');
function moveCursor(e) {
    follower.style.left = e.clientX - 15 + 'px';
    follower.style.top = e.clientY - 15 + 'px';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
}

// Background Theme Shifts
function setTheme(color) {
    const root = document.documentElement;
    const colors = { red: '#1a0505', blue: '#05051a', gold: '#1a1405' };
    root.style.setProperty('--bg', colors[color]);
    setTimeout(() => root.style.setProperty('--bg', '#030303'), 1500);
}

// Team Radio Logic
function playRadio(pilot, text) {
    const display = document.getElementById('radio-display');
    display.innerText = "";
    display.style.color = (pilot === 'TOTO') ? '#00d2be' : '#0f0';
    let i = 0;
    const type = setInterval(() => {
        if(i < text.length) { display.innerText += text.charAt(i); i++; }
        else clearInterval(type);
    }, 50);
}

// Intersection Observer for Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));

// Audio Toggle
let isPlaying = false;
function toggleMusic() {
    const music = document.getElementById('audio-engine'), btn = document.querySelector('.music-pill');
    if(!isPlaying) { music.src += "&autoplay=1"; btn.innerText = "⏸ STOP ATMOSPHERE"; isPlaying = true; }
}
