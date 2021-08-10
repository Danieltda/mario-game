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
    this.player.draw();
  }

  keyPressed() {
    if (keyCode === upArrow) {
      this.player.jumpSoundUp();
      this.player.jump();
    }

    if (keyCode === downArrow) {
      // this.player.jumpSound();
      // this.player.jump();
    }

    if (keyCode === leftArrow) {
      // console.log(keyCode);
      // this.player.jumpSound();
      // this.player.jump();
      this.player.drawLeft();
    }

    if (keyCode === rightArrow) {
      // this.player.jumpSound();
      // console.log(keyCode);
      this.player.drawRight();
    }
  }
}
