var xMax;
var yMax;
var position;
var instructions;


function plateauDimensions() {
    var x = document.getElementById("xMax").value;
    var y = document.getElementById("yMax").value;
    document.getElementById("dimensions").textContent = "Plateau's dimensions: " + x + "x" + y;
    return { x: x, y: y };
}

document.getElementById('dimensions-button').addEventListener('click', function initializeMaxDimensions() {
    const dimensions = plateauDimensions();
    xMax = dimensions.x;
    yMax = dimensions.y;
    console.log("xmax, ymax", xMax, yMax);
})

function firstPosition() {
    var pos = document.getElementById("position").value;
    document.getElementById("firstPosition").textContent = "Rover's first position is " + pos;
    return pos;
}

document.getElementById("position").addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key !== 13) {
        return;
    }
    position = firstPosition();
    console.log(position);
});

function getInstructions() {
    const inst = document.getElementById("instructions").value;
    return inst;
}

function finalPosition() {
    var x = position[0]
    var y = position[1]
    x = Number.parseInt(x);
    y = Number.parseInt(y);

    var orientation = position[2]
    var horizons = "NESW"
    var h = horizons.indexOf(orientation);
    if (h === -1) {
        console.log("Starting orientation is not valid");
    }



    for (i = 0; i < (instructions.length); i++) {
        console.log(i, x, y, orientation);
        if (instructions[i] == "L") {
            h = h - 1;
            if (h < 0) {
                h = horizons.length - 1;
            }
            orientation = horizons[h];
            continue;
        }

        if (instructions[i] == "R") {
            h = h + 1;
            if (h > horizons.length - 1) {
                h = 0
            }
            orientation = horizons[h];
            continue;
        }

        const directions = {
            N: [0, 1],
            S: [0, -1],
            E: [1, 0],
            W: [-1, 0]
        }

        const [changeOnX, changeOnY] = directions[orientation]
        x += changeOnX;
        if (x > xMax) {
            x = 0;
        }
        if (x < 0) {
            x = xMax;
        }
        y += changeOnY;
        if (y > yMax) {
            y = 0;
        }
        if (y < 0) {
            y = yMax;
        }
    }
    
    return { x: x, y: y, orientation: orientation };
}


document.getElementById("instructions").addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key !== 13) {
        return;
    }
    instructions = getInstructions();
    console.log(instructions, instructions.length);
    const finalpos = finalPosition();
    console.log(finalpos);
    x = finalpos.x;
    y = finalpos.y;
    orientation = finalpos.orientation;
    document.getElementById("myPosition").textContent = "My position is " + x + y + orientation;
});