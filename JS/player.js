class Player {
  constructor() {
    this.y = 310;
    this.x = 0;
    this.height = 70;
    this.width = 70;
    this.velocity = 5;
    this.rightBoundary = CANVAS_WIDTH - this.width;
    this.bottomBoundary = CANVAS_HEIGHT - this.height;
  }

  // Called when press up arrow
  jump() {
    // spacebarPressed.push(keyCode);
    // console.log(spacebarPressed);
    if (this.y > 100) {
      this.y -= 30;
      this.velocity -= 5;
    }
  }

  draw() {
    this.velocity += GRAVITY;
    this.y += this.velocity;
    this.maintainBoundaries();

    // image(mario, 0, 310, this.width, this.height);
    // if (this.y === 310 && this.x === 150) {
    //   image(mario, 0, 310, this.width, this.height);
    // }

    image(mario, this.x, this.y, this.width, this.height);
    // if (this.x > 100) {
    //   image(mario, this.x, 310, this.width, this.height);
    // }

    // Logic for the starting position block
    if (this.x < 215 && this.y > 310) {
      this.velocity = 0;
      this.y = 310;
    } else if (this < 215 && this.y) {
    }

    if (this.y >= 470) {
      //if charachter hits the flames, it will jump up, deduct 1 point from health;
      this.burn();
      // this.y = this.floor;
      this.velocity = -11;
      if (this.y >= 430 && this.y < 80) {
        !this.jump();
      }
      this.health();
    }
  }

  get floor() {
    return 500 - this.height;
  }

  // side boundaries are locked
  maintainBoundaries() {
    if (this.x >= this.rightBoundary) {
      //   this.x = this.rightBoundary;
      this.x = this.rightBoundary;
    }
    if (this.y >= this.bottomBoundary) {
      //   this.y = this.bottomBoundary;
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.velocity += 0.5;
    }
  }

  // drawRight() {
  //   // this.velocity += 20;
  //   // this.x += this.velocity;
  //   this.x += 30;
  // }

  // drawLeft() {
  //   // this.velocity += 20;
  //   // this.x -= this.velocity;
  //   this.x -= 30;
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

  health() {
    health--;
    console.log(health);
    if (health < 0) {
      // this.death();
    }
  }

  //   death() {
  //     alert("you are dead!");
  //   }
}
