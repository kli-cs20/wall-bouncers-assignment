// RUN FUNCTIONS / PROGRAM

// Global Variables
let objects = [];


// Animation Loop
requestAnimationFrame(draw);

function draw() {
    background("black");

    // Move and Draw Wall Bouncers
    for (let i = 0; i < objects.length; i++) {
        moveObject(objects[i]);
        drawObject(objects[i]);
        checkCollisions(objects[i]);
    }

    requestAnimationFrame(draw);
}

setInterval(addObject, 3000);