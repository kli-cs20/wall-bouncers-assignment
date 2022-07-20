// WALL BOUNCERS FUNCTIONS
const WIDTH = 50;

function newRandomObject() {
    return {
        x: randomInt(0, cnv.width - WIDTH),
        y: randomInt(0, cnv.height - WIDTH),
        w: WIDTH,
        speedX: randomInt(-5, 4),
        speedY: randomInt(-5, 4),
        color: randomRGB()
    };
}

function drawObject(object) {
    fill(object.color);
    rect(object.x, object.y, object.w, object.w, "fill");
}

function moveObject(object) {
    object.x += object.speedX;
    object.y += object.speedY;
}

function checkCollisions(object) {
    if (object.x <= 0 || object.x + object.w >= 600) {
        object.speedX *= -1;
    } else if (object.y <= 0 || object.y + object.w >= 600) {
        object.speedY *= -1;
    }
}

function addObject() {
    objects.push(newRandomObject());
}

