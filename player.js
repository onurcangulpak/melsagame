class Player {
  constructor(gameScreen, left, bottom, width, height, imgSrc,right) {

    this.gameScreen = gameScreen;
    this.left = left;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
    this.right = right;
    this.element = document.createElement("img");
    this.jumpSpeedX = 0; // Horizontal  speed
    this.jumpSpeedY = 0; // Vertical  speed
    this.gravity = 0.35; // Gravity 
    this.isJumping = false; // Jumping 
    

   
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.bottom = `${bottom}px`;

    
    this.gameScreen.appendChild(this.element);
  }

  // player jump
  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      this.jumpSpeedY = 14; //  vertical speed
    }
    
  }

  
  updatePosition() {
    // Update players position 
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
  }

  // Method to handle player movement
  move() {
    // 

    this.left += this.jumpSpeedX; //  h
    this.bottom += this.jumpSpeedY; // v

    //  vertical jump speed
    if (this.isJumping) {
      this.jumpSpeedY -= this.gravity;
      if (this.bottom <= 0) {
        this.isJumping = false;
        this.jumpSpeedY = 0;
        this.bottom = 0;
      }
    }


    // Update player position
    this.updatePosition();
  }

  // collision detection with obstacles
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
