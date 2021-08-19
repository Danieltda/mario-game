const CANVAS_HEIGHT = 800;

const CANVAS_WIDTH = 1400;
let bgImage;
let song;
let mario;
let leftMario;
let lava;
let brick;
let star;
let gameOver;
let gameWinner;

const GRAVITY = 0.3;

const upArrow = 38;
const downArrow = 40;
const leftArrow = 37;
const rightArrow = 39;
let spaceBar = 32;

let health = 2;

let spacebarPressed = [];

const getButton = document.getElementsByClassName("game-instructions");
let jumpsLeft = document.querySelector("h6 span");
let healthPlayer = document.querySelector("h5 span");
let jumpsLeftFullText = document.querySelector("h6");
let healthPlayerFullText = document.querySelector("h5");
let coinChange = document.getElementById("starCollected");

let stopBackgroundSound = true;

const restartGame = 144;

const restartGames = document.getElementById("restart-game");
