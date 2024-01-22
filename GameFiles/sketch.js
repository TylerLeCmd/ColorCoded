//Player Vars
var playerPosX = 100;
var playerPosY = 0;
var playerSize = 50;
var playerJump = 35;
var playerSpeed = 10;

var xSpeed = 0;
var ySpeed = 0;
var gravAcc = 1;

let color = 0;
var ground = [];
let onGround = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  text (onGround, 10, 50);
}

function game() {
  background(color, 0, 0);

  //Player Render
  fill(255);
  square(playerPosX, playerPosY, playerSize);
  movement();

}

function movement() {
  if (keyIsDown(65)) {
      playerPosX -= playerSpeed;
  } else if (keyIsDown(68)) {
      playerPosX += playerSpeed;
  } else { }
  ySpeed += gravAcc;
  playerPosY += ySpeed;
  if (playerPosY + playerSize / 2 > height) {
    playerPosY = height - playerSize / 2
    ySpeed = 0;
  }
  ySpeed = ySpeed * 0.98;

  if (keyIsDown(32)) {
    if (playerPosY + playerSize / 2 >= height) {
      ySpeed = -playerJump;
    }
  }
}
