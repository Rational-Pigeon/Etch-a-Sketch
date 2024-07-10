const container = document.querySelector(".container");
const title = document.querySelector(".title");

function changeBackgroundColor(event) {
    if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = '#635c84';
    }
}

// a fun twist in the title. the letters change color upon hover
function changeFontColor(event) {
    if (event.target.classList.contains('texel')) {
        event.target.style.color = '#635c84';
    }
}
title.addEventListener("mouseenter", changeFontColor, true)

// event listener for changing color of pixels
container.addEventListener("mouseenter", changeBackgroundColor, true);

for (let i = 0; i < 16 * 16; i++) {
    const newSquare = document.createElement('div');
    newSquare.classList.add("pixel");
    newSquare.addEventListener("mouseenter", changeBackgroundColor);
    container.appendChild(newSquare);
}
