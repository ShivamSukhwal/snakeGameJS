const grid = document.querySelector(".grid");
const startButton = document.getElementById("start");
const score = document.getElementById("score");
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
let width = 10;

function createGrid() {
  for (let i = 0; i < 100; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
    squares.push(square);
  }
}
createGrid();

currentSnake.forEach((index) => squares[index].classList.add("snake"));

function move() {
  const tail = currentSnake.pop();
  squares[tail].classList.remove("snake");
  currentSnake.unshift(currentSnake[0] + direction);
  squares[currentSnake[0]].classList.add("snake");
}

let timerId = setInterval(move, 1000);

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
