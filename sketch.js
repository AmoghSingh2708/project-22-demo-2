var fairy, fairy_activate, fairy_deactivate;



function preload()
{
   //preload the images here
   fairy_activate = loadAnimation("fairy.png","fairy1.png","fairy2.png");
   fairy_deactivate = loadImage("fairy.png")
}

function setup() {
  createCanvas(800, 750);
  
  fairy = createSprite(100,100,50,50);
  fairy.addAnimation("activate", fairy_activate);
  fairy.addImage("deactivate", fairy_deactivate);
}


function draw() {
  background("black");

  drawSprites();
}
