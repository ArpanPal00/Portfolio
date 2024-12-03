const roles = ["Student", "FrontEnd Developer", "Designer"];
let roleIndex = 0;

function updateText() {
    const animatedText = document.getElementById("animated-text");
    animatedText.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}

setInterval(updateText, 2000);  // Change text every 2 seconds
