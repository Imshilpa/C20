var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  movingRect=createSprite(200,400,80,50);
}

function draw() {
  background(255);  

   movingRect.x=mouseX;
   movingRect.y=mouseY;

   if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
     movingRect.shapeColor="red";
     fixedRect.shapeColor="red";
   }
   else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
   }

  drawSprites();
}