document.addEventListener("DOMContentLoaded", function () {
    const cookieImg = document.getElementById("cookie-img");
    const fortuneText = document.getElementById("fortune-text");
    const crackSound = document.getElementById("crack-sound");
    const newCookieBtn = document.getElementById("new-cookie-btn");

    let fortunes = [];
    let cookieCracked = false;

    // Load fortunes from JSON file with enhanced error handling
    function loadFortunes() {
        fetch("fortunes.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                fortunes = data.fortunes;
                console.log("Fortunes loaded successfully:", fortunes);
            })
            .catch(error => {
                console.error("Error loading fortunes:", error);
                fortuneText.textContent = "Failed to load fortunes. Please refresh the page.";
            });
    }

    // Ensure fortunes are loaded before first click
    loadFortunes();

    // Event listener for clicking the cookie
    cookieImg.addEventListener("click", function () {
        if (!cookieCracked && fortunes.length > 0) {
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            fortuneText.textContent = fortunes[randomIndex];

            // Play cracking sound
            crackSound.currentTime = 0;
            crackSound.play();

            // Change cookie image to cracked
            cookieImg.src = "cracked.png";
            cookieCracked = true;

            // Show "New Cookie" button
            newCookieBtn.style.display = "inline-block";
        } else if (fortunes.length === 0) {
            fortuneText.textContent = "Fortunes are still loading...";
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
