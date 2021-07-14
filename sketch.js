var bg, eating,moving,drinking,bath,brush,gymming,gymming2, sleep;
var IG,IG1,IG2,IG3

function preload(){

  bg = loadImage("iss.png");
  eating=loadAnimation("eat1.png", "eat2.png");
  moving=loadAnimation("move.png", "move1.png");
  drinking=loadAnimation("drink1.png","drink2.png");
  bath=loadAnimation("bath1.png", "bath2.png");
  brush=loadImage("brush.png");
  gymming=loadAnimation("gym1.png", "gym2.png");
  sleep=loadImage("sleep.png");
  gymming2 = loadAnimation( "gym11.png", "gym12.png")

}
function setup() {
  createCanvas(850,500)
  background("red")

  bg1 = createSprite(390,200)
  bg1.addImage("bg",bg)
  bg1.scale = 0.21

  astronaut = createSprite(400,250);
  astronaut.addAnimation("move",sleep);
  astronaut.scale = 0.1;

  IG = createSprite(5,250,10,500)
  IG.visible = false;
  IG1 = createSprite(845,250,10,500)
  IG1.visible = false;
  IG2 = createSprite(425,5,850,10)
  IG2.visible = false;
  IG3 = createSprite(425,495,850,10)
  IG3.visible = false;

  
}

function draw() {

  astronaut.bounceOff(IG);
  astronaut.bounceOff(IG1);
  astronaut.bounceOff(IG2);;
  astronaut.bounceOff(IG3);

  if(keyDown("up")){
    astronaut.addAnimation("eat", eating)
    astronaut.changeAnimation("eat",eating)
    astronaut.x  = 200
    astronaut.velocityY = 3;
    astronaut.velocityX = 3;
  }

  if(keyDown("down")){                                                            
    astronaut.addAnimation("drink", drinking)
    astronaut.changeAnimation("drink",drinking)
    astronaut.y = 250;
    astronaut.x = 425;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("right")){
    astronaut.addAnimation("gym", gymming)
    astronaut.changeAnimation("gym",gymming)
    astronaut.y = 250;
    astronaut.x = 425;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("shift")){
    astronaut.addAnimation("gym1", gymming2)
    astronaut.changeAnimation("gym1",gymming2)
    astronaut.y = 250;
    astronaut.x = 425;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("left")){
    astronaut.addAnimation("brush", brush)
    astronaut.changeAnimation("brush",brush)
    astronaut.y = 250;
    astronaut.x = 425;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown("w")){
    astronaut.addAnimation("bath", bath)
    astronaut.changeAnimation("bath",bath)
    astronaut.y = 250;
    astronaut.x = 425;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown("s")){
    astronaut.addAnimation("sleep", sleep)
    astronaut.changeAnimation("sleep",sleep)
    astronaut.y = 250;
    astronaut.x = 425;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("move", moving)
    astronaut.changeAnimation("move",moving)
    astronaut.x  = 200
    astronaut.velocityY = 1;
    astronaut.velocityX = 1;
  }


  drawSprites();
}