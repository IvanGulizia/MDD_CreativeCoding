var xPos = 10;
var yPos = 10;
var d = 50;

var height = 500;
var width = 500;

var counter = 0;

function setup() {
createCanvas(width,height);
background(200,200,200);
}

function draw() {
  ellipse(width/2,height/2,d);
  fill(255,100,255);
  line(0,height, width,0);
  line(width,height,0,0);
  framerate(1);
}
