hr = hour()
mn = minute()
sc = second()


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function map(){
  scAngle = map(sc,0,60,360)
}