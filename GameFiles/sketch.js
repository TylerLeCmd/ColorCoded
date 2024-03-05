//https://p5play.org/learn/

//Player Vars
var clock = 0;
var timeStamp = 0;

var playerPosX = 100;
var playerPosY = 0;
var playerSize = 30;
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
var boardW = 1080;
var boardH = 720;
var boardLeft = 0;
var boardRight = 0;
var boardTop = 0;
var boardGround = 0;
let hitWall = true;

let start = false;
let desc = false;
var shift = 0;
let screen = [];

var sprite_sheet;
var walkAni;

function preload(){
  sprite_sheet = loadSpriteSheet('assets/walk_cycle.png',16,16,12);
  walkAni = loadAnimation(sprite_sheet);
}

function setup() {
  // createCanvas(1080, 720);
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  rectMode(CENTER);
  playerPosX = windowWidth / 2;
  playerPosY = windowHeight / 2;
  font = loadFont('MinecraftRegular-Bmg3.otf');
  for (let i = 0; i < 31; i++){
    screen[i] = [];
  }
}

function draw() {
  if (!start) {
    startScreen();
  }
  if (start && !desc) {
    game();
    //info
    // text(ySpeed, 200, 200);
    // text(playerPosY, 200, 210);
    // text(gravAcc, 200, 220);
    // text(windowHeight - playerSize / 2, 200, 230);
    stroke(255);
    strokeWeight(1);
    fill(255);
    textSize(12);
    textAlign(LEFT);
    text(`${key} ${keyCode}`, 10, 40);
    text(onGround, 10, 50);
    // text(floor(clock / 60), 10, 60);
    text(clock, 10, 60);
    text(playerJump, 10, 70);
    text(timeStamp, 10, 80);
    text(jumpType, 10, 90);
    text(hitWall, 10, 110);
    text(playerPosX, 40, 90);
    text(playerPosY, 40, 110);
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
}
function startScreen() {
  if (desc) {
    description();
  }
  if (!start && !desc) {
    background(0, 0, 0);
    stroke(255);
    text(mouseX, 40, 90);
    text(mouseY, 40, 110);
    textAlign(CENTER)
    textSize(150)
    fill(255)
    textFont('Arial');
    text("ColorCoded", windowWidth / 2, windowHeight / 2 - 250)
    textSize(48);
    fill(155);
    textFont(font);
    text("Journey Start", windowWidth / 2, windowHeight / 2);
    text("Description", windowWidth / 2, (windowHeight / 2) + 175);
    if (mouseX < windowWidth / 2 + 175 && mouseX > windowWidth / 2 - 175 && mouseY < (windowHeight / 2) + 50 && mouseY > (windowHeight / 2) - 50) {
      fill(200);
      text("> Journey Start <", windowWidth / 2, windowHeight / 2);
      if (mouseIsPressed) {
        start = true;
      }
    }
    else if (mouseX < windowWidth / 2 + 175 && mouseX > windowWidth / 2 - 175 && mouseY < (windowHeight / 2) + 225 && mouseY > (windowHeight / 2) + 125) {
      fill(200);
      text("> Description <", windowWidth / 2, windowHeight / 2 + 175);
      if (mouseIsPressed) {
        desc = true;
      }
    } else {
    }
  }
}
function description() {
  background(0, 0, 0);
  stroke(255);
  text(mouseX, 40, 90);
  text(mouseY, 40, 110);
  textAlign(CENTER)
  textSize(75)
  fill(255)
  textFont('Arial');
  text("ColorCoded", windowWidth / 2, windowHeight / 2 - 300)
  textSize(36);
  fill(155);
  textFont(font);
  text("Return", windowWidth / 2, (windowHeight / 2) + 275);
  if (mouseX < windowWidth / 2 + 175 && mouseX > windowWidth / 2 - 175 && mouseY < (windowHeight / 2) + 275 && mouseY > (windowHeight / 2) + 225) {
    // fill(125);
    // rect(windowWidth / 2, windowHeight / 2 + 175, 350, 100);
    fill(200);
    text("> Return <", windowWidth / 2, windowHeight / 2 + 275);
    if (mouseIsPressed) {
      desc = false;
    }
  }
}

function game() {
  background(color, 0, 0);
  stroke(255);
  fill(0);
  rect(windowWidth / 2, windowHeight / 2, boardW, boardH)
  boardLeft = windowWidth / 2 - boardW / 2;
  boardRight = windowWidth / 2 + boardW / 2;
  boardTop = windowHeight / 2 - boardH / 2;
  boardGround = windowHeight / 2 + boardH / 2;
  if (playerPosX <= boardLeft) {
    hitWall = true;
    playerPosX = boardLeft + 1;
    // playerPosX = boardRight - 1;
  } else if (playerPosX >= boardRight) {
    hitWall = true;
    playerPosX = boardRight - 1;
    // playerPosX = boardLeft + 1;
  } else {
    hitWall = false;
    // if (onGround){
    //   hitWall = false;
    // }
  }
  //Player Render
  fill(255);
  square(playerPosX, playerPosY, playerSize);
  noStroke();
  fill(0);
  rect((windowWidth / 2) + boardW / 2 + 10, windowHeight / 2, 20, boardH + 10);
  rect((windowWidth / 2) - boardW / 2 - 10, windowHeight / 2, 20, boardH + 10)
  movement();
}

function movement() {
  ground = boardGround;
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
      playerPosX += playerSpeed / 1.4 + (playerJump / 40);
      if (hitWall) {
        hitWall = false;
        playerPosX -= playerSpeed;
        jumpType = "L";
      }
    } else if (jumpType == "L") {
      playerPosX -= playerSpeed / 1.4 + (playerJump / 40);
      if (hitWall) {
        hitWall = false;
        playerPosX += playerSpeed;
        jumpType = "R";
      }
    } else { }
    clock++;
  }
}

function keyReleased() {
  if (!keyIsDown(32)) {
    if (onGround) {
      clock = 0;
      if (timeStamp != 0) {
        playerJump = ceil(timeStamp / 30) * 10 + 10;
        ySpeed = -playerJump;
      }
    }
  }
}
