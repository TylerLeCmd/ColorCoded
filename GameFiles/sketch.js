var bugs = [];
//Player Vars
var playerPosX = 100;
var playerPosY = 0;
var playerSize = 50;
var playerJump = 35;

var xSpeed = 0;
var ySpeed = 0;
var gravAcc = 1;

let jumpOn = false;
let color = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  for (var i = 0; i < 50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  game();
  //info
  text(ySpeed, 200, 200);
  text(playerPosY, 200, 210);
  text(gravAcc, 200, 220);
  text(windowHeight - playerSize / 2, 200, 230);
  text(`${key} ${keyCode}`, 10, 40);
}

function game() {
  background(color, 0, 0);

  //Player Render
  fill(255);
  square(playerPosX, playerPosY, playerSize);

  ySpeed += gravAcc;
  playerPosY += ySpeed;
  if (playerPosY + playerSize / 2 > height) {
    playerPosY = height - playerSize / 2
    ySpeed = 0;
  }
  ySpeed = ySpeed * 0.98;

  if (jumpOn) {
    if (playerPosY + playerSize / 2 >= height) {
      ySpeed = -playerJump;
    }
    jumpOn = false;
  }
}

function keyTyped() {
  print(key, ' ', keyCode);
  if (keyCode === 32) {
    jumpOn = true;
  }
}

