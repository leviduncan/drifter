export class Player {
    constructor(x, y, width, height, color, blockSize) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.blockSize = blockSize;
        this.speedX = 0;
        this.speedY = 0;
    }

    handleInput(e) {
        switch (e.key) {
            case "ArrowLeft":
                this.x -= this.blockSize;
                this.speedX = 0;
                this.speedY = 0;
                break;
            case "ArrowRight":
                this.x += this.blockSize;
                this.speedX = 0;
                this.speedY = 0;
                break;
            case "ArrowUp":
                this.y -= this.blockSize;
                this.speedX = 0;
                this.speedY = 0;
                break;
            case "ArrowDown":
                this.y += this.blockSize;
                this.speedX = 0;
                this.speedY = 0;
                break;
        }
        console.log(this.blockSize)
    }

    update(canvas) {
        // Ensure the player stays within the canvas boundaries
        this.x = Math.max(0, Math.min(canvas.width - this.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height - this.height, this.y));
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}