class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.scoreBoard = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.player = new Player(
      this.gameScreen,
      100,
      10,
      100,
      200,
      "./images/avatar.png"
    );
    //gameScreen, left, bottom, width, height, imgSrc
    this.height = 450;
    this.width = 1080;
    this.obstacle = [new Obstacle(this.gameScreen)];
    this.score = 0;
    this.lives = 1;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
  }

  start() {
    // height width -> game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // Hide start screen
    this.startScreen.style.display = "none";

    // Show game screen
    this.gameScreen.style.display = "block";

    // 60fps
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  restart() {
    console.log("calisiyor restart");
    this.gameIsOver = false;
    this.score = 0;
    this.lives = 1;
    this.gameEndScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.start();
    this.livesElement.innerText = this.lives;
    this.scoreBoard.innerText = this.score;
  }

  gameLoop() {
    //console.log("oyunda");

    this.update();

    // If gameisover true clear interval
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
  }
  update() {
    this.player.move();
    this.obstacle.forEach((zukoZuko, index) => {
      zukoZuko.move();
      if (zukoZuko.left < 0) {
        this.obstacle.splice(index, 1);
        zukoZuko.element.remove();
        this.obstacle.push(new Obstacle(this.gameScreen));
        // update score
        this.score++;
        this.scoreBoard.innerText = this.score;
      }

      //collision
      if (this.player.didCollide(zukoZuko, index)) {
        console.log("bang!");
        this.obstacle.splice(index, 1);
        zukoZuko.element.remove();
        this.obstacle.push(new Obstacle(this.gameScreen));
        this.lives--;
        this.livesElement.innerText = this.lives;

        //checking the lives
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }
      if (this.score % 3 === 0) {
        console.log("here");
        this.zukoZuko += 0.4;
      }
    });
  }
  gameOver() {
    console.log(" game is over ");

    this.gameScreen.style.display = "none";

    this.gameEndScreen.style.display = "block";
  }
}
