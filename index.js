const grid = document.querySelector(".grid");
const startButton = document.getElementById("start");
const score = document.getElementById("score");
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
const width = 10;
let appleIndex = 0;
let scoreTally = 0;
let startTime = 1000;
let speed = 0.9;
function createGrid() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
    squares.push(square);
  }
}
createGrid();

currentSnake.forEach((index) => squares[index].classList.add("snake"));

function startGame() {
  let timerId = setInterval(move, startTime);
}

function move() {
  if (
    (currentSnake[0] + width >= width * width && direction === width) ||
    (currentSnake[0] % width === 9 && direction === 1) ||
    (currentSnake[0] % width === 0 && direction === -1) ||
    (currentSnake[0] - width < 0 && direction === -width) ||
    squares[currentSnake[0] + direction].classList.contains("snake")
  )
    return clearInterval(timerId);

  const tail = currentSnake.pop();
  squares[tail].classList.remove("snake");
  currentSnake.unshift(currentSnake[0] + direction);
  squares[currentSnake[0]].classList.add("snake");

  if (squares[currentSnake[0]].classList.contains("apple")) {
    squares[currentSnake[0]].classList.remove("apple");
    squares[tail].classList.add("snake");
    currentSnake.push(tail);
    makeApples();
    scoreTally++;
    score.textContent = scoreTally;
    startTime = startTime * speed;
    clearInterval(timerId);
    timerId = setInterval(move, intervalTime);
  }
}

function makeApples() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake"));
  squares[appleIndex].classList.add("apple");
}
makeApples();

function control(e) {
  switch (e.keyCode) {
    case 40:
      console.log("down pressed");
      direction = +width;
      break;
    case 39:
      direction = 1;
      console.log("right pressed");
      break;
    case 38:
      direction = -width;
      console.log("up pressed");
      break;
    case 37:
      direction = -1;
      console.log("left pressed");
      break;
  }
}

document.addEventListener("keyup", control);
startButton.addEventListener("click", startGame);
