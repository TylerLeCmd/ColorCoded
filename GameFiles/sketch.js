//https://p5play.org/learn/

//Player Vars
var clock = 0;
var timeStamp = 0;

var playerPosX = 100;
var playerPosY = 0;
var playerSize = 50;
var playerJump = 20;
var playerSpeed = 10;

var xSpeed = 0;
var ySpeed = 0;
var gravAcc = 1;
var windSpeed = 1;

let color = 0;
var ground = 0;
let onGround = false;
let onLeft = false;
let onRight = false;
let onTop = false;
let jumpType = "M";
var boardW = 1080;
var boardH = 720;
var boardLeft = 0;
var boardRight = 0;
var boardTop = 0;
var boardGround = 0;
let hitWall = true;

let above = false;

let start = false;
let desc = false;
var shift = 0;
let screen = [];

let walkRAni = [];
let walkLAni = [];
let walkTimer = 0;
let walkFrame = 0;
function preload(){
  walkRAni[0] = loadImage('assets/idle_square-2.png')
  walkRAni[1] = loadImage('assets/walk_cycle-1.png');
  walkRAni[2] = loadImage('assets/walk_cycle-2.png');
  walkRAni[3] = loadImage('assets/walk_cycle-3.png');
  walkRAni[4] = loadImage('assets/walk_cycle-4.png');
  walkRAni[5] = loadImage('assets/walk_cycle-5.png');
  walkRAni[6] = loadImage('assets/walk_cycle-7.png');
  walkRAni[7] = loadImage('assets/walk_cycle-9.png');
  walkRAni[8] = loadImage('assets/walk_cycle-10.png');
  walkRAni[9] = loadImage('assets/walk_cycle-11.png');
  walkRAni[10] = loadImage('assets/walk_cycle-12.png');

  walkLAni[0] = loadImage('assets/idle_square-2.png')
  walkLAni[1] = loadImage('assets/lwalk1.png');
  walkLAni[2] = loadImage('assets/lwalk2.png');
  walkLAni[3] = loadImage('assets/lwalk3.png');
  walkLAni[4] = loadImage('assets/lwalk4.png');
  walkLAni[5] = loadImage('assets/lwalk5.png');
  walkLAni[6] = loadImage('assets/lwalk7.png');
  walkLAni[7] = loadImage('assets/lwalk9.png');
  walkLAni[8] = loadImage('assets/lwalk10.png');
  walkLAni[9] = loadImage('assets/lwalk11.png');
  walkLAni[10] = loadImage('assets/lwalk12.png');

  squatAni = loadImage('assets/idle_square-3.png')
  jumpAni = loadImage('assets/idle_square-4.png')
}

function setup() {
  // createCanvas(1080, 720);
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  rectMode(CENTER);
  imageMode(CENTER);
  playerPosX = windowWidth / 2;
  playerPosY = windowHeight / 2;
  font = loadFont('MinecraftRegular-Bmg3.otf');
  for (let i = 0; i < 31; i++){
    screen[i] = Screen(i);
  }
}

function draw() {
  if (!start && !desc) {
    startScreen();
  }
  if (desc) {
    description();
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
    text(onLeft, 10, 120);
    text(onRight, 10, 130);
    text(onTop, 10, 140);
    text(above, 10, 150);
    // text(floor(clock / 60), 10, 60);
    text(clock, 10, 60);
    text(playerJump, 10, 70);
    text(timeStamp, 10, 80);
    text(jumpType, 10, 90);
    text(hitWall, 10, 110);
    text(mouseX, 40, 70);
    text(mouseY, 40, 80);
    text(playerPosX, 40, 90);
    text(playerPosY, 40, 110);
    text(walkTimer, 40, 130);
    text(walkFrame, 40, 150);
    text(shift, 40, 170);
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
