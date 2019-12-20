var bg;
var bgx=300;
var turtle;
var whale;
var krill;
var plasticbag;
var cocacola;
function preload(){
  bg=loadImage("images/underwater.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  turtle=new Turtle(150,700);
  whale=new Whale(250,250);
  plasticbag=new Plasticbag(800,300);
  krill=new Krill(850,250);
  cocacola=new Cocacola(750,150);
}

function draw() {
  background(255); 
  imageMode(CENTER);
  image(bg,bgx,height/2,displayWidth,displayHeight);
  bgx=bgx-5;
  if(bgx<0){
    bgx=displayWidth/2;
  }
  turtle.display();
  whale.display();
  plasticbag.display();
  krill.display();
  cocacola.display();
}
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    turtle.movehor(10);
  }
  if(keyCode===LEFT_ARROW){
    turtle.movehor(-10);
  }
  if(keyCode===UP_ARROW){
    turtle.movever(-10);
  }
  if (keyCode===DOWN_ARROW) {
    turtle.movever(10);
  }
}