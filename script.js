// Preloader Logic
const lights = document.querySelectorAll('.light');
let currentLight = 0;
const loaderInterval = setInterval(() => {
    if(currentLight < lights.length) {
        lights[currentLight].classList.add('on');
        currentLight++;
    } else {
        clearInterval(loaderInterval);
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if(loader) {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 600);
            }
        }, 800);
    }
}, 300);

// Radio Simulation
function playRadio(pilot, text) {
    const display = document.getElementById('radio-display');
    display.innerText = "";
    display.style.color = (pilot === 'TOTO') ? '#00d2be' : '#00ff41';
    let i = 0;
    const typing = setInterval(() => {
        if(i < text.length) {
            display.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 50);
}

// Reveal on Scroll
const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.section-reveal').forEach(el => obs.observe(el));

// Atmosphere Audio
let playing = false;

function toggleMusic() {
    const music = document.getElementById('audio-engine');
    const btn = document.querySelector('.music-pill');
    
    // Отримуємо доступ до вікна iframe
    const player = music.contentWindow;

    if (!playing) {
        // Якщо це перший запуск — додаємо autoplay
        if (!music.src.includes("autoplay=1")) {
            music.src += "&autoplay=1";
        } else {
            // Якщо вже було запущено — кажемо YouTube "грай"
            player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
        btn.innerText = "⏸ STOP AUDIO";
        playing = true;
    } else {
        // Відправляємо команду "пауза" у YouTube
        player.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        btn.innerText = "🎵 START AUDIO";
        playing = false;
    }
}
    }
}

