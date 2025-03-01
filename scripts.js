let fortunes = [];

// Load fortunes from JSON file
fetch('fortunes.json')
    .then(response => response.json())
    .then(data => {
        fortunes = data.fortunes;
    })
    .catch(error => console.error('Error loading fortunes:', error));

function crackCookie() {
    if (fortunes.length === 0) {
        alert("Fortunes are still loading. Please wait.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let fortuneText = fortunes[randomIndex];

    document.getElementById("fortune").innerText = fortuneText;
    document.getElementById("fortune").classList.remove("hidden");
    document.getElementById("cookie").classList.add("hidden");
    document.getElementById("newCookie").classList.remove("hidden");
}

function resetGame() {
    document.getElementById("fortune").classList.add("hidden");
    document.getElementById("cookie").classList.remove("hidden");
    document.getElementById("newCookie").classList.add("hidden");
}
