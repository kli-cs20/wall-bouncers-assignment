// RUN FUNCTIONS / PROGRAM

// Global Variables
let objects = [];

// Animation Loop
requestAnimationFrame(draw);

function draw() {
    // Redraw Empty Canvas
    background("black");

    // Move and Draw Wall Bouncers
    for (let i = 0; i < objects.length; i++) {
        moveObject(objects[i]);
        drawObject(objects[i]);
        checkCollisions(objects[i]);
    }

    console.log(objects.length)

    requestAnimationFrame(draw);
}

setInterval(addObject, 3000);

// EVENTS
document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
    if (e.keyCode === 40) {
        objects.pop()
    }
}

