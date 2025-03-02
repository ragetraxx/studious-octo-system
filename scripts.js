// Global variable for fortunes
let fortunes = [];

// Load sound effect
let crackSound = new Audio('boink.mp3');

// Load fortunes from JSON when the page loads
document.addEventListener("DOMContentLoaded", function () {
    fetch('fortunes.json')
        .then(response => response.json())
        .then(data => {
            fortunes = data.fortunes;
        })
        .catch(error => console.error('Error loading fortunes:', error));

    // Attach event listeners
    document.getElementById("cookie").addEventListener("click", crackCookie);
    document.getElementById("newCookie").addEventListener("click", resetGame);
});

// Function to display a random fortune
function crackCookie() {
    if (fortunes.length === 0) {
        alert("Fortunes are still loading. Please wait.");
        return;
    }

    // Play crack sound
    crackSound.play();

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let fortuneText = fortunes[randomIndex];

    document.getElementById("fortune").innerText = fortuneText;
    document.getElementById("fortune").classList.remove("hidden");
    document.getElementById("cookie").classList.add("hidden");
    document.getElementById("newCookie").classList.remove("hidden");
}

// Function to reset the game
function resetGame() {
    document.getElementById("fortune").classList.add("hidden");
    document.getElementById("cookie").classList.remove("hidden");
    document.getElementById("newCookie").classList.add("hidden");
}
