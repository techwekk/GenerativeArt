// Default P5 setup function
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    video = createCapture(VIDEO);
    video.hide();
}

// Default P5 draw loop function 
function draw() {
    image(video, 0, 0, width, height);
}
