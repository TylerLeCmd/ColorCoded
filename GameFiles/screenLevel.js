function Platform(xp, yp, wl, hl) {
  this.x = xp;
  this.y = yp;
  this.w = wl;
  this.h = hl;

  this.move = function () {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  this.display = function () {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

function game() {
  // walkTimer = walkTimer + 10;;
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
  image(standAni, playerPosX, playerPosY, playerSize, playerSize);
  noStroke();
  fill(0);
  rect((windowWidth / 2) + boardW / 2 + 10, windowHeight / 2, 20, boardH + 10);
  rect((windowWidth / 2) - boardW / 2 - 10, windowHeight / 2, 20, boardH + 10)
  movement();
}