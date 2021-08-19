class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
  }

  restartGame() {
    if (isLooping()) {
      return;
    }

    loop();
  }

  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  draw() {
    this.background.draw();
    this.player.draw();
    jumpsLeft.innerText = this.player.jumps;
    healthPlayer.innerText = this.player.health;

    // movement player left and right
    if (keyIsDown(LEFT_ARROW)) {
      this.player.x -= 3;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.player.x += 3;
    }
    // if (frameCount % 600 === 0) {
    //   // each 10 seconds
    //   console.log("GAME OVER, COUNT POINTS");
    //   noLoop(); // stops the loop
    // }
  }

  keyPressed() {
    if (spaceBar == 32) {
      if (keyCode === spaceBar) {
        if (spacebarPressed.length < 10) {
          this.player.jumpSoundUp();
          this.player.jump();
        } else if (spacebarPressed.length >= 10) {
          this.player.marioTiredSound();
        }
      }
    }

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
