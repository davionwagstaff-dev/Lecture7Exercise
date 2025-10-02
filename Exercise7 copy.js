function createMulti() {
    let input = Number(window.prompt("Select a number"))
    for(let i=1; i<=10; i++) {
        let item = document.createElement("li")
        item.innerHTML = `${input} * ${i} = ${input * i}`
        document.getElementById("ul").appendChild(item)
    }
}
let originalColors = []; // Store initial random colors

// Generate a random hex color
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Initialize buttons with random colors
window.onload = function () {
    const buttons = document.querySelectorAll(".btnHolder button");
    buttons.forEach((btn, index) => {
        const color = getRandomColor();
        originalColors[index] = color; // Save it
        btn.style.backgroundColor = color;
    });
};

function randomize() {
    const color = document.getElementById("colorSelect").value;
    const buttons = document.querySelectorAll(".btnHolder button");

    buttons.forEach((btn, index) => {
        if (color === "reset") {
            btn.style.backgroundColor = originalColors[index]; // revert to original random
        } 
        else if (color === "random") {
            btn.style.backgroundColor = getRandomColor(); // new random each time
        } 
        else {
            btn.style.backgroundColor = color; // red/green/blue
        }
    });
}