class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.p = 500;
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
  }

  draw() {
    this.x -= 1;
    image(bgImage, this.x, this.y, this.width, this.height);
    image(bgImage, this.x + this.width, this.y, this.width, this.height);
    if (this.x <= -this.width) {
      this.x = 0;
    }
    image(lava, 0, 470, CANVAS_WIDTH, CANVAS_HEIGHT);
    image(brick, 0, 380, 0, 0);
    image(brick2, 300, 280, 70, 70);
    image(brick3, 500, 400, 70, 70);
    image(brickQuestionMark, 1100, 150, 50, 50);
    image(brick, 800, 450, 0, 0);
  }

  playSound() {
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
  }
}
