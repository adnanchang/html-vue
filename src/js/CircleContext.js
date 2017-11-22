import Circle from "./Circle.js"

export default class CircleContext {
  constructor(ctx) {
    this.ctx = ctx; //Context
    console.log(ctx.canvas);

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    // this.circleArray = [];
    // for (var i = 0; i < 500; i++) {
    //   var radius = 30;
    //   var x = Math.random() * (innerWidth - radius * 2) + radius;
    //   var y = Math.random() * (innerHeight - radius * 2) + radius;
    //   var dx = (Math.random() - 0.5) * 3;
    //   var dy = (Math.random() - 0.5) * 3;
    //   this.circleArray.push(new Circle(x, y, dx, dy, radius, ctx, this.mouse));
    // }
    this.radius = 30;
    this.x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
    this.y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
    this.dx = (Math.random() - 0.5) * 12;
    this.dy = (Math.random() - 0.5) * 12;
    this.aCircle = new Circle(this.x, this.y, this.dx, this.dy, this.radius, this.ctx);
    this.animate();
  }

  // Animation Time!
  animate() {
    //FIRST
    // this.ctx.clearRect(0, 0, innerWidth, innerHeight);
    // this.aCircle.drawCircle(100,450);

    //LATER
    this.ctx.clearRect(0, 0, innerWidth, innerHeight);
    this.aCircle.updateCircle();
    requestAnimationFrame(this.animate.bind(this));
  }

  // Stop animating and kill the event listener
  stopAll() {
    // NOTHING TO DO HERE JUST LET IT BE :)
  }
}


