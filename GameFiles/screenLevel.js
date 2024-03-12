function game() {
  background(color, 0, 0);
  stroke(255);
  fill(0);
  Screen(ceil(shift));
  rect(windowWidth / 2, windowHeight / 2, boardW, boardH)
  boardLeft = windowWidth / 2 - boardW / 2;
  boardRight = windowWidth / 2 + boardW / 2;
  boardTop = windowHeight / 2 - boardH / 2;
  boardGround = windowHeight / 2 + boardH / 2;
  if (playerPosX <= boardLeft) {
    hitWall = true;
    onLeft = true;
    onRight = false;
    if (nextScreen == "LEFT") {
      shift += 1;
      playerPosX = boardRight - 1;
    } else{
      playerPosX = boardLeft + 1;
    }
    // if (prevScreen == "LEFT") {
    //   shift -= 1;
    //   playerPosX = boardRight - 1;
    // } else{
    //   playerPosX = boardLeft + 1;
    // }
  } else if (playerPosX >= boardRight) {
    hitWall = true;
    onLeft = false;
    onRight = true;
    if (nextScreen == "RIGHT") {
      shift += 1;
      playerPosX = boardLeft + 1;
    } else{
      playerPosX = boardRight - 1;
    }
    // if (prevScreen == "RIGHT") {
    //   shift -= 1;
    //   playerPosX = boardLeft + 1;
    // } else{
    //   playerPosX = boardRight - 1;
    // }
  } else if (playerPosX <= boardTop) {
    playerPosY = boardGround - 1;
    onTop = true;
    onLeft = false;
    onRight = false;
    if (nextScreen == "TOP") {
      shift += 1;
      playerPosY = boardGround - 1;
    } else{
      playerPosY = boardTop + 1;
    }
  } else {
    hitWall = false;
    onLeft = false;
    onRight = false;
    // if (onGround){
    //   hitWall = false;
    // }
  }
  //Player Render
  fill(255);
  // square(playerPosX, playerPosY, playerSize);
  if (onGround) {
    if (keyIsDown(32)) {
      image(squatAni, playerPosX, playerPosY, playerSize, playerSize);
    } else {
      if (jumpType == "L") {
        push();
        image(walkLAni[walkFrame], playerPosX, playerPosY, playerSize, playerSize);
        pop();
      } else if (jumpType == "R") {
        push();
        image(walkRAni[walkFrame], playerPosX, playerPosY, playerSize, playerSize);
        pop();
      } else {
        push();
        image(walkRAni[walkFrame], playerPosX, playerPosY, playerSize, playerSize);
        pop();
      }
    }
  } else {
    image(jumpAni, playerPosX, playerPosY, playerSize, playerSize);
  }
  noStroke();
  fill(0);
  movement();
  rect((windowWidth / 2) + boardW / 2 + 20, windowHeight / 2, 40, boardH + 10);
  rect((windowWidth / 2) - boardW / 2 - 20, windowHeight / 2, 40, boardH + 10)
}
function Screen(lev) {
  this.level = lev;
  this.nextScreen = "NONE";
  this.prevScreen = "NONE";

  this.platform = function (xp, yp, l, w) {
    rect(xp, yp, l, w);

    function distance() {
      let p1 = createVector(xp, yp);
      let p2 = createVector(playerPosX, playerPosY);

      p2.sub(p1);

      return (p2);
    }
  }

  this.shiftZone = function (side) {
    if (side == "RIGHT") {
      nextScreen = "RIGHT";
      // prevScreen = "LEFT";
    } else if (side == "LEFT") {
      nextScreen = "LEFT";
      // prevScreen = "RIGHT";
    } else if (side == "UP") {
      nextScreen = "UP";
      // prevScreen = "DOWN";
    }
  }
  if (lev == 0) {
    this.platform(400, 600, 150, 50)
    this.shiftZone("RIGHT");
    return;
  } else if (lev == 1) {
    this.platform(100, 100, 150, 50)
    this.shiftZone("RIGHT");
  } else if (lev == 2) {
    return;
  } else if (lev == 3) {
    return;
  } else if (lev == 4) {
    return;
  } else if (lev == 5) {
    return;
  } else if (lev == 6) {
    return;
  } else if (lev == 7) {
    return;
  } else if (lev == 8) {
    return;
  } else if (lev == 9) {
    return;
  } else if (lev == 10) {
    return;
  }
}
