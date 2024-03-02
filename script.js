window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const game = new Game();

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    console.log("restart clicked");

    game.restart();
  });

  // Event listener 
  document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
      // Check if spaces pressed
      game.player.jump(); // Trigger jump of player
    }
  });

  function startGame() {
    console.log("start game");
    game.start();
  }
};


