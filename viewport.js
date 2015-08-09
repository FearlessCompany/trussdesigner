//viewport handles the canvas grid and dimensions
//functions
//drawGrid(canvas); draws the grid on the canvas. the grid represents 1 foot intervals
function viewport(xLoc, yLoc, zLoc, sW, sH, sD, xThe, yThe, zThe) {
  this.xLoc = xLoc;
  this.yLoc = yLoc;
  this.zLoc = zLox;
  this.sW = sW;
  this.sH = sH;
  this.sD = sD;
  this.xThe = xThe;
  this.yThe = yThe;
  this.zThe = zThe;
  this.zoom = function (percent) {

  }
}

function drawGrid(can, gridScale){
  console.log("drawing grid")
  ctx = can.getContext('2d');
  ctx.strokeStyle ="#858585"
  ctx.beginPath();
  ctx.moveTo(gridWidth, 0)
  // draws vertical lines
  c = 1;
  while(gridWidth*c <= can.width){
    ctx.lineTo(gridWidth*c, can.height);
    ctx.stroke();
    c = c+1;
    ctx.moveTo(gridWidth*c, 0);
  }
  // draw horizontal lines
  ctx.moveTo(0, gridHeight);
  c = 1;
  while(gridHeight*c <= can.height){
    ctx.lineTo(can.width, gridHeight*c);
    ctx.stroke();
    c = c+1;
    ctx.moveTo(0, gridHeight*c)

  }
}
