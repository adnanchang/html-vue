export default class CircleGrowWithFollow {
  constructor(x, y, dx, dy, radius, minRadius, maxRadius, color, ctx, mouse){
      this.x = x; // X Coordinate
      this.y = y; // Y Coordinate
      this.dx = dx; //Velocity of shapes moving X Axis
      this.dy = dy; //Velocity of shapes moving Y Axis
      this.radius = radius; //Radius of the circle
      this.minRadius = minRadius;
      this.maxRadius = maxRadius;
      this.color = color;
      this.ctx = ctx;
      this.mouse = mouse;
  }

  //Circle
  drawCircle(x, y) {
    this.ctx.beginPath(); //Needed to start a new path else will connect to another line/shape
    this.ctx.arc(x, y, this.radius, 0, Math.PI * 2, false);
    // this.ctx.strokeStyle = "#0055F3"
    // this.ctx.stroke();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  updateCircle() {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      if (this.mouse.x - this.x < 100 && this.mouse.x - this.x > -100
          && this.mouse.y - this.y < 100 && this.mouse.y - this.y > -100) {
          if (this.radius < this.maxRadius){
              this.radius += 1;
          }
      }
      else if (this.radius > this.minRadius) {
          this.radius -= 1;
      }

      this.drawCircle(this.x, this.y);
  }

  //Get random Hex color
  getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
}
