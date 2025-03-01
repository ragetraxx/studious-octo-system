document.addEventListener("DOMContentLoaded", function() {
    fetch("fortunes.json")
        .then(response => response.json())
        .then(data => window.fortunes = data.fortunes);
});

function crackCookie() {
    let cookie = document.querySelector(".cookie");
    let crack = document.querySelector(".crack");
    let fortuneText = document.getElementById("fortune");
    let sound = document.getElementById("crackSound");

    cookie.classList.add("hidden");
    crack.classList.remove("hidden");
    sound.play();

    let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneText.textContent = randomFortune;
    fortuneText.classList.remove("hidden");
}
