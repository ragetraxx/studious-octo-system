let fortunes = [];

// Load fortunes from fortunes.json
fetch("fortunes.json")
    .then(response => response.json())
    .then(data => {
        fortunes = data.fortunes;
    })
    .catch(error => console.error("Error loading fortunes:", error));

function generateFortune() {
    if (fortunes.length === 0) {
        console.warn("Fortunes not loaded yet!");
        return;
    }

    const fortuneText = document.getElementById("fortune-text");
    const cookieImg = document.getElementById("cookie-img");
    const crackSound = document.getElementById("crack-sound");

    // Play cracking sound
    crackSound.play();

    // Change the cookie image to "cracked"
    cookieImg.src = "https://i.imgur.com/UQaUq8b.png";
    cookieImg.classList.add("cracked");

    // Delay before showing the fortune
    setTimeout(() => {
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        fortuneText.textContent = randomFortune;
        fortuneText.style.opacity = 1;
    }, 1000);
}