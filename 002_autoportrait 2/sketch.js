var p1x = 50;
var p1y = 0;

var p2x = 40;
var p2y = 30;

var p3x = 45;
var p3y = 40;

var p4x = 30;
var p4y = 60;

var p5x = 40;
var p5y = 60;

var p6x = 35;
var p6y = 70;

var p7x = 40;
var p7y = 80;

var p8x = 35;
var p8y = 90;

var p9x = 50;
var p9y = 100;

function setup() {
createCanvas(100,100);
background(220,220,220);
}

function draw() {
//  ellipse(width/2,height/2,d);
//  fill(255,100,255);
//  line(0,height, width,0);
//  line(width,height,0,0);
//  framerate(1);

  line(p1x,p1y,p2x,p2y);
  line(p2x,p2y,p3x,p3y);
  line(p3x,p3y,p4x,p4y);
  line(p4x,p4y,p5x,p5y);
  line(p5x,p5y,p6x,p6y);
  line(p6x,p6y,p7x,p7y);
  line(p7x,p7y,p8x,p8y);
  line(p8x,p8y,p9x,p9y);

  noFill();
  arc(60, 50, 10, 10, QUARTER_PI, PI);

  bezier(p6x, p6y, p6x+10, p6y+5, 60, 70, 60, 70);


}
