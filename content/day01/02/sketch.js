let speed = 0
let radius = 10

function setup() {
  createCanvas(800, 800);
  drawCircle(10,250);
  background(300);
  color(10);
}

function draw(){
  drawCircle(10,250);
  
  ellipse(100, 25, 25, 25);                  // try 1
  ellipse(100, 105, 25, 25);                  
  circle(200,100,20);                         // try 2
  
  let sinA =+ sin(speed)*radius
  let cosA =+ cos(speed)*radius
  for (let i = 0; i<250; i++) {
  translate(width/4, height/4)
  
  circle(sinA, cosA, 100)
  
  speed+=1
  //radius +=1
  }
  
  {
        
    let sinA =+ sin(speed)*radius
    let cosA =+ cos(speed)*radius

    circle(sinA, cosA, 10)

    speed+=1
    radius +=1
  }
}

let angle = 0.2; // degree
let scalar = 400;

function drawCircle(a,b) {
  let x = map(cos(angle), -1, 0.1, 100, b);  // oval
  let y = map(sin(angle), -1,1, 100, b);     // oval
  
  let z = map(cos(angle), -1, 1, 2, b);      // normal circle
  let u = map(sin(angle), -1,1, 2, b);       // normal circle  
  
  point(x, y);                               // draws each point x,y
  point(z, u);                               // draws each point z,u
  
  interval = 1;
    
  let c = color + cos(angle) * scalar;       // RGB + cos(1) * (20*0.5)    
  let d = color + sin(angle) * scalar;       // RGB + sin(1) * (20*0.5)    
  
  // let w = map(sin(angle), 0.5, 20, 20, b) ;   // normal circle * c
  let w = (c, d, 200, 20);                   // c, d values for x,y 
  
  scalar += interval;
  angle += interval;                                // thickness of lines/points arranged
  
  print(c);
  print(w);
  
  point(w, u);
}