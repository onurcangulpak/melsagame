class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = 1080;
    this.bottom = 7;
    this.width = 70;
    this.height = 100;
    this.element = document.createElement("img");

    this.element.src = "../images/zuko.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`; // "this.width" olarak güncellendi
    this.element.style.height = `${this.height}px`; // "this.height" olarak güncellendi
    this.element.style.left = `${this.left}px`; // "this.left" olarak güncellendi
    this.element.style.bottom = `${this.bottom}px`; // "this.bottom" olarak güncellendi

    // Append obstacle element to the game screen
    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left -= 4;
    this.updatePosition();
  
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
  }
}
