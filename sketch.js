var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
}
bullet=createSprite(50,200,50,50);
bullet.velocityX=speed;
bullet.shapecolour("white");

wall=createSprite(1200,200,thickness,height/2);
wall.shapecolour(80,80,80);

function draw() {
  background(255,255,255);  
  drawSprites();
}
  if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation= 0.5*weight*speed*speed/22509
  if(deformation>180)
}
car.shapecolour=colour(255,0,0);
{
if(deformation<180 && deformation>100);
}
car.shapecolour=colour(230,230,0);
{
if(deformation<100)
}
car.shapecolour=colour(0,255,0);
}