var fixedRect,MovingRect

function setup() {
  createCanvas(1000,800);

  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  MovingRect = createSprite (600,200,80,30);
  MovingRect.shapeColor = "green";
  MovingRect.debug = true;
}

function draw() {
  background(255,255,255);  
 MovingRect.x = World.mouseX;
 MovingRect.y = World.mouseY;

 if (MovingRect.x - fixedRect.x < MovingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - MovingRect.x < MovingRect.width/2 + fixedRect.width/2 && 
  MovingRect.y - fixedRect.y < MovingRect.height/2 + fixedRect.height/2 && 
  fixedRect.y - MovingRect.y < MovingRect.height/2 + fixedRect.height/2){
    MovingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else {
    MovingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}