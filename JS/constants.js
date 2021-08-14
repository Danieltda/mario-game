const CANVAS_HEIGHT = 580;

const CANVAS_WIDTH = 1200;
let bgImage;
let song;
let mario;
let leftMario;
let lava;
let brick;

const GRAVITY = 0.3;

const upArrow = 38;
const downArrow = 40;
const leftArrow = 37;
const rightArrow = 39;
const spaceBar = 32;

let health = 2;

let spacebarPressed = [];

const getButton = document.getElementsByClassName("game-instructions");
let jumpsLeft = document.querySelector("h6 span");
let healthPlayer = document.querySelector("h5 span");
let jumpsLeftFullText = document.querySelector("h6");
let healthPlayerFullText = document.querySelector("h5");
