class Player {
  constructor() {
    this.y = 500;
    this.x = CANVAS_HEIGHT / 8;
    this.height = 70;
    this.width = 70;
  }

  jump() {
    this.y -= 15;
  }

  drawLeft() {
    image(mario, this.x, this.y, this.width, this.height);
  }

  drawRight() {
    image(leftMario, this.x, this.y, this.width, this.height);
  }

  jumpSound() {
    let jumpSound = document.getElementsByClassName("jump-sound")[0];
    jumpSound.play();
  }
}
