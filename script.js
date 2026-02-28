// Typing Animation
const text = "Hi, I'm Pijush Hazra";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = typeEffect;

// Open Project Function
function openProject(url) {
    window.open(url, "_blank");
}
