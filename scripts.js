document.addEventListener("DOMContentLoaded", function () {
    let fortunes = [];

    // Load fortunes.json
    fetch("fortunes.json")
        .then(response => response.json())
        .then(data => {
            fortunes = data.fortunes;
            console.log("Fortunes Loaded:", fortunes); // Debugging
        })
        .catch(error => console.error("Error loading fortunes:", error));

    const cookieImg = document.getElementById("cookie-img");
    const fortuneText = document.getElementById("fortune-text");
    const crackSound = document.getElementById("crack-sound");
    const resetBtn = document.getElementById("reset-btn");

    function crackCookie() {
        if (fortunes.length === 0) {
            console.warn("Fortunes not loaded yet!");
            return;
        }

        // Play crack sound
        crackSound.play();

        // Change cookie to cracked image
        cookieImg.src = "cracked.png";
        cookieImg.classList.add("cracked");
        cookieImg.onclick = null; // Disable further clicks

        // Display fortune after delay
        setTimeout(() => {
            const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
            fortuneText.textContent = randomFortune;
            fortuneText.style.opacity = 1;
            resetBtn.style.display = "block";
        }, 1000);
    }

    function resetCookie() {
        cookieImg.src = "cookie.png";
        cookieImg.classList.remove("cracked");
        cookieImg.onclick = crackCookie; // Re-enable clicking

        fortuneText.textContent = "Click the cookie to reveal your fortune!";
        fortuneText.style.opacity = 0;
        resetBtn.style.display = "none";
    }

    // Attach event listeners
    cookieImg.onclick = crackCookie;
    resetBtn.onclick = resetCookie;
});
