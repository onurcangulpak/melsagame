class Player {
  constructor(gameScreen, left, bottom, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
    this.element = document.createElement("img");

    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.bottom = `${bottom}px`;

    this.gameScreen.appendChild(this.element);

    // Jump parameters
    this.jumpStrength = 18; // Zıplamanın yüksekliği
    this.jumpSpeed = 1.5; // Zıplama hızı
    this.gravity = 0.6; // Yerçekimi
    this.fallSpeed = -1; // Düşme hızı
    this.isJumping = false; // Zıplama durumunu takip eder
  }

  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      const initialBottom = this.bottom;
      let jumpHeight = 0;

      const jumpInterval = setInterval(() => {
        jumpHeight += this.jumpSpeed;
        this.bottom +=
          this.jumpSpeed * this.jumpStrength - this.gravity * jumpHeight;
        this.updatePosition();

        if (jumpHeight >= this.jumpStrength / this.jumpSpeed) {
          clearInterval(jumpInterval);

          const fallInterval = setInterval(() => {
            this.bottom -= this.fallSpeed; // Düşme hızını kullan
            this.fallSpeed += this.gravity; // Düşme hızını artır
            this.updatePosition();

            if (this.bottom <= initialBottom) {
              clearInterval(fallInterval);
              this.bottom = initialBottom;
              this.isJumping = false;
              this.fallSpeed = 5; // Düşme hızını sıfırla
              this.updatePosition();
            }
          }, 16);
        }
      }, 16);
    }
  }
  // ... HERSEY CALISIYOR
  move() {
    // Implement the movement logic here if needed
  }

  didCollide(obstacles) {
    // Implement collision detection logic here if needed
  }

  updatePosition() {
    this.element.style.bottom = `${this.bottom}px`;
  }
}
