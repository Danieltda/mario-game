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

    // movement player left and right
    if (keyIsDown(LEFT_ARROW)) {
      this.player.x -= 3;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.player.x += 3;
    }
  }

  keyPressed() {
    // if (spacebarPressed.length < 3) {
    if (keyCode === spaceBar) {
      this.player.jumpSoundUp();
      this.player.jump();
    }
    // } else if (spacebarPressed.length >= 3) {
    //   spacebarPressed = [];
    // }

    if (keyCode === downArrow) {
      // this.player.jumpSound();
      // this.player.jump();
    }

    // if (keyCode === leftArrow) {
    //   // console.log(keyCode);
    //   // this.player.jumpSound();
    //   // this.player.jump();
    //   this.player.drawLeft();
    // }

    // if (keyCode === rightArrow) {
    //   // this.player.jumpSound();
    //   // console.log(keyCode);
    //   this.player.drawRight();
    // }
  }
}
