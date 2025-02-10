const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const gifFrame = document.getElementById("gif-frame");

const messages = [
    "Are You Sure?",
    "Are you positive?",
    "Please reconsider it 😬",
    "If you say No, I will be really sad 🫥",

    "😿 ถ้ายังไม่กด Yes อีก ฉันจะเศร้าจริงๆนะ 😿",
    "😾 จะไม่สนใจเลยหรอที่ฉันเศร้า 😾",
    "โอ้ย ยังจะกดต่ออีก 😢 😢 😢",
    "ขอล้องงงง กด Yes เถอะ 😤",

    "ถ้ากดอีก จะบังคับแล้วนะ 🤬"
];

const gifs = [
    "https://giphy.com/embed/3ov9k0OmfNYeLdK4gg",
    "https://giphy.com/embed/xUPGGecxiqAvxUqd20",
    "https://giphy.com/embed/MCQWRoaxAtxrhdC9Al",
    "https://giphy.com/embed/i7vpymS7uRIIvPUUlq",

    "https://giphy.com/embed/W4zO9PSNXYMiYefZ4T",
    "https://giphy.com/embed/JsVlBMEaHdOEGQKLXB",
    "https://giphy.com/embed/JT0yvAUNFCwbTTkfVk",
    "https://giphy.com/embed/gfsQffBnuc6e096brx",

    "https://giphy.com/embed/11tTNkNy1SdXGg",
    "https://giphy.com/embed/FHsP8drdRJheEr2qYN"
];

let clickCount = 0;
let noButtonSize = 18;
let yesButtonSize = 20;
let audioStarted = false;

noButton.addEventListener("click", function () {

    if (!audioStarted) {
        audioElement.play().then(() => {
            console.log('Audio started');
            audioStarted = true;
        }).catch((error) => {
            console.error('Error playing audio:', error);
        });
    }

    // Update button text and GIF based on the click count
    if (clickCount < messages.length) {
        noButton.innerText = messages[clickCount];
        gifFrame.src = gifs[clickCount + 1];
    } else {
        yesButton.classList.add("expand");
        noButton.style.display = "none";
    }

    // Randomize position of the "No" button
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Increase the size of the "Yes" button
    yesButtonSize += 15;
    yesButton.style.fontSize = yesButtonSize + "px";

    clickCount++;
});

// Add event listener for the "yes" button to navigate to the "yes.html" page
yesButton.addEventListener("click", function () {
    window.location.href = "../yes/yes.html";
});

// Mute button functionality
const muteButton = document.getElementById("mute-btn");
const audioElement = document.getElementById("background-music");

// Event listener for the mute button
muteButton.addEventListener("click", () => {
    if (audioElement.muted) {
        audioElement.muted = false;
        muteButton.innerHTML = "🔊";
    } else {
        audioElement.muted = true;
        muteButton.innerHTML = "🔇";
    }
});

audioElement.addEventListener('canplay', () => {
    if (audioStarted) {
        audioElement.play();
    }
});

if (window.location.pathname === '/yes.html') {
    document.addEventListener('DOMContentLoaded', () => {
        const okButton = document.getElementById('ok-btn');
        const content = document.getElementById('content');

        okButton.style.position = 'fixed';
        okButton.style.top = '0';
        okButton.style.left = '0';
        okButton.style.width = '100vw';
        okButton.style.height = '100vh';

        okButton.addEventListener('click', () => {
            console.log("Help")
            okButton.style.display = 'none'; 
            content.style.display = 'block';
        });
    });
}