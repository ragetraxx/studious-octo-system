document.addEventListener("DOMContentLoaded", function() {
    fetch("fortunes.json")
        .then(response => response.json())
        .then(data => {
            window.fortunes = data.fortunes;
        })
        .catch(error => console.error("Error loading fortunes:", error));
});

function crackCookie() {
    let cookie = document.querySelector(".cookie");
    let crack = document.querySelector(".crack");
    let fortuneText = document.getElementById("fortune");
    let sound = document.getElementById("crackSound");

    if (!window.fortunes || window.fortunes.length === 0) {
        alert("Fortunes not loaded! Check your fortunes.json file.");
        return;
    }

    // Hide cookie, show cracked cookie, play sound
    cookie.classList.add("hidden");
    crack.classList.remove("hidden");
    sound.play();

    // Pick a random fortune
    let randomFortune = window.fortunes[Math.floor(Math.random() * window.fortunes.length)];
    fortuneText.textContent = randomFortune;
    fortuneText.classList.remove("hidden");

    // Reset game after a delay
    setTimeout(() => {
        crack.classList.add("hidden");
        cookie.classList.remove("hidden");
        fortuneText.classList.add("hidden");
    }, 5000);
}
