// Preloader
const lights = document.querySelectorAll('.light');
let lIdx = 0;
const lInt = setInterval(() => {
    if(lIdx < 5) { lights[lIdx].classList.add('on'); lIdx++; }
    else { clearInterval(lInt); setTimeout(() => { document.getElementById('loader').style.opacity = '0'; setTimeout(() => document.getElementById('loader').remove(), 600); }, 800); }
}, 400);

// Cursor
const f = document.getElementById('cursor-follower'), d = document.getElementById('dot');
function moveCursor(e) { 
    f.style.left = e.clientX - 15 + 'px'; f.style.top = e.clientY - 15 + 'px';
    d.style.left = e.clientX + 'px'; d.style.top = e.clientY + 'px';
}

// History Themes
function setTheme(color) {
    const r = document.documentElement;
    if(color === 'red') r.style.setProperty('--bg', '#1a0505');
    else if(color === 'blue') r.style.setProperty('--bg', '#05051a');
    else if(color === 'gold') r.style.setProperty('--bg', '#1a1405');
    setTimeout(() => r.style.setProperty('--bg', '#030303'), 1500);
}

// Music
let p = false;
function toggleMusic() {
    const m = document.getElementById('audio-engine'), b = document.querySelector('.music-pill');
    if(!p) { m.src += "&autoplay=1"; b.innerText = "⏸ STOP EXPERIENCE"; p = true; }
}

// Radio Typewriter
function playRadio(pilot, text) {
    const disp = document.getElementById('radio-display');
    disp.innerText = "";
    disp.style.color = (pilot === 'TOTO' || pilot === 'LEWIS') ? '#00d2be' : '#0f0';
    let i = 0;
    const t = setInterval(() => {
        if(i < text.length) { disp.innerText += text.charAt(i); i++; }
        else clearInterval(t);
    }, 50);
}

// Scroll Reveal
const obs = new IntersectionObserver((es) => {
    es.forEach(e => { if(e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.1 });
document.querySelectorAll('.section-reveal').forEach(el => obs.observe(el));
