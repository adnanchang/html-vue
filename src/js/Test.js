
export default class Test {
  constructor(ctx) {
    this.ctx = ctx;
    console.log(ctx.canvas);

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

  }

  drawLine() {
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(this.ctx.canvas.width,this.ctx.canvas.height);
    this.ctx.stroke();
  }
}


