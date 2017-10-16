
export default class Test {
  constructor(x, y, ctx) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    console.log(ctx.canvas);
    console.log("X Coordinate " + x);
    console.log("Y Coordinate " + y);

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    this.drawLine();
    this.drawRecOrSquare();
    //this.drawArc();
    //this.drawMultipleCircles();

    this.x = 200;
    this.animate();
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

  //Circle
  drawCircle(x) {
    this.ctx.beginPath(); //Needed to start a new path else will connect to another line/shape
    this.ctx.arc(x, 300, 30, 0, Math.PI * 2, false);
    this.ctx.strokeStyle = "#0055F3"
    this.ctx.stroke();
  }

  // Animation Time!
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.drawCircle(this.x);
    this.x += 1;
  }
}


