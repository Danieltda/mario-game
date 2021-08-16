class Player {
  constructor() {
    this.y = 310;
    this.x = 0;
    this.height = 70;
    this.width = 70;
    this.velocity = 5;
    this.rightBoundary = CANVAS_WIDTH - this.width;
    this.bottomBoundary = CANVAS_HEIGHT - this.height;
    this.jumps = 10;
    this.health = 2;
  }

  // Called when press up arrow
  jump() {
    spacebarPressed.push(keyCode);
    if (this.y > 100) {
      this.y -= 7;
      this.velocity -= 5;
    }

    if (this.jumps >= 1) {
      this.jumps -= 1;

      jumpsLeft.innerText = this.jumps;
    }

    if (this.jumps <= 5) {
      jumpsLeftFullText.style.color = "orange";
    }

    if (this.jumps === 0) {
      jumpsLeftFullText.style.color = "red";
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
    if (this.x >= 1025 && this.x < 1095 && this.y > 150 && this.y < 210) {
      image(star, 1050, 120, 70, 70);
      this.x = 1050;
      this.y = 180;
      this.velocity = 0;
    }

    // Logic for the starting position block
    if (this.x < 218 && this.y > 300 && this.y < 330) {
      this.velocity = 0;
      this.y = 310;
    }

    //Brick number 2
    if (this.x >= 279 && this.x < 350 && this.y > 210 && this.y < 240) {
      this.velocity = 0;
      this.y = 210;
    }

    //brick number 3
    if (this.x >= 470 && this.x < 544 && this.y > 320 && this.y < 350) {
      this.velocity = 0;
      this.y = 330;
    }

    //brick number 4
    if (this.x >= 770 && this.x < 1025 && this.y > 370 && this.y < 400) {
      this.velocity = 0;
      this.y = 380;
    }

    //brick numer 5
    if (this.x >= 1020 && this.x < 1100 && this.y > 270 && this.y < 300) {
      this.velocity = 0;
      this.y = 280;
    }

    //hit the question mark, play sound
    if (this.x >= 1025 && this.x < 1095 && this.y > 150 && this.y < 230) {
      stopBackgroundSound = false;
      this.soundCoin();
      coinChange.style.borderColor = "green";
      coinChange.placeholder = "STAR COLLECTED!";
    }

    if (this.y >= 460) {
      //if charachter hits the flames, it will jump up, deduct 1 point from health;
      this.burn();
      // this.y = this.floor;
      this.velocity = -9;
      if (this.y >= 430 && this.y < 80) {
        !this.jump();
      }
      this.healths();
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

  soundCoin() {
    let soundCoin = document.getElementsByClassName("coin")[0];
    soundCoin.play();
    stopBackgroundSound = true;
  }

  burn() {
    if (this.y >= 460) {
      let burnSound = document.getElementsByClassName("burn")[0];
      burnSound.play();
    }
  }

  healths() {
    this.health--;
    healthPlayer.innerText = this.health;
    if (this.health <= 1) {
      healthPlayerFullText.style.color = "orange";
    }
    if (this.health === 0) {
      healthPlayerFullText.style.color = "red";
    }
    console.log(health);
    // if (health < 0) {
    //   // this.death();
    // }
  }

  //   death() {
  //     alert("you are dead!");
  //   }
}
