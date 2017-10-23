import CircleGrowWithFollow from './CircleGrowWithFollow'

export default class CGWFContext {
  constructor(ctx) {
    this.ctx = ctx; //Context
    console.log(ctx.canvas);

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    this.mouse = {
      x: undefined,
      y: undefined
    }

    this.circleArray = [];
    for (var i = 0; i < 500; i++) {
      var radius = 30;
      var minRadius = 2;
      var maxRadius = 40;
      var x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random() * (innerHeight - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 3;
      var dy = (Math.random() - 0.5) * 3;
      this.circleArray.push(new CircleGrowWithFollow(x, y, dx, dy, radius, minRadius, maxRadius, ctx, this.mouse));
    }

    this.doAnimation = true;
    this.animate();
    this.mouseMove();
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

  // Move Mouse!
  mouseMove() {
    var mouse = this.mouse;
    if (this.doAnimation == true) {
      console.log("I AM ADDING EVENT LISTENER");
      window.addEventListener('mousemove', function(event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        console.log("Mouse moved in WITH FOLLOW");
      });
    }
  }

  // Stop animating and kill the event listener
  stopAll() {
    window.removeEventListener('mousemove', function (event) {});
    this.doAnimation = false;
    console.log("WIHT FOLLOW EVENT REMOVED");
  }
}


