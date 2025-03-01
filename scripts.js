document.addEventListener("DOMContentLoaded", function() {
    fetch("fortunes.json")
        .then(response => response.json())
        .then(data => {
            window.fortunes = data.fortunes;
        })
        .catch(error => console.error("Error loading fortunes:", error));
});

function crackCookie() {
    let cookie = document.getElementById("cookie");
    let fortuneText = document.getElementById("fortune");
    let sound = document.getElementById("crackSound");
    let newCookieBtn = document.getElementById("newCookie");

    if (!window.fortunes || window.fortunes.length === 0) {
        alert("Fortunes not loaded! Check your fortunes.json file.");
        return;
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
