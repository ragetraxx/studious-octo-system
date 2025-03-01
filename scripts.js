document.addEventListener("DOMContentLoaded", function() {
    fetch("fortunes.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load fortunes.json");
            }
            return response.json();
        })
        .then(data => {
            console.log("Fortunes loaded:", data);
            window.fortunes = data.fortunes;
        })
        .catch(error => {
            console.error("Error loading fortunes:", error);
            // Fallback fortunes in case the JSON file fails to load
            window.fortunes = [
                "Try again later!",
                "Your fortune is on its way!",
                "Patience is key."
            ];
        });
});

function crackCookie() {
    let cookie = document.getElementById("cookie");
    let fortuneText = document.getElementById("fortune");
    let sound = document.getElementById("crackSound");
    let newCookieBtn = document.getElementById("newCookie");

    if (!window.fortunes || window.fortunes.length === 0) {
        alert("Fortunes not loaded! Using default fortunes.");
        window.fortunes = [
            "Keep going, success is near!",
            "The answer is within you.",
            "Unexpected surprises await!"
        ];
    }

    // Change cookie image to cracked version
    cookie.src = "cracked.png";
    cookie.onclick = null; // Disable clicking again

    // Play crack sound
    sound.play();

    // Pick a random fortune and show it
    let randomFortune = window.fortunes[Math.floor(Math.random() * window.fortunes.length)];
    fortuneText.textContent = randomFortune;
    fortuneText.classList.remove("hidden");

    // Show the "Get a New Cookie" button
    newCookieBtn.classList.remove("hidden");
}

function resetGame() {
    let cookie = document.getElementById("cookie");
    let fortuneText = document.getElementById("fortune");
    let newCookieBtn = document.getElementById("newCookie");

    // Reset to original cookie image
    cookie.src = "cookie.png";
    cookie.onclick = crackCookie; // Re-enable clicking

    // Hide fortune text and button
    fortuneText.classList.add("hidden");
    newCookieBtn.classList.add("hidden");
}
