let fortunes = [];

// Load fortunes from fortunes.json
fetch("fortunes.json")
    .then(response => response.json())
    .then(data => {
        fortunes = data.fortunes;
    })
    .catch(error => console.error("Error loading fortunes:", error));

function crackCookie() {
    if (fortunes.length === 0) {
        console.warn("Fortunes not loaded yet!");
        return;
    }

    const cookieImg = document.getElementById("cookie-img");
    const fortuneText = document.getElementById("fortune-text");
    const crackSound = document.getElementById("crack-sound");
    const resetBtn = document.getElementById("reset-btn");

    // Play cracking sound
    crackSound.play();

    // Change cookie image to cracked version
    cookieImg.src = "cracked.png";
    cookieImg.classList.add("cracked");

    // Disable clicking to prevent multiple activations
    cookieImg.onclick = null;

    // Display random fortune with a delay
    setTimeout(() => {
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        fortuneText.textContent = randomFortune;
        fortuneText.style.opacity = 1;
        resetBtn.style.display = "block"; // Show reset button
    }, 1000);
}

function resetCookie() {
    const cookieImg = document.getElementById("cookie-img");
    const fortuneText = document.getElementById("fortune-text");
    const resetBtn = document.getElementById("reset-btn");

    // Reset cookie image and re-enable clicking
    cookieImg.src = "cookie.png";
    cookieImg.classList.remove("cracked");
    cookieImg.onclick = crackCookie;

    // Hide fortune text and reset button
    fortuneText.textContent = "Click the cookie to reveal your fortune!";
    fortuneText.style.opacity = 0;
    resetBtn.style.display = "none";
}
