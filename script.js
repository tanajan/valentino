const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const gifFrame = document.getElementById("gif-frame");

const messages = [
    "Are You Sure?",
    "Are you positive?",
    "Please reconsider it",
    "If you say No, I will be really sad.",
    "I will eat nothing for three days"
];

const gifs = [
    "https://giphy.com/embed/3ov9k0OmfNYeLdK4gg",
    "https://giphy.com/embed/xUPGGecxiqAvxUqd20",
    "https://giphy.com/embed/MCQWRoaxAtxrhdC9Al",
    "https://giphy.com/embed/i7vpymS7uRIIvPUUlq",
    "https://giphy.com/embed/3o7aCYnXnYF5T5sxlm",
    "https://giphy.com/embed/1ezBmYXT1ccSbh0fep"
];

let clickCount = 0;
let noButtonSize = 18; // Initial font size
let yesButtonSize = 20;

noButton.addEventListener("click", function () {

    if (clickCount == 0) {
        var video = document.getElementById("youtube-video");

        if (!video.src.includes("autoplay=1")) {

            if (video.src.indexOf("?") > -1) {
                video.src = video.src + "&autoplay=1";
            } else {
                video.src = video.src + "?autoplay=1";
            }
        }
    }
    if (clickCount < messages.length) {
        noButton.innerText = messages[clickCount];
        gifFrame.src = gifs[clickCount + 1];
    } else {
        yesButton.classList.add("expand");
        noButton.style.display = "none";
    }


    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    yesButtonSize += 15;
    yesButton.style.fontSize = yesButtonSize + "px";


    clickCount++;
});


yesButton.addEventListener("click", function () {
    window.location.href = "yes.html";
});


function toggleMute() {
    var video = document.getElementById('youtube-video');
    var muteButton = document.getElementById('mute-btn');

    if (video.src.includes("mute=0")) {
        video.src = video.src.replace("mute=0", "mute=1");
        muteButton.innerHTML = "🔇";
    } else if (video.src.includes("mute=1")) {
        video.src = video.src.replace("mute=1", "mute=0");
        muteButton.innerHTML = "🔊";
    }
}