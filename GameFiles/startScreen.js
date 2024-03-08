function startScreen() {
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
