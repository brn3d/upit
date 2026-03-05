const splashScreen = document.getElementById('splash_screen');
const mainContent = document.getElementById('main_content');
const passwordInput = document.getElementById('password_input');
const enterBtn = document.getElementById('enter_btn');
const backgroundMusic = document.getElementById('background_music');

splashScreen.style.display = 'flex';

enterBtn.addEventListener('click', () => {
    const password = passwordInput.value;
    
    if (password === 'upit') {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'flex';
        
        backgroundMusic.src = 'songs/raq.mp3';
        backgroundMusic.play().catch(err => console.log('Audio play failed:', err));
    } else {
        passwordInput.value = '';
        passwordInput.placeholder = 'wrong password';
        setTimeout(() => {
            passwordInput.placeholder = 'password';
        }, 1500);
    }
});

passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        enterBtn.click();
    }
});

const volumeSlider = document.getElementById('volume_slider');
const speakerIcon = document.getElementById('speaker_icon');

volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    backgroundMusic.volume = volume;
    
    const soundWaves = speakerIcon.querySelectorAll('.sound_wave');
    if (volume === 0) {
        soundWaves.forEach(wave => wave.style.display = 'none');
    } else if (volume < 0.5) {
        soundWaves[0].style.display = 'block';
        soundWaves[1].style.display = 'none';
    } else {
        soundWaves.forEach(wave => wave.style.display = 'block');
    }
});

speakerIcon.addEventListener('click', () => {
    const soundWaves = speakerIcon.querySelectorAll('.sound_wave');
    if (backgroundMusic.volume > 0) {
        backgroundMusic.volume = 0;
        volumeSlider.value = 0;
        soundWaves.forEach(wave => wave.style.display = 'none');
    } else {
        backgroundMusic.volume = 1;
        volumeSlider.value = 100;
        soundWaves.forEach(wave => wave.style.display = 'block');
    }
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

document.addEventListener('selectstart', (e) => {
    e.preventDefault();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'F12') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
    }
});

document.addEventListener('dragstart', (e) => {
    e.preventDefault();
});
