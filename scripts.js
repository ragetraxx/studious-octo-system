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
    let newCookieBtn = document.getElementById("newCookie");

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
    
    // Show fortune text after a slight delay for effect
    setTimeout(() => {
        fortuneText.textContent = randomFortune;
        fortuneText.classList.remove("hidden");
        newCookieBtn.classList.remove("hidden"); // Show the button to get a new cookie
    }, 500);
}

function resetGame() {
    let cookie = document.querySelector(".cookie");
    let crack = document.querySelector(".crack");
    let fortuneText = document.getElementById("fortune");
    let newCookieBtn = document.getElementById("newCookie");

    // Hide elements and reset the game
    crack.classList.add("hidden");
    fortuneText.classList.add("hidden");
    newCookieBtn.classList.add("hidden");
    cookie.classList.remove("hidden");
}
