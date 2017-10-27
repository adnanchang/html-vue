import CircleGrowWithOutFollow from "./CircleGrowWithOutFollow.js"

export default class CircleGrowWithOutFollowContext {
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
    for (var i = 0; i < 600; i++) {
      var radius = 30;
      var x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random() * (innerHeight - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 3;
      var dy = (Math.random() - 0.5) * 3;
      this.circleArray.push(new CircleGrowWithOutFollow(x, y, dx, dy, radius, ctx, this.mouse));
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

  //Line
  drawLine() {
    this.ctx.beginPath(); //Needed to start a new path else will connect to another line/shape
    this.ctx.moveTo(50,300);
    this.ctx.lineTo(300, 100);
    this.ctx.lineTo(400,300);
    this.ctx.strokeStyle = "#fa34a3"
    this.ctx.stroke();
  }

  //Rectangle OR Squares
  drawRecOrSquare(){
    this.ctx.fillStyle = "#28F300"
    this.ctx.fillRect(100,100,100,100);
  }

  //Arc OR Circle
  drawArc(){
    this.ctx.beginPath(); //Needed to start a new path else will connect to another line/shape
    this.ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
    this.ctx.strokeStyle = "#0055F3"
    this.ctx.stroke();
  }

  //Multiple Circles
  drawMultipleCircles(){
    for(var i = 0; i < 450; i++){
      var x = Math.random() * window.innerWidth; //Randomizing X Co-ordinate
      var y = Math.random() * window.innerHeight; //Randomizing Y Co-ordinate

      this.ctx.beginPath(); //Needed to start a new path else will connect to another line/shape
      this.ctx.arc(x, y, 30, 0, Math.PI * 2, false);
      this.ctx.strokeStyle = this.getRandomColor();
      this.ctx.stroke();
    }
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


