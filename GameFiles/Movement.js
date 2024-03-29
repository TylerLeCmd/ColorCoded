function movement() {
  //Escape Feature
  if (keyIsDown(27)){
    start = false;
  }

  //Ground VS Ceiling Detection
  if (playerPosY + playerSize / 2 >= ground) {
    onGround = true;
    onTop = false;
  } else if (playerPosY + playerSize / 2 <= boardTop) {
    onGround = false;
    onTop = true;
  } else {
    onGround = false;
    onTop = false;
  }

  //Disable Jumping Logic While Moving
  if (!keyIsDown(32)) {

    //Logic for Walking
    if (onGround) {
      if (keyIsDown(65)) {
        jumpType = "L";
        playerPosX -= playerSpeed;
        walkTimer++;
        walkFrame = floor(walkTimer / 3);
        if (walkTimer > 31) {
          walkTimer = 0;
        }
      } else if (keyIsDown(68)) {
        jumpType = "R";
        playerPosX += playerSpeed;
        walkTimer++;
        walkFrame = floor(walkTimer / 3);
        if (walkTimer > 31) {
          walkTimer = 0;
        }
      } else {
        jumpType = "M";
        walkTimer = 0;
        walkFrame = 0;
      }
    }
  } else {
  }

  //Constant Gravity Vectors
  ySpeed += gravAcc;
  playerPosY += ySpeed;
  ySpeed = ySpeed * 0.98;

  //Player Doesn't Fall Through Any Ground
  if (playerPosY + playerSize / 2 > ground) {
    playerPosY = ground - playerSize / 2
    ySpeed = 0;
  }

  //Jumping Logic
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

  //Logic for Player While You're In The Air
  if (!onGround) {
    if (!sideHit) {
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
    }else{
    }
  }
}