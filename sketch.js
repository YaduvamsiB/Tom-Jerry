var garden;

function preload() {
  //load the images here

  garden = loadImage("images/garden.png");

  tomImage = loadAnimation("images/tomOne.png");
  tomImage2 = loadAnimation("images/tomTwo.png", "images/tomThree.png");
  tomImage3 = loadAnimation("images/tomFour.png");

  jerryImage = loadAnimation("images/jerryOne.png");
  jerryImage2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
  jerryImage3 = loadAnimation("images/jerryFour.png");
}

function setup() {
  createCanvas(600, 500);
  //create tom and jerry sprites here

  tom = createSprite(400, 400, 50, 50);
  tom.addAnimation("tomImage", tomImage);
  tom.addAnimation("tomStop", tomImage3);
  tom.addAnimation("tomRunning", tomImage2);
  tom.scale = 0.1;
  tom.width *= 0.1;

  jerry = createSprite(40, 400, 50, 50);
  jerry.addAnimation("jerryImage", jerryImage);
  jerry.addAnimation("jerryPanic", jerryImage2);
  jerry.addAnimation("jerryStop", jerryImage3);
  jerry.scale = 0.1;
  jerry.width *= 0.1;
}

function draw() {
  background(garden);
  //Write condition here to evalute if tom and jerry collide

  keyPressed();

  console.log(isTouch(tom, jerry));
  if (isTouch(tom, jerry)) {
    tom.x = 120;
    tom.changeAnimation("tomStop");
    jerry.changeAnimation("jerryStop");
    console.log("touched!");
    tom.scale = 0.1;
    jerry.scale = 0.1;
    tom.velocityX = 0;
  }

  drawSprites();
}

function keyPressed() {
  //For moving and changing animation write code here

  if (keyDown("LEFT_ARROW")) {
    tom.velocityX = -3;
    tom.changeAnimation("tomRunning");
    jerry.changeAnimation("jerryPanic");
  }
}
