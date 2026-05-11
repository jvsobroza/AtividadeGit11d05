const text = "TÓPICOS EM SISTEMAS PARA VERSIONAMENTO E GESTÃO DE DEPENDÊNCIAS - T20";

const title = document.getElementById("title");
const desc = document.getElementById("desc");

let i = 0;

function typeEffect() {
    if (i < text.length) {
        title.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    } else {
        title.style.borderRight = "none";
        desc.classList.add("show");
    }
}

window.onload = () => {
    setTimeout(() => {
        title.classList.add("show");
        typeEffect();
    }, 500);
};