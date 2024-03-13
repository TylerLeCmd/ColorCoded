function game() {
  background(color, 0, 0);
  stroke(255);
  noFill();
  rect(windowWidth / 2, windowHeight / 2, boardW, boardH)
  if (shift < 2) {
    tint(50);
    image(background1, windowWidth / 2, windowHeight / 2, boardW, boardH)
  } else {
    tint(50);
    image(background2, windowWidth / 2, windowHeight / 2, boardW, boardH)
  }
  tint(255);
  Screen(ceil(shift));
  if (!played){
    mySound.play();
    played = true;
  }
  //Screen Logic for Player Location
  if (playerPosX <= boardLeft) {
    hitWall = true;
    onLeft = true;
    onRight = false;
    if (nextScreen == "LEFT") {
      shift += 1;
      playerPosX = boardRight - 1;
    } else {
      playerPosX = boardLeft;
    }
  } else if (playerPosX >= boardRight) {
    hitWall = true;
    onLeft = false;
    onRight = true;
    if (nextScreen == "RIGHT") {
      shift += 1;
      playerPosX = boardLeft + 1;
    } else {
      playerPosX = boardRight;
    }
  } else if (playerPosY <= boardTop) {
    playerPosY = boardGround - (0.5 * playerSize) - 1;
    onTop = true;
    onLeft = false;
    onRight = false;
    if (nextScreen == "UP") {
      shift += 1;
      playerPosY = boardGround - (0.5 * playerSize) - 1;
    } else {
      playerPosY = boardTop + 1;
    }
  } else if (playerPosY >= boardGround - (0.5 * playerSize)) {
    if (shift > 0) {
      shift -= 1;
      playerPosY = boardTop + 1;
    }
  } else {
    hitWall = false;
    onLeft = false;
    onRight = false;
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
  rect((windowWidth / 2) - boardW / 2 - 20, windowHeight / 2, 40, boardH + 10);
}
function Screen(lev) {
  this.level = lev;
  this.nextScreen = "NONE";
  this.prevScreen = "NONE";
  this.plat = [];
  this.dist = [];
  let closestDist = createVector(0, 0);
  let smallestMagnitude = Infinity;
  let smallestIndex = -1;

  this.shiftZone = function (side) {
    if (side == "RIGHT") {
      nextScreen = "RIGHT";
    } else if (side == "LEFT") {
      nextScreen = "LEFT";
    } else if (side == "UP") {
      nextScreen = "UP";
    }
  }
  if (lev == 0) {
    mySound = soundEff[2];
    image(arrow, boardLeft + 820, boardTop + 100.5, 50, 50)
    plat[0] = new Platform(boardLeft + 455, boardGround - 336.5, 150, 50, 1)
    plat[0].display();
    plat[1] = new Platform(boardLeft + 150, boardGround - 136.5, 150, 50, 1)
    plat[1].display();
    plat[2] = new Platform(boardLeft + 820, boardGround - 550.5, 150, 50,1 )
    plat[2].display();
    this.shiftZone("UP");
    for (var i = 0; i < this.plat.length; i++) {
      dist[i] = plat[i].distance();
    } for (var i = 0; i < this.dist.length; i++) {
      let magnitude = dist[i].mag();
      if (magnitude < smallestMagnitude) {
        smallestMagnitude = magnitude;
        smallestIndex = i;
      }
      if (smallestIndex !== -1) {
        plat[smallestIndex].platformLogic();
      }
    }
    return;
  } else if (lev == 1) {
    mySound = soundEff[3];
    image(arrow, boardLeft + 250, boardTop + 100, 50, 50)
    plat[0] = new Platform(boardLeft + 580, boardGround - 80.5, 150, 50, 1)
    plat[0].display();
    plat[1] = new Platform(boardRight - 170, boardGround - 186.5, 150, 50, 1)
    plat[1].display();
    plat[2] = new Platform(boardLeft + 920, boardGround - 440.5, 150, 50, 1)
    plat[2].display();
    plat[3] = new Platform(boardLeft + 500, boardTop + 150.5, 150, 50, 1)
    plat[3].display();
    this.shiftZone("UP");
    for (var i = 0; i < this.plat.length; i++) {
      dist[i] = plat[i].distance();
    } for (var i = 0; i < this.dist.length; i++) {
      let magnitude = dist[i].mag();
      if (magnitude < smallestMagnitude) {
        smallestMagnitude = magnitude;
        smallestIndex = i;
      }
      if (smallestIndex !== -1) {
        plat[smallestIndex].platformLogic();
      }
    }
    this.shiftZone("UP")
    return;
  } else if (lev == 2) {
    image(arrow, boardRight - 150, boardTop + 100, 50, 50)
    plat[0] = new Platform(boardLeft + 250, boardGround - 60.5, 150, 50, 1)
    plat[0].display();
    plat[1] = new Platform(boardRight - 450, boardGround - 186.5, 150, 50, 1)
    plat[1].display();
    plat[2] = new Platform(boardLeft + 300, boardGround - 400.5, 150, 50, 1)
    plat[2].display();
    plat[3] = new Platform(boardRight - 450, boardTop + 150.5, 150, 50, 1)
    plat[3].display();
    this.shiftZone("UP");
    for (var i = 0; i < this.plat.length; i++) {
      dist[i] = plat[i].distance();
    } for (var i = 0; i < this.dist.length; i++) {
      let magnitude = dist[i].mag();
      if (magnitude < smallestMagnitude) {
        smallestMagnitude = magnitude;
        smallestIndex = i;
      }
      if (smallestIndex !== -1) {
        plat[smallestIndex].platformLogic();
      }
    }
    this.shiftZone("UP")
    return;
  } else if (lev == 3) {
    // image(arrow, boardRight - 150, boardTop + 100, 50, 50)
    plat[0] = new Platform(boardRight - 75, boardGround - 60.5, 150, 50, 1)
    plat[0].display();
    plat[1] = new Platform(boardRight - 150, boardGround - 300.5, 150, 50, 1)
    plat[1].display();
    plat[2] = new Platform(boardLeft + 560, boardGround - 400.5, 50, 50, "L")
    plat[2].display();
    plat[3] = new Platform(boardLeft + 310, boardGround - 410.5, 50, 50, "L")
    plat[3].display();
    plat[4] = new Platform(boardLeft + 20, boardTop + 115, 50, 50, "L")
    plat[4].display();
    this.shiftZone("UP");
    for (var i = 0; i < this.plat.length; i++) {
      dist[i] = plat[i].distance();
    } for (var i = 0; i < this.dist.length; i++) {
      let magnitude = dist[i].mag();
      if (magnitude < smallestMagnitude) {
        smallestMagnitude = magnitude;
        smallestIndex = i;
      }
      if (smallestIndex !== -1) {
        plat[smallestIndex].platformLogic();
      }
    }
    this.shiftZone("UP")
    return;
  } else if (lev == 4) {
    // image(arrow, boardRight - 150, boardTop + 100, 50, 50)
    plat[0] = new Platform(boardLeft + 305, boardGround -160.5, 50, 50, "L")
    plat[0].display();
    plat[1] = new Platform(boardLeft + 615, boardGround - 100.5, 50, 50, "L")
    plat[1].display();
    plat[1] = new Platform(boardLeft + 815, boardGround - 150.5, 50, 50, "L")
    plat[2].display();
    plat[3] = new Platform(boardRight - 155, boardGround - 300.5, 50, 50, "L")
    plat[3].display();
    plat[4] = new Platform(boardLeft + 515, boardGround - 250.5, 50, 50, "L")
    plat[4].display();
    this.shiftZone("UP");
    for (var i = 0; i < this.plat.length; i++) {
      dist[i] = plat[i].distance();
    } for (var i = 0; i < this.dist.length; i++) {
      let magnitude = dist[i].mag();
      if (magnitude < smallestMagnitude) {
        smallestMagnitude = magnitude;
        smallestIndex = i;
      }
      if (smallestIndex !== -1) {
        plat[smallestIndex].platformLogic();
      }
    }
    this.shiftZone("UP")
    return;
  } else if (lev == 5) {
    plat[0] = new Platform(boardLeft + 305, boardGround -160.5, 50, 50, "L")
    plat[0].display();
    plat[1] = new Platform(boardLeft + 615, boardGround - 100.5, 50, 50, "L")
    plat[1].display();
    plat[1] = new Platform(boardLeft + 815, boardGround - 150.5, 50, 50, "L")
    plat[2].display();
    plat[1] = new Platform(boardRight - 155, boardGround - 300.5, 50, 50, "L")
    plat[3].display();
    plat[1] = new Platform(boardLeft + 515, boardGround - 250.5, 50, 50, "L")
    plat[4].display();
    this.shiftZone("UP");
    for (var i = 0; i < this.plat.length; i++) {
      dist[i] = plat[i].distance();
    } for (var i = 0; i < this.dist.length; i++) {
      let magnitude = dist[i].mag();
      if (magnitude < smallestMagnitude) {
        smallestMagnitude = magnitude;
        smallestIndex = i;
      }
      if (smallestIndex !== -1) {
        plat[smallestIndex].platformLogic();
      }
    }
    return;
  } else if (lev == 6) {
    image(arrow, boardRight - 150, boardTop + 100, 50, 50)
    plat[0] = new Platform(boardLeft + 250, boardGround - 60.5, 150, 50, 1)
    plat[0].display();
    plat[1] = new Platform(boardRight - 450, boardGround - 186.5, 150, 50, 1)
    plat[1].display();
    plat[2] = new Platform(boardLeft + 300, boardGround - 400.5, 150, 50, 1)
    plat[2].display();
    plat[3] = new Platform(boardRight - 450, boardTop + 150.5, 150, 50, 1)
    plat[3].display();
    this.shiftZone("UP");
    for (var i = 0; i < this.plat.length; i++) {
      dist[i] = plat[i].distance();
    } for (var i = 0; i < this.dist.length; i++) {
      let magnitude = dist[i].mag();
      if (magnitude < smallestMagnitude) {
        smallestMagnitude = magnitude;
        smallestIndex = i;
      }
      if (smallestIndex !== -1) {
        plat[smallestIndex].platformLogic();
      }
    }
    this.shiftZone("UP")
    return;
  } else if (lev == 7) {
    plat[0] = new Platform(boardLeft + 305, boardGround -160.5, 50, 50, "L")
    plat[0].display();
    plat[1] = new Platform(boardLeft + 615, boardGround - 100.5, 50, 50, "L")
    plat[1].display();
    plat[1] = new Platform(boardLeft + 815, boardGround - 150.5, 50, 50, "L")
    plat[2].display();
    plat[1] = new Platform(boardRight - 155, boardGround - 300.5, 50, 50, "L")
    plat[3].display();
    plat[1] = new Platform(boardLeft + 515, boardGround - 250.5, 50, 50, "L")
    plat[4].display();
    this.shiftZone("UP");
    for (var i = 0; i < this.plat.length; i++) {
      dist[i] = plat[i].distance();
    } for (var i = 0; i < this.dist.length; i++) {
      let magnitude = dist[i].mag();
      if (magnitude < smallestMagnitude) {
        smallestMagnitude = magnitude;
        smallestIndex = i;
      }
      if (smallestIndex !== -1) {
        plat[smallestIndex].platformLogic();
      }
    }
    return;
  } else if (lev == 8) {
    plat[0] = new Platform(boardLeft + 305, boardGround -160.5, 50, 50, "L")
    plat[0].display();
    plat[1] = new Platform(boardLeft + 615, boardGround - 100.5, 50, 50, "L")
    plat[1].display();
    plat[1] = new Platform(boardLeft + 815, boardGround - 150.5, 50, 50, "L")
    plat[2].display();
    plat[1] = new Platform(boardRight - 155, boardGround - 300.5, 50, 50, "L")
    plat[3].display();
    plat[1] = new Platform(boardLeft + 515, boardGround - 250.5, 50, 50, "L")
    plat[4].display();
    this.shiftZone("UP");
    for (var i = 0; i < this.plat.length; i++) {
      dist[i] = plat[i].distance();
    } for (var i = 0; i < this.dist.length; i++) {
      let magnitude = dist[i].mag();
      if (magnitude < smallestMagnitude) {
        smallestMagnitude = magnitude;
        smallestIndex = i;
      }
      if (smallestIndex !== -1) {
        plat[smallestIndex].platformLogic();
      }
    }
    return;
  } else if (lev == 9) {
    plat[0] = new Platform(boardLeft + 305, boardGround -160.5, 50, 50, "L")
    plat[0].display();
    plat[1] = new Platform(boardLeft + 615, boardGround - 100.5, 50, 50, "L")
    plat[1].display();
    plat[1] = new Platform(boardLeft + 815, boardGround - 150.5, 50, 50, "L")
    plat[2].display();
    plat[1] = new Platform(boardRight - 155, boardGround - 300.5, 50, 50, "L")
    plat[3].display();
    plat[1] = new Platform(boardLeft + 515, boardGround - 250.5, 50, 50, "L")
    plat[4].display();
    this.shiftZone("UP");
    for (var i = 0; i < this.plat.length; i++) {
      dist[i] = plat[i].distance();
    } for (var i = 0; i < this.dist.length; i++) {
      let magnitude = dist[i].mag();
      if (magnitude < smallestMagnitude) {
        smallestMagnitude = magnitude;
        smallestIndex = i;
      }
      if (smallestIndex !== -1) {
        plat[smallestIndex].platformLogic();
      }
    }
    return;
  } else if (lev == 10) {
    plat[0] = new Platform(boardLeft + 305, boardGround -160.5, 50, 50, "L")
    plat[0].display();
    plat[1] = new Platform(boardLeft + 615, boardGround - 100.5, 50, 50, "L")
    plat[1].display();
    plat[1] = new Platform(boardLeft + 815, boardGround - 150.5, 50, 50, "L")
    plat[2].display();
    plat[1] = new Platform(boardRight - 155, boardGround - 300.5, 50, 50, "L")
    plat[3].display();
    plat[1] = new Platform(boardLeft + 515, boardGround - 250.5, 50, 50, "L")
    plat[4].display();
    this.shiftZone("UP");
    for (var i = 0; i < this.plat.length; i++) {
      dist[i] = plat[i].distance();
    } for (var i = 0; i < this.dist.length; i++) {
      let magnitude = dist[i].mag();
      if (magnitude < smallestMagnitude) {
        smallestMagnitude = magnitude;
        smallestIndex = i;
      }
      if (smallestIndex !== -1) {
        plat[smallestIndex].platformLogic();
      }
    }
    return;
  }

}
function Platform(xp, yp, l, w, a) {
  this.display = function () {
    rect(xp, yp, l, w);
    if (a == 'L') {
      image(fbla, xp, yp, l, w);
    } else {
      image(sqbl, xp, yp, l, w)
    }
  }

  this.distance = function () {
    let p1 = createVector(xp, yp);
    let p2 = createVector(playerPosX, playerPosY);
    let p3 = createVector(0, 0);
    p3 = p2.sub(p1);
    return (p3);
  }

  this.platformLogic = function () {
    if (playerPosX >= xp - (0.5 * l) && playerPosX <= xp + (0.5 * l) && playerPosY <= yp - (0.5 * w) - (0.5 * playerSize) && playerPosY >= yp - (0.5 * w) - (playerSize)) {
      above = true;
      ground = yp - (0.5 * w);
      if (playerPosY > yp - (0.5 * w) - (0.5 * playerSize)) {
        if (above) {
          playerPosY = yp - (0.5 * w) - (0.5 * playerSize);
          ySpeed = 0;
          ground = yp - (0.5 * w);
        } else {
          ground = boardGround;
        }
      }
    } else {
      above = false;
      ground = boardGround;
    }
    // if (playerPosX >= xp - (0.5 * l) && playerPosX <= xp + (0.5 * l) && playerPosY >= yp + (0.5 * w) && playerPosY <= yp + (0.5 * w) + (0.5 * playerSize)) {
    //   ySpeed = 0;
    // } else {
    // }

    // if (playerPosX < xp + (0.5 * l) + (0.5 * playerSize) && playerPosX >= xp + (0.5 * l) -playerSize && playerPosY >= yp - (0.5 * w) && playerPosY <= yp + (0.5 * w) - (0.5 * playerSize)) {
    //   playerPosX = xp + (0.5 * l) + 0.5*playerSize
    // }
    // if (playerPosX >= xp && playerPosX <= xp + (0.5 * l)&& playerPosY >= yp - (0.5 * w) && playerPosY <= yp + (0.5 * w)){
    //   sideHit = true;
    //   playerPosX = xp + (0.5 * l) + 0.5*playerSize
    // }else{
    //   sideHit = false;
    // }
  }
}
function deathZone(xp, yp, l, w) {
  this.display = function () {
    fill(255, 0, 0);
    rect(xp, yp, l, w);
    fill(0);
  }

  this.distance = function () {
    let p1 = createVector(xp, yp);
    let p2 = createVector(playerPosX, playerPosY);
    let p3 = createVector(0, 0);
    p3 = p2.sub(p1);
    return (p3);
  }

  this.platformLogic = function () {
    if (playerPosX >= xp - (0.5 * l) && playerPosX <= xp + (0.5 * l) && playerPosY <= yp - (0.5 * w) - (0.5 * playerSize) && playerPosY >= yp - (0.5 * w) - (playerSize)) {
      above = true;
      ground = yp - (0.5 * w);
      if (playerPosY > yp - (0.5 * w) - (0.5 * playerSize)) {
        if (above) {
          playerPosY = yp - (0.5 * w) - (0.5 * playerSize);
          ySpeed = 0;
          ground = yp - (0.5 * w);
        } else {
          ground = boardGround;
        }
      }
    } else {
      above = false;
      ground = boardGround;
    }

    // if (playerPosX <= xp + (0.5 * l) && playerPosY >= yp - (0.5 * w) - 0.5*playerSize && playerPosY <= yp + (0.5 * w)- 0.5*playerSize) {
    //   text("BEANS", 1000, 100)
    //   if (playerPosX <= xp + (0.5 * l)) {
    //     playerPosX = xp + (0.5 * l)
    //   }
    // } else 
    if (playerPosX >= xp && playerPosX <= xp + (0.5 * l) && playerPosY >= yp - (0.5 * w) && playerPosY <= yp + (0.5 * w)) {
      sideHit = true;
      playerPosX = xp + (0.5 * l) + 0.5 * playerSize
    } else {
      sideHit = false;
    }
  }
}