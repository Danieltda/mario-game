class Player {
  constructor() {
    this.y = 500;
    this.x = CANVAS_HEIGHT / 8;
    this.height = 70;
    this.width = 70;
    this.velocity = 0;
  }

  jump() {
    this.y -= 20;
    this.velocity -= 5;
  }

  draw() {
    this.velocity += GRAVITY;
    this.y += this.velocity;

    // image(mario, 0, 310, this.width, this.height);
    // if (this.y === 310 && this.x === 150) {
    //   image(mario, 0, 310, this.width, this.height);
    // }

    // image(mario, this.x, this.y, this.width, this.height);
    if (this.x > 100) {
      image(mario, this.x, 310, this.width, this.height);
    }

    if (this.y >= 470) {
      this.burn();
      this.y = this.floor;
      this.velocity = -10;
    }
  }

  get floor() {
    return 500 - this.height;
  }

  drawRight() {
    this.x += CANVAS_HEIGHT / 60;
  }

  drawLeft() {
    this.x -= CANVAS_HEIGHT / 8;
  }

  // drawRight() {
  //   image(leftMario, this.x, this.y, this.width, this.height);
  // }

  jumpSoundUp() {
    let jumpSound = document.getElementsByClassName("jump-sound")[0];
    jumpSound.play();
  }

  burn() {
    if (this.y >= 470) {
      let burnSound = document.getElementsByClassName("burn")[0];
      burnSound.play();
    }
  }
}
