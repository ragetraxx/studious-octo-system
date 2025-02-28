document.addEventListener("DOMContentLoaded", function () {
    const cookieImg = document.getElementById("cookie-img");
    const fortuneText = document.getElementById("fortune-text");
    const crackSound = document.getElementById("crack-sound");

    let fortunes = [];

    // Load fortunes.json
    fetch("fortunes.json")
        .then(response => response.json())
        .then(data => {
            fortunes = data.fortunes;
            console.log("Fortunes loaded:", fortunes);
        })
        .catch(error => console.error("Error loading fortunes:", error));

    // Event listener for clicking the cookie
    cookieImg.addEventListener("click", function () {
        if (fortunes.length > 0) {
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            fortuneText.textContent = fortunes[randomIndex];

            // Play sound
            crackSound.currentTime = 0;
            crackSound.play();

            // Change cookie image (if cracked version exists)
            cookieImg.src = "cracked.png";
            setTimeout(() => {
                cookieImg.src = "cookie.png"; // Reset image
            }, 2000);
        } else {
            fortuneText.textContent = "Loading fortunes...";
        }
    });
});
