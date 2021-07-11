var fixedRect, movingRect;

function setup(){
  createCanvas(1800, 800);

  fixedRect = createSprite(200,200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(300,200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


}

function draw(){
  background(0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 ){
     movingRect.shapeColor = rgb(255,80,60);
     fixedRect.shapeColor = rgb(255,80,60);
  }

  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites()

}