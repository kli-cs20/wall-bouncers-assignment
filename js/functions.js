// WALL BOUNCERS FUNCTIONS

function newRandomObject() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        speedX: randomInt(-6, 5),
        speedY: randomInt(-6, 5),
        color: randomRGB()
    };
}

function drawObject(object) {
    fill(object.color);
    rect(object.x, object.y, 15, 15, "fill");
}

function moveObject(object) {
    object.x += object.speedX;
    object.y += object.speedY;

    checkCollisions();
}

function checkCollisions() {

}

function addObject() {
    objects.push(newRandomObject);
}

