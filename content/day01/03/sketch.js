var layer = 1;
var minute = 10;
var second = 1;

function setup() {
    createCanvas(1000,1000,WEBGL);
    angleMode(DEGREES);
    // setTimeout(above, 1000);    
    frameRate(60);
    rectMode(CENTER);
}

function minToXY(min, r) {
    const deg = 90 - min * 6
    return {
      x: cos(deg) * r,
      y: -sin(deg) * r
    }
}

function draw(){
    background(0);
    
    rotateX(50);

    stroke(255);
    noFill();

    const now = new Date();
    const m = now.getMinutes();

    let h = hour();

    
    //let minutes = map(minute()+norm(second(),0,60),0,60,0,TWO_PI) - HALF_PI;
    //let hours = map(hour()+norm(minute(),0,60),0,24,0,TWO_PI * 2) - HALF_PI;
    
    if (frameCount % 60 === 0) {
        layer++;
     } else if (layer > 10) {
         layer--;
     }


    for (var i = 0; i < layer; i++) {


        var colour = map(cos(frameCount), -1, 0, 255, 0);

        stroke(colour, 1, 100, 0.5);
        strokeWeight(4);

        beginShape()
        for (var j = 0; j <frameCount; j += 5) {
            var rad = i * 90;
            var x = rad * cos(j); // radius * cos(j) for example 90
            var y = rad * sin(j) // radius * sin()
            var z = sin(frameCount + i * 100) * 100;

            vertex(x, y, z);
        }
        endShape(CLOSE);
    }
    drawMin(m);
    
    rect(width/2, height/2, h*5)
        //above();
    // lastLayer();
    stroke(10, 20, 10);
    // if (frameCount === 100) {
  //rotateX(frameCount * 0.1);
  //rotateY(frameCount * 0.1);
  rotateX(map(m*60, 0, 3600, 0, 360)); //get 
  rotateY(map(m*60, 0, 3600, 0, 360));
  box(650, 650, 750);
 // }

}

function drawMin(m) {
    let r = random(5000);
    const {
      x,
      y
    } = minToXY(m, 800)
    push()
    strokeWeight(3)
    curve(500, 206, 0, r, 240, 0, 173, 61, 0, 150, 650, 0);
    line(0, 100, x, y)
    pop()
}

function d2r(degrees)
{
  return degrees * (Math.PI/180);
}
