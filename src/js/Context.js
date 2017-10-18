import Circle from "./Circle.js"

export default class Context {
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
      var x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random() * (innerHeight - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 3;
      var dy = (Math.random() - 0.5) * 3;
      this.circleArray.push(new Circle(x, y, dx, dy, radius, ctx, this.mouse));
    }

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
    this.ctx.clearRect(0, 0, innerWidth, innerHeight);
    requestAnimationFrame(this.animate.bind(this));
    for (var i = 0; i < this.circleArray.length; i++) {
      this.circleArray[i].updateCircle();
    }
  }

  // Move Mouse! 
  mouseMove() {
    var mouse = this.mouse;
    window.addEventListener('mousemove', function(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });
  }
}


