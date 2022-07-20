// RUN FUNCTIONS / PROGRAM

// Global Variables
let objects = [];
let player = {
    x: 300,
    y: 300,
    w: 25,
    h: 25,
    direction: "",
    color: "white"
}

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

    // Move and Draw Player
    movePlayer();
    drawPlayer();
    checkPlayerCollisions();

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
    } else if (e.keyCode === 87) {
        player.direction = "up";
    } else if (e.keyCode === 65) {
        player.direction = "left";
    } else if (e.keyCode === 83) {
        player.direction = "down";
    } else if (e.keyCode === 68) {
        player.direction = "right";
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
