document.addEventListener('DOMContentLoaded', () => {
    // References to elements
    const okButton = document.getElementById('ok-btn');
    const content = document.getElementById('content');
    const muteButton = document.getElementById('mute-btn');
    const audioElement = document.getElementById('background-music');
    
    const toggleMute = () => {
        if (audioElement.muted) {
            audioElement.muted = false;
            muteButton.innerHTML = "🔊"; // Change to unmuted icon
        } else {
            audioElement.muted = true;
            muteButton.innerHTML = "🔇"; // Change to muted icon
        }
    };

    okButton.addEventListener('click', () => {
        okButton.style.display = 'none'; 
        content.style.display = 'block'; 

        audioElement.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
    });

    // Mute button functionality
    muteButton.addEventListener('click', toggleMute);

    // Ensure audio starts when ready
    audioElement.addEventListener('canplay', () => {
        if (audioElement.paused) {
            audioElement.play().catch((error) => {
                console.error('Error playing audio:', error);
            });
        }
    });
});
