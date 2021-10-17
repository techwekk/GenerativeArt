let running = true;

function setup() {
    createCanvas(500, 500);
  
}

function draw() {

  if (running) {
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let c = random(255);
            set(i, j, c);
        }
    }
    updatePixels();
  }
}

function mousePressed() {
  running = !running // flip the boolean
}

function mouseDragged() {
  r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  
  fill(r, g, b);
  rect(mouseX, mouseY, 5, 5);
}