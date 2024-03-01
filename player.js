class Player {
  constructor(gameScreen, left, bottom, width, height, imgSrc,right) {
    // Initialize properties
    this.gameScreen = gameScreen;
    this.left = left;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
    this.right = right;
    this.element = document.createElement("img");
    this.jumpSpeedX = 0; // Horizontal jump speed
    this.jumpSpeedY = 0; // Vertical jump speed
    this.gravity = 0.35; // Gravity value
    this.isJumping = false; // Jumping state
    // Set other necessary properties as needed

    // Configure player element
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.bottom = `${bottom}px`;

    // Append player element to the game screen
    this.gameScreen.appendChild(this.element);
  }

  // Method to handle player jump
  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      this.jumpSpeedY = 14; // Set vertical jump speed
    }
    
  }

  // Method to update player position
  updatePosition() {
    // Update player's position on the screen
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
  }

  // Method to handle player movement
  move() {
    // Implement player movement logic here if needed
    // Example:
    this.left += this.jumpSpeedX; // Update horizontal position
    this.bottom += this.jumpSpeedY; // Update vertical position

    // Apply gravity to the vertical jump speed
    if (this.isJumping) {
      this.jumpSpeedY -= this.gravity;
      if (this.bottom <= 0) {
        this.isJumping = false;
        this.jumpSpeedY = 0;
        this.bottom = 0;
      }
    }

    /// new code

    // Update player position
    this.updatePosition();
  }

  // Method to handle collision detection with obstacles
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
