function description() {
  background(0, 0, 0);
  stroke(255);
  // text(mouseX, 40, 90);
  // text(mouseY, 40, 110);
  textAlign(CENTER)
  textSize(75)
  fill(0)
  rect(windowWidth / 2, windowHeight / 2, boardW, boardH-250);
  fill(255)
  textFont('Arial');
  text("ColorCoded", windowWidth / 2, windowHeight / 2 - 300)
  textSize (18);
  text ("As you step into the world of entrepreneurship, guided by the light of your aspirations and the beacon of FBLA, you embark on a journey filled with challenges and opportunities. With the passion to create and innovate, you find yourself at the crossroads of dreams and reality, ready to transform your vision into a thriving business.\n \n In the heart of your quest, FBLA stands as your unwavering ally, offering a myriad of resources and support to fuel your entrepreneurial spirit. From insightful workshops on business planning to dynamic networking events with industry leaders, FBLA becomes your compass, navigating you through the complexities of the business landscape.\n \n With each milestone achieved and every challenge overcome, FBLA stands by your side, celebrating your triumphs and guiding you through setbacks. Together, you embrace the journey of entrepreneurship, fueled by the passion to create, the courage to innovate, and the unwavering support of FBLA.\n \n In the tapestry of your entrepreneurial odyssey, FBLA weaves a thread of inspiration, igniting your imagination and propelling you towards success. With FBLA as your trusted companion, you embark on a transformative journey, turning dreams into reality and aspirations into achievements. \n \n Warning: This game is relentless when it comes to jump. Like Jump King, you have no control of where you go in the air. You must position your jumps well.\n \n Movement: A and D Directionally, Space Bar to Jump",windowWidth / 2, windowHeight / 2, boardW, boardH-250 )
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