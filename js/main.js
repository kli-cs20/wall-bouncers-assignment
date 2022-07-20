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
document.addEventListener("mousemove", mousemoveHandler)
document.addEventListener("mousedown", mousedownHandler)

function keydownHandler(e) {
    if (e.keyCode === 40) {
        objects.pop()
    }
}

// Mouse Varibles
let mouseX, mouseY;
function mousemoveHandler(e) {
    // Update mouseX and mouseY
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = e.x - cnvRect.x;
    mouseY = e.y - cnvRect.y;
}

function mousedownHandler() {
    for (let i = 0; i < objects.length; i++) {
        if (ptInSquare(mouseX, mouseY, objects[i])) {
            objects[i].speedX *= -1;
        }
    }
}
