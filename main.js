const game = new Game();

function draw() {
  game.draw();
}

function setup() {
  game.setup();
}

function preload() {
  bgImage = loadImage("./assets/fa1fae92d257e53fc79cfa3cecb3bc1e.jpg");
  mario = loadImage("./assets/MarioNSMB2.png");
  lava = loadImage("./assets/lava.png");
  brick = loadImage("./assets/brick.JPG");
  brick2 = loadImage("./assets/brick2.JPG");
  brick3 = loadImage("./assets/brick 3.JPG");
  brickQuestionMark = loadImage("./assets/brickQuestionMark.JPG");

  // leftMario = loadImage("/assets/leftMario.png");
}

function keyPressed() {
  game.keyPressed();
}
