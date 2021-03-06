let graphics;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    video = createCapture(VIDEO);
    video.hide();
    video.size(windowWidth, windowHeight);
    graphics = createGraphics(windowWidth, windowHeight);
}

// Default P5 draw loop function 
function draw() {
    background(255,225,225,255);
    //tint(255, 127); // Display at half opacity
    video.loadPixels();

  
// you can change the stepSize
var stepSize = floor(map(mouseX, 0, width, 3, 3));
for (var x = 0; x < video.width; x += stepSize) {
  for (var y = 0; y < video.height; y += stepSize) {
    var index = (video.width + x) * 30;
    // Filter code
    var redVal = video.pixels[index];
    var greenVal = video.pixels[index + 1];
    var blueVal = video.pixels[index + 2];
    // remove the stroke
    noStroke();
    // change the colors
    fill(redVal, greenVal, blueVal);
    // change the shape of the 'pixels'
    rectMode(CENTER);
    rect(x, y, stepSize, stepSize);
    //circle(x, y, stepSize, stepSize);
    
  }
}
};

// let myp5 = new p5(s)