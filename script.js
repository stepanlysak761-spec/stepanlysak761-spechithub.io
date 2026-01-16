// 1. Lights Out Preloader
const lights = document.querySelectorAll('.light');
let lightCount = 0;
const lightInterval = setInterval(() => {
    if(lightCount < 5) {
        lights[lightCount].classList.add('on');
        lightCount++;
    } else {
        clearInterval(lightInterval);
        setTimeout(() => {
            document.getElementById('loader').style.opacity = '0';
            setTimeout(() => document.getElementById('loader').remove(), 600);
        }, 800);
    }
}, 500);

// 2. Custom Cursor Follower
const follower = document.getElementById('cursor-follower');
const dot = document.getElementById('dot');
function moveCursor(e) {
    follower.style.left = e.clientX - 15 + 'px';
    follower.style.top = e.clientY - 15 + 'px';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
}

// 3. Experience Toggle (Music)
let playing = false;
function toggleMusic() {
    const music = document.getElementById('audio-engine');
    const btn = document.querySelector('.music-pill');
    if(!playing) {
        music.src += "&autoplay=1";
        btn.innerText = "⏸ STOP EXPERIENCE";
        playing = true;
    }
}

// 4. Team Radio Simulator
function playRadio(pilot, text) {
    const display = document.getElementById('radio-display');
    display.innerText = "";
    display.style.color = (pilot === 'TOTO' || pilot === 'LEWIS') ? '#00d2be' : '#0f0';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            display.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 50);
}

// 5. Scroll Reveal Logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));