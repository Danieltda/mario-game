class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
  }

  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  draw() {
    this.background.playSound();
    this.background.draw();
    this.player.drawLeft();
    this.player.drawRight();
  }

  keyPressed() {
    if (keyCode === upArrow) {
      this.player.jumpSound();
      this.player.jump();
    }

    if (keyCode === downArrow) {
      this.player.jumpSound();
      this.player.jump();
    }

    if (keyCode === leftArrow) {
      this.player.jumpSound();
      this.player.jump();
      this.player.drawRight();
    }

    if (keyCode === rightArrow) {
      this.player.jumpSound();
      this.player.jump();
    }
  }
}
