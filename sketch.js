var f1,m1,box1,box2,box3,box4;
function setup() {
  createCanvas(1200,800);
  box1 = createSprite(100,100,50,50);
  box1.shapeColor  ="green";
  box2 = createSprite(300,100,50,50);
  box2.shapeColor  ="green";
  box3 = createSprite(500,100,50,50);
  box3.shapeColor  ="green";
  box4 = createSprite(700,100,50,50);
  box4.shapeColor  ="green";
  f1 = createSprite(600, 400, 50, 80);
   f1.shapeColor = "green";
    f1.debug= true;
   m1 = createSprite(400,200,80,30);
    m1.shapeColor = "green";
     m1.debug= true;
  
  
}

function draw() {
  background("aqua"); 
  m1.x = World.mouseX;
  m1.y= World.mouseY; 
  if(isTouching(m1,box1)){
    box1.shapeColor="red";
    m1.shapeColor="red";
  }
else{
  box1.shapeColor="green";
  m1.shapeColor="green";
}


  drawSprites();
}
function isTouching(fixedRect,movingRect){
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&& 
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&& 
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2)
    
{
return true;
}
else{
  return false;
}
  
} 