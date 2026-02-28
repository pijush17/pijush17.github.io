// Typing Animation
const text = "Hi, I'm Pijush Hazra";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;

// Open project on click
function openProject(url) {
    window.open(url, "_blank");
}
