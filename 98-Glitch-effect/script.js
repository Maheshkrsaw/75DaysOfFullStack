// Simple System Ready Message
console.log("%c SYSTEM READY ", "background: #000; color: #00f0ff; font-size: 20px;");

// Random Logo Glitch Effect
const logo = document.querySelector('.logo');

setInterval(() => {
    // 10% chance to glitch every 500ms
    if(Math.random() > 0.9) {
        logo.style.textShadow = '2px 0 red, -2px 0 blue';
        setTimeout(() => {
            logo.style.textShadow = 'none';
        }, 100);
    }
}, 500);