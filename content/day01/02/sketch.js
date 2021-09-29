// Based on the code P_2_0_03.pde from
// Generative Gestaltung, ISBN: 978-3-87439-759-9

// Global var
let p = false;
let fillColor, canvas;

function setup() {
    // Canvas setup
    canvas = createCanvas(windowWidth, windowHeight);

    // Detect screen density (retina)
    var density = displayDensity();
    pixelDensity(density);

    // Colors and drawing modes
    colorMode(HSL, 360, 100, 100, 100);
    background(360);
    fillColor = color(0, 10);
    smooth();
}

function draw() {

    smooth();
    noFill();

    switch (options.color) {
        case 1:
            fillColor = color(0, 50, 50, 10);
            break;
        case 2:
            fillColor = color(192, 100, 64, 10);
            break;
        case 3:
            fillColor = color(52, 100, 71, 10);
            break;
    }

    if (p) {

        push();

            translate(width / 2, height / 2);

            const circleResolution = toInt(map(mouseY + 100, 0, height, 2, 10));
            const radius = mouseX - width / 2 + 0.5;
            const angle = TWO_PI / circleResolution;

            strokeWeight(2);
            fill(fillColor);

            beginShape();

                for (i = 0; i <= circleResolution; i++) {
                    var x = 0 + cos(angle * i) * radius;
                    var y = 0 + sin(angle * i) * radius;
                    vertex(x, y);
                }

            endShape();

        pop();
    }
}

function mousePressed() {
    p = true;
}

function mouseReleased() {
    p = false;
}

function keyPressed() {

    // Clear sketch
    if (keyCode === 32) background(255); // 32 = SPACE BAR

    if (key == "s" || key == "S") saveThumb(650, 350);

    switch (key) {
        case "1":
            options.color = 1;
            break;
        case "2":
            options.color = 2;
            break;
        case "3":
            options.color = 3;
            break;
    }

}

// Tools

// resize canvas when the window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight, false);
}

// Int conversion
function toInt(value) {
    return ~~value;
}

// Timestamp
function timestamp() {
    return Date.now();
}

// Thumb
function saveThumb(w, h) {
    let img = get(width / 2 - w / 2, height / 2 - h / 2, w, h);
    save(img, "thumb.jpg");
}
