const container = document.querySelector(".container");
const title = document.querySelector(".title");
const resizeBtn = document.querySelector(".resize-btn")

function changeBackgroundColor(event) {
    if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = '#635c84';
    }
}


// to create new canvas based on user input
function newCanvas(dimension) {
    container.innerHTML = "";
    const pixelSize = 600 / dimension;
    for (let i = 0; i < dimension * dimension; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add("pixel");
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        container.appendChild(pixel);
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

newCanvas(16);

resizeBtn.addEventListener("click", () => {
    let dimension = prompt("Enter new grid size: (4-100)");
    if (4 <= +dimension && +dimension <= 100) {
        newCanvas(dimension);
    }
    else {
        alert("Invalid dimensions. Please enter a number between 4 and 100.")
    }
})
