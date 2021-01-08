var garden;

function preload() {
  //load the images here

  garden = loadImage("images/garden.png");

  tomImage = loadAnimation("images/tomOne.png");
  tomImage2 = loadAnimation("images/tomTwo.png", "images/tomThree.png");
  tomImage3 = loadAnimation("images/tomFour.png");

  jerryImage = loadAnimation(
    "images/jerryTwo.png",
    "images/jerryThree.png",
    "images/jerryFour.png"
  );

  jerryImage2 = loadAnimation("images/jerryOne.png");
}

function setup() {
  createCanvas(600, 500);
  //create tom and jerry sprites here

  tom = createSprite(400, 400);
  tom.addAnimation("tomImage", tomImage);
  tom.addAnimation("tomStop", tomImage3);
  tom.scale = 0.1;

  jerry = createSprite(40, 400);
  jerry.addAnimation("jerryImage", jerryImage);
  jerry.addAnimation("jerryStop", jerryImage2);

  jerry.scale = 0.1;
}

function draw() {
  background(garden);
  //Write condition here to evalute if tom and jerry collide

  keyPressed();

  if (tom.isTouching(jerry)) {
    tom.changeAnimation("tomStop");
    jerry.changeAnimation("jerryStop");
    tom.velocityX = 0;
  }

  //tom.debug();
  drawSprites();
}

function keyPressed() {
  //For moving and changing animation write code here

  if (keyDown("LEFT_ARROW")) {
    tom.velocityX = -3;
    tom.addAnimation("tomRunning", tomImage2);
    tom.changeAnimation("tomRunning");
  }
}
