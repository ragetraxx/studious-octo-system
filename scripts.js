document.addEventListener("DOMContentLoaded", function () {
    const cookieImg = document.getElementById("cookie-img");
    const fortuneText = document.getElementById("fortune-text");
    const crackSound = document.getElementById("crack-sound");
    const newCookieBtn = document.getElementById("new-cookie-btn");

    let fortunes = [];
    let cookieCracked = false;

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
        if (!cookieCracked && fortunes.length > 0) {
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            fortuneText.textContent = fortunes[randomIndex];

            // Play sound
            crackSound.currentTime = 0;
            crackSound.play();

            // Change cookie image to cracked
            cookieImg.src = "cracked.png";
            cookieCracked = true;

            // Show "New Cookie" button
            newCookieBtn.style.display = "inline-block";
        } else if (fortunes.length === 0) {
            fortuneText.textContent = "Loading fortunes...";
        }
    });

    // Event listener for getting a new cookie
    newCookieBtn.addEventListener("click", function () {
        cookieImg.src = "cookie.png";
        fortuneText.textContent = "Click the cookie to reveal your fortune!";
        cookieCracked = false;
        newCookieBtn.style.display = "none";
    });
});
