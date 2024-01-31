//Player Vars
var clock = 0;
var timeStamp = 0;

var playerPosX = 100;
var playerPosY = 0;
var playerSize = 25;
var playerJump = 20;
var playerSpeed = 10;

var xSpeed = 0;
var ySpeed = 0;
var gravAcc = 1;
var windSpeed = 1;

let color = 0;
var ground = 0;
let onGround = false;
let jumpType = "M";

function setup() {
  // createCanvas(1080, 720);
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
  // text(floor(clock / 60), 10, 60);
  text(clock, 10, 60);
  text(playerJump, 10, 70);
  text(timeStamp, 10, 80);
  text(jumpType, 10, 90);
  if (jumpType == "R") {
    text("RIGHT JUMP", 10, 100);
  } else if (jumpType == "L") {
    text("LEFT JUMP", 10, 100);
  } else { }
  // clock++;
  if (clock / 60 >= 60) {
    clock = 0;
  }
}

function game() {
  background(color, 0, 0);

  //Player Render
  fill(255);
  square(playerPosX, playerPosY, playerSize);
  ground = 500;
  movement();
}

function movement() {
  ground = height;
  if (playerPosY + playerSize / 2 >= ground) {
    onGround = true;
  } else {
    onGround = false;
  }
  if (!keyIsDown(32)) {
    //Logic for Walking
    if (onGround) {
      if (keyIsDown(65)) {
        jumpType = "L";
        playerPosX -= playerSpeed;
      } else if (keyIsDown(68)) {
        jumpType = "R";
        playerPosX += playerSpeed;
      } else {
        jumpType = "M";
      }
    }
  } else {
  }
  ySpeed += gravAcc;
  playerPosY += ySpeed;
  if (playerPosY + playerSize / 2 > ground) {
    playerPosY = ground - playerSize / 2
    ySpeed = 0;
  }
  ySpeed = ySpeed * 0.98;

  if (keyIsDown(32)) {
    if (onGround) {
      if (timeStamp < 60) {
        timeStamp += 2;
        // playerJump = timeStamp;
      } else if (timeStamp = 60) {
        timeStamp = 60;
      } else {
        timeStamp = 0;
      }
    } else {
      timeStamp = 0;
    }
  } else {
    // ySpeed = -playerJump;
    timeStamp = 0;
  }
  if (!onGround) { 
    if (jumpType == "R") {
      playerPosX += playerSpeed/1.4 + (playerJump/40);
      // playerPosX += playerSpeed/1.4;
    } else if (jumpType == "L") {
      playerPosX -= playerSpeed/1.4 + (playerJump/40);
      // playerPosX -= playerSpeed/1.4;
    } else { }
    clock++; 
  }
}

function keyReleased() {
  if (!keyIsDown(32)) {
    if (onGround) {
      if (timeStamp != 0) {
        playerJump = ceil(timeStamp / 20) * 10 + 10;
        ySpeed = -playerJump;
      }
    }
  }
}
