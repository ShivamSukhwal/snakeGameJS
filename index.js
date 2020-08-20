const grid = document.querySelector(".grid");
const startButton = document.getElementById("start");
const score = document.getElementById("score");
let squares = [];
let currentSnake = [2, 1, 0];

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
  currentSnake.unshift(currentSnake[0] + 1);
  squares[currentSnake[0]].classList.add("snake");
}

let timerId = setInterval(move, 4000);

function control(e) {
  switch (e.keyCode) {
    case 40:
      console.log("down pressed");
      break;
    case 39:
      console.log("right pressed");
      break;
    case 38:
      console.log("up pressed");
      break;
    case 37:
      console.log("left pressed");
      break;
  }
}

document.addEventListener("keyup", control);
