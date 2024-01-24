//Player Vars
var playerPosX = 100;
var playerPosY = 0;
var playerSize = 50;
var playerJump = 0;
var playerSpeed = 12.5;

var xSpeed = 0;
var ySpeed = 0;
var gravAcc = 1;

let color = 0;
var ground = 0;
let onGround = false;

var clock = 0;
var timeStamp = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  rectMode(CENTER);
}

function draw() {
  game();
  //info
  // text(ySpeed, 200, 200);
  // text(playerPosY, 200, 210);
  // text(gravAcc, 200, 220);
  // text(windowHeight - playerSize / 2, 200, 230);
  text(`${key} ${keyCode}`, 10, 40);
  text(onGround, 10, 50);
  text(floor(clock / 60), 10, 60);
  text(playerJump, 10, 70);
  text(timeStamp, 10, 80);
  clock++;
}

function game() {
  background(color, 0, 0);

  //Player Render
  fill(255);
  square(playerPosX, playerPosY, playerSize);
  movement();

}

function movement() {
  ground = height;
  if (playerPosY + playerSize / 2 >= ground) {
    onGround = true;
  } else {
    onGround = false;
  }
  if (keyIsDown(65)) {
    playerPosX -= playerSpeed;
  } else if (keyIsDown(68)) {
    playerPosX += playerSpeed;
  } else { }
  ySpeed += gravAcc;
  playerPosY += ySpeed;
  if (playerPosY + playerSize / 2 > ground) {
    playerPosY = ground - playerSize / 2
    ySpeed = 0;
  }
  ySpeed = ySpeed * 0.98;

  if (keyIsDown(32)) {
    if (onGround) {
      // ySpeed = -playerJump;
    }
  }

  if (onGround){
    timeStamp = floor(clock/60);
  }
}
