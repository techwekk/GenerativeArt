
let y = []; //signal, could be audio etc
let fourierY;

let time = 0;
let wave = [];

var sound;
var amplitude;
var volhistory = [];

let r, g, b;

var rectRotate = true;
var rectMin = 15;
var rectOffset = 20;
var numRects = 10;

var beatHoldFrames = 30;
var beatThreshold = 0.11; 

var beatCutoff = 0;
var beatDecayRate = 0.98; // how fast does beat cutoff decay?
var framesSinceLastBeat = 0;

// function preload(){
//   sound = loadSound('Gettysburg.m4a');
// };

function setup() {
  createCanvas(1200, 800);

  let angle = 0;
   for (let i = 0; i < 100; i++) {
     y[i] = 100 * noise(angle) - 50;
     angle += TWO_PI / 100;
     //angle += 0.02;
   }
    fourierY = dft(y); // compute discrete Fourier transform of an arbitory signal
    console.log(fourierY);
    //fourierY.sort((a, b) => b.amp - a.amp);
    sound = loadSound('Gettysburg.m4a', loaded);
    slider = createSlider(0,1,0.5,0.01);
    //sound.play();
    amplitude = new p5.Amplitude();
  }                     

  function loaded() {
    sound.play();
  }

function draw() {
  background(0);
  translate(100,100);
  sound.setVolume(slider.value());
  var volume = amplitude.getLevel();
  volhistory.push(volume);
  var level = amplitude.getLevel();
  detectBeat(level);

  var distortDiam = map(level, 0, 1, 0, 1200);
  var w = rectMin;
  var h = rectMin;

  if (rectRotate) {
    var rotation = PI/ 2;
  } else {
    var rotation = PI/ 3;
  } //


  var rectCenter = createVector(width/3, height/2);

  push();

    // draw the rectangles
    for (var i = 0; i < numRects; i++) {
      var x2 = rectCenter.x + rectOffset * i;
      var y2 = rectCenter.y + distortDiam/2;
      // rotate around the center of this rectangle
      translate(x2, y2); 
      rotate(rotation);
      rect(0, 0, rectMin, rectMin + distortDiam);
    }
  pop();
  
  let y = 0;
  let x = 0;

  for (let i = 0; i < fourierY.length; i++) {
    let prevx = x;
    let prevy = y;

    //if (!fourierY[i].freq && !fourierY[i].amp === 0) {
    let frequence = fourierY[i].freq;
    let radius = fourierY[i].amp; // each element of the fourier
    let phase = fourierY[i].phase; //
    
    x += radius * cos(frequence * time + phase + HALF_PI); // time element that is moving forward, the angle
    y += radius * sin(frequence * time + phase + HALF_PI); // freq = 1, makes one unit full rotation of time
  
    r = random(255);
    g = random(255);
    b = random(255); 

    stroke(255,100); //one rotation
    noFill();
    ellipse(prevx, prevy, radius * 2);
    //}
    stroke(r, g, b);
    line(prevx,prevy,x,y);
    
  }
    wave.unshift(y);
    //wave.unshift(volhistory);

    translate(200, 0);
    line(x - 200, y, 0, wave[0]);
    beginShape();
    noFill();
    wave.unshift(volhistory);
    for (let i = 0; i < volhistory.length; i++) {
      let y = map(volhistory[i], 0, 1, height, 0)
      vertex(i,y);
 }
 for (let i = 0; i < wave.length; i++) {
  vertex(i,wave[i]);
}
 endShape();

 if(volhistory.length > 900) {
   volhistory.splice(0,1)
 }

const dt = TWO_PI / fourierY.length; //amount of time I move each animation / TWO_PI full cycle divided by freq value
time += dt;

if (wave.length > 250) {
  wave.pop();
}
}

function detectBeat(level) {
  if (level  > beatCutoff && level > beatThreshold){
    onBeat();
    beatCutoff = level *1.2;
    framesSinceLastBeat = 0;
  } else{
    if (framesSinceLastBeat <= beatHoldFrames){
      framesSinceLastBeat ++;
    }
    else{
      beatCutoff *= beatDecayRate;
      beatCutoff = Math.max(beatCutoff, beatThreshold);
    }
  }
}

function onBeat() {
  backgroundColor = color( random(0,255), random(0,255), random(0,255) );
  rectRotate = !rectRotate;
}
;
