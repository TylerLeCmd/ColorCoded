function description() {
  background(0, 0, 0);
  stroke(255);
  text(mouseX, 40, 90);
  text(mouseY, 40, 110);
  textAlign(CENTER)
  textSize(75)
  fill(0)
  rect(windowWidth / 2, windowHeight / 2, boardW, boardH-250);
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