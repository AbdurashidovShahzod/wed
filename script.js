window.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');
    
    // Try to play automatically
    audio.play().catch(function(error) {
        console.log("Autoplay failed:", error);
    });

    // Play on any user interaction
    function playAudio() {
        audio.play().catch(function(error) {
            console.log("Play failed:", error);
        });
        // Remove the event listeners once played
        document.removeEventListener('click', playAudio);
        document.removeEventListener('touchstart', playAudio);
    }

    document.addEventListener('click', playAudio);
    document.addEventListener('touchstart', playAudio);
});