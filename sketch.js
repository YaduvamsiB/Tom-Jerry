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

  tom = createSprite(400, 400, 50, 50);
  tom.addAnimation("tomImage", tomImage);
  //tom.addAnimation("tomStop", tomImage3);
  //tom.addAnimation("tomRunning", tomImage2);
  tom.scale = 0.1;

  jerry = createSprite(40, 400, 50, 50);
  jerry.addAnimation("jerryImage", jerryImage);
  //jerry.addAnimation("jerryStop", jerryImage2);

  jerry.scale = 0.1;
}

function draw() {
  background(garden);
  //Write condition here to evalute if tom and jerry collide

  keyPressed();

  console.log(isTouch(tom, jerry));
  if (isTouch(tom, jerry)) {
    tom.changeAnimation("tomStop");
    jerry.changeAnimation("jerryStop");
    console.log("touched!");
    tom.scale = 0.1;
    jerry.scale = 0.1;
    tom.velocityX = 0;
  } else {
    tom.changeAnimation("tomRunning");
    jerry.changeAnimation("jerryImage");
    console.log("nope!");
    //tom.velocityX = 0;
  }

  tom.debug = true;
  tom.setCollider("circle", 0, 0, 500);

  jerry.debug = true;
  jerry.setCollider("circle", 0, 0, 500);

  drawSprites();
}

function keyPressed() {
  //For moving and changing animation write code here

  if (keyDown("LEFT_ARROW")) {
    tom.velocityX = -30;
    tom.changeAnimation("tomRunning");
  }
}
