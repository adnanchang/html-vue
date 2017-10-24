import CircleGrowWithFollow from './CircleGrowWithFollow'

export default class CircleGrowWithFollowContext {
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
    /*
    Since we are using bind we have to save it 
    in a separate variable so we can access
    the object again
    */
    this.handler = this.mouseMoveEventListener.bind(this); 
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
    window.addEventListener('mousemove', this.handler);
  }

  // Stop animating and kill the event listener
  stopAll() {
    window.removeEventListener('mousemove', this.handler);
    this.doAnimation = false;
  }

  // Function for mouseMove to add to Event Listener
  // An explicit function name is needed to remove it later on
  mouseMoveEventListener(event){
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }
}


