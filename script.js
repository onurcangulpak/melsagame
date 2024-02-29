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

  // Event listener for keydown event
  document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
      // Check if space bar is pressed
      game.player.jump(); // Trigger jump action for the player
    }
  });

  function startGame() {
    console.log("start game");
    game.start();
  }
};

///////////////// GELIYORUZ///////////////// GELIYORUZ///////////////// GELIYORUZ///////////////// GELIYORUZ
///////////////// GELIYORUZ///////////////// GELIYORUZ
///////////////// GELIYORUZ
