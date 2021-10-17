var layer = 20;

function setup() {
    createCanvas(1000,1000,WEBGL);
    angleMode(DEGREES);
    setTimeout(above, 1000);    
    frameRate(60);

}

function draw(){
    // background(30);
    fill(77, 50);
    rect(-width/2,-height/2, width, height); 

    rotateX(80);

    stroke(255);
    noFill();

    let second = map(second(),0,60,0,TWO_PI)-HALF_PI;
    let minutes = map(minute()+norm(second(),0,60),0,60,0,TWO_PI) - HALF_PI;
    let hours = map(hour()+norm(minute(),0,60),0,24,0,TWO_PI * 2) - HALF_PI;
    
    //if (frameCount % 60 === 0) {
    //    layer++;
    // }
    for (var i = 0; i < layer; i++) {

        var colour = map(cos(frameCount), -1, 0, 255, 0);

        stroke(colour, 0, 0); 
        beginShape()
        for (var j = 0; j <180; j += 5) {
            var rad = i * 90;
            var x = rad * cos(j); // radius * cos(j) for example 90
            var y = rad * sin(j) // radius * sin()
            var z = sin(frameCount + i * 10) * 100;

            vertex(x, y, z);
        }
        endShape(CLOSE);
    }

    //above();
    // lastLayer();

}

function d2r(degrees)
{
  return degrees * (Math.PI/180);
}

function above() {

for (var i = 0; i < 200; i++) {

    var colour = map(cos(frameCount), -1, 0, 0, 255);

    stroke(colour, 0, 0); 
    beginShape()
    for (var j = 0; j <180; j += 5) {
        var rad = i * 90;
        var x = d2r(j); // radius * cos(j) for example 90
        var y = d2r(j) // radius * sin()
        var z = sin(frameCount + i * 10) * 100;

        vertex(x, y, z);
    }
    endShape(CLOSE);
}
}

function lastLayer(){

    stroke(255);
    noFill();
    
    for (var i = 0; i < 20; i++) {

        let c = color('hsl(160, 100%, 50%)');
        c = color('hsla(160, 100%, 50%, 0.5)');

        stroke(c, 0, 0); 
        beginShape()
        for (var j = 0; j <180; j += 45) {
            var rad = i * 90;
            var x = rad * cos(j); // radius * cos(j) for example 90
            var y = rad * sin(j) // radius * sin()
            var z = sin(frameCount + i * 100) * 100;

            vertex(x, y, z);
        }
        endShape(CLOSE);
    }

    above();
}