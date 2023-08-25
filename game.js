import { Player } from './player.js';
import { Car, Log } from './obstacles.js';

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 40;
canvas.width = 13 * gridSize;
canvas.height = 12 * gridSize;

const player = new Player(canvas.width / 2 - gridSize / 2, canvas.height - gridSize, gridSize, gridSize, "green", gridSize);

const obstacles = [
  new Car(0, 150, gridSize * 2, gridSize, "red", 2),
  new Car(120, 150, gridSize * 2, gridSize, "purple", 2),
  new Car(240, 150, gridSize * 2, gridSize, "red", 2),
  new Car(6, 200, gridSize * 2, gridSize, "orange", 2.5),
  new Log(10, 250, gridSize * 3, gridSize, "pink", -3.5),
  new Car(30, 100, gridSize * 2, gridSize, "blue", 1),
  new Car(0, 100, gridSize * 2, gridSize, "yellow", 1),
  new Car(30, 50, gridSize * 2, gridSize, "aqua", 3),
  new Car(0, 50, gridSize * 2, gridSize, "brown", 3),
  new Log(0, 300, gridSize * 3, gridSize, "brown", -1.5),
  new Log(160, 350, gridSize * 3, gridSize, "blue", -1.7)
];

let isGameRunning = true; // Flag to control the game loop

function gameLoop() {

    if (!isGameRunning) {
        return; // Stop the game loop
      }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player.update(canvas); // Add player update method
  player.draw(ctx);

  obstacles.forEach(obstacle => {
    obstacle.update(canvas);
    obstacle.draw(ctx);

        // Check for collision between player and obstacle
        if (
            player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y
          ) {
            isGameRunning = false; // Stop the game on collision
            console.log("Collision detected!");
          }

  });

  requestAnimationFrame(gameLoop);
}

canvas.addEventListener("keydown", (e) => player.handleInput(e));
canvas.addEventListener("keyup", (e) => player.handleInput(e));


gameLoop();
