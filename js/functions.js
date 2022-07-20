// WALL BOUNCERS FUNCTIONS

function newObject(initX, initY, initSpeed, initColor) {
    return {
        x: initX,
        y: initY,
        speed: initSpeed,
        color: initColor
    };
}

function newRandomObject() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        speed: randomDec(1, 6),
        color: randomRGB()
    };
}