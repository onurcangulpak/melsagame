class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      100,
      10,
      100,
      200,
      "../images/avatar.png"
    );
    //gameScreen, left, bottom, width, height, imgSrc
    this.height = 450;
    this.width = 1080;
    this.obstacle = [new Obstacle(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
  }

  start() {
    // Set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // Hide the start screen
    this.startScreen.style.display = "none";

    // Show the game screen
    this.gameScreen.style.display = "block";

    // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    //console.log("in the game loop");

    this.update();

    // If "gameIsOver" is set to "true" clear the interval to stop the loop
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }
  update() {
    this.player.move();
    this.obstacle.forEach((zukoZuko, index) => {
      zukoZuko.move();
      if (zukoZuko.left < 185) {
        // Check for collision
        if (!this.player.didCollide(zukoZuko)) {
          // If no collision, increment the score
          console.log("the score is");
          this.score++;
        }

        // Remove the obstacle from the array and the DOM
        this.obstacle.splice(index, 1);
        zukoZuko.element.remove();

        // Add a new obstacle
        this.obstacle.push(new Obstacle(this.gameScreen));
      }
      if (this.player.didCollide(zukoZuko)) {
        console.log("bang!");
      }
    });
  }
}
