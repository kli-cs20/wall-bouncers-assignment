// WALL BOUNCERS FUNCTIONS
const WIDTH = 50;

function newRandomObject() {
    return {
        x: randomInt(0, cnv.width - WIDTH),
        y: randomInt(0, cnv.height - WIDTH),
        w: WIDTH,
        h: WIDTH,
        speedX: randomInt(-5, 4),
        speedY: randomInt(-5, 4),
        color: randomRGB()
    };
}

function drawObject(object) {
    fill(object.color);
    rect(object.x, object.y, object.w, object.h, "fill");
}

function moveObject(object) {
    object.x += object.speedX;
    object.y += object.speedY;
}

function checkCollisions(object) {
    if (object.x <= 0 || object.x + object.w >= 600) {
        object.speedX *= -1;
    } else if (object.y <= 0 || object.y + object.h >= 600) {
        object.speedY *= -1;
    }
}

function addObject() {
    objects.push(newRandomObject());
}

function movePlayer() {
    if (player.direction === "up") {
        player.y -= 5;
    } else if (player.direction === "left") {
        player.x -= 5;
    } else if (player.direction === "down") {
        player.y += 5;
    } else if (player.direction === "right") {
        player.x += 5
    }
}
function drawPlayer() {
    fill(player.color);
    rect(player.x, player.y, player.w, player.h, "fill");
}

function checkPlayerCollisions() {
    // Basic Wall Boundaries
    if (player.x < 0) {
        player.x = 0;
    } else if (player.x + player.w > 600) {
        player.x = 600 - player.w;
    } else if (player.y < 0) {
        player.y = 0;
    } else if (player.y + player.h > 600) {
        player.y = 600 - player.h;
    }

    // Collision with the Wall Bouncers
    for (let i = 0; i < objects.length; i++) {
        if (rectCollide(player, objects[i])) {
            objects = [];
            player.w += 5;
            player.h += 5;
        }
    }
}
