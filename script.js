// Preloader: Lights Out
const lights = document.querySelectorAll('.light');
let lightIdx = 0;
const startLights = setInterval(() => {
    if(lightIdx < 5) {
        lights[lightIdx].classList.add('on');
        lightIdx++;
    } else {
        clearInterval(startLights);
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if(loader) {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 800);
            }
        }, 1000);
    }
}, 400);

// Radio Simulation
function playRadio(pilot, text) {
    const display = document.getElementById('radio-display');
    display.innerText = "";
    // Mercedes teal or Red Bull green
    display.style.color = (pilot === 'TOTO') ? '#00d2be' : '#00ff41';
    
    let i = 0;
    const typeWriter = setInterval(() => {
        if(i < text.length) {
            display.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 50);
}

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.section-reveal').forEach(el => revealObserver.observe(el));

// Audio Toggle
let audioPlaying = false;
function toggleMusic() {
    const music = document.getElementById('audio-engine');
    const btn = document.querySelector('.music-pill');
    if(!audioPlaying) {
        music.src += "&autoplay=1";
        btn.innerText = "⏸ STOP ATMOSPHERE";
        audioPlaying = true;
    }
}
