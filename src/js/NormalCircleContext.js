import Circle from "./NormalCircle.js"

export default class NormalCircleContext {
  constructor(ctx) {
    this.ctx = ctx; //Context
    console.log(ctx.canvas);

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    this.circleArray = [];
    for (var i = 0; i < 500; i++) {
      var radius = 30;
      var x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random() * (innerHeight - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 3;
      var dy = (Math.random() - 0.5) * 3;
      this.circleArray.push(new Circle(x, y, dx, dy, radius, ctx, this.mouse));
    }

    this.doAnimation = true;
    this.animate();
  }

  // Animation Time!
  animate() {
    if (this.doAnimation == true) {
      this.ctx.clearRect(0, 0, innerWidth, innerHeight);
      requestAnimationFrame(this.animate.bind(this));
      for (var i = 0; i < this.circleArray.length; i++) {
        this.circleArray[i].updateCircle();
      }
    }
  }

  // Stop animating and kill the event listener
  stopAll() {
    this.doAnimation = false;
  }
}


