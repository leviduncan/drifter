export class Car {
    constructor(x, y, width, height, color, speed) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.speed = speed;
    }
  
    update(canvas) {
      this.x += this.speed;
      if (this.x > canvas.width) {
        this.x = -this.width;
      }
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  
  export class Log {
    constructor(x, y, width, height, color, speed) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.speed = speed;
    }
  
    update(canvas) {
      this.x += this.speed;
      if (this.x + this.width < 0) {
        this.x = canvas.width;
      }
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  