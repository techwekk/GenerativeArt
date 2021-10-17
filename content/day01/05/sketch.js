let headWidth;
let eyeY;
let mouthX;
let noseX;
let noseY;

let bg = 100;
let shapeKind = 0;

function setup() {
  createCanvas(400, 400);
  eyeY = random();
  noStroke();
  
  random1();
}

function draw() {

  background(255);

  r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100);
  
  //head shape
  fill(r, g, b);
  ellipse(200, 200, headWidth, 300);

  //eye sockets
    let c = color(255);
  fill(c);
  ellipse(150, 100, 50, 50);
  ellipse(250, eyeY, 50, 20);

  //eyeballs
  let c1 = color('rgb(0,0,255)');
  fill(c1);
  ellipse(150, eyeY, 20, 5);
  ellipse(250, eyeY, 20, 15);

  mouth();
}

function random1() {
  eyeY = random(80, 120);
  noseX = random(175, 225);
  noseY = random(200, 250);
  headWidth = random(200, 300);
  mouthX = random(150, 250);
}

function mouth() {
  
    if (shapeKind == 0) {
    ellipse(mouseX, mouseY, 100, 100);
  }
  else if (shapeKind == 1) {
    rect(mouseX, mouseY, 100, 100);
  }
  else {
    triangle(mouseX, mouseY, mouseX+100, mouseY+100,
             mouseX-100, mouseY+100);
  }
  fill(200, 0, 0);
  ellipse(mouthX, 300, 80, 30);
}

function mousePressed() {

 random1();
  
  shapeKind = int(random(3));
  mouth();

}