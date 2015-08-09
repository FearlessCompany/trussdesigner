//truss objects
//physical variables:
//length describes the length of the truss
//width describes the width of the truss
//depth describes the debth of a truss
//x describes the x location of the truss
//y describes the y location of the truss
//tAngle is the angle of the primary end of the truss
//curve1 and curve2 describe the curvature of the truss
//  for now, curves are a bezier handle thing
//  lets put this on a much lower priority
//the connect array describes what the truss is attached to

// interface variables
// selected: lets the main functions know this truss is selected
// active: lets the main functions know this truss is active (being edited)

// methods
// drawActive(canvas); draws the truss as active
// drawSelected(canvas); draws the truss as selected
// drawTruss(canvas); draw the truss
// newTruss(); opens the new truss dialogue
// deleteTruss(); removes a truss


function truss(tLength, tWidth, tX, tY, tAngle, tCurve1, tCurve2, tConnect, tSelected, tActive){
  // internal settings
  activeColor = "red"
  selectedColor ="cyan"
  truss="gray"
  // truss physical variables
  this.tLength = tLength;
  this.tWidth = tWidth;
  this.tX = tX;
  this.tY = tY;
  this.tAngle = tAngle;
  this.tCurve1 = tCurve1;
  this.tCurve2 = tCurve2;
  this.tConnect = tConnect;
  // truss interface variables
  this.tSelected = tSelected;
  this.tActive = tActive;

  // truss methods
  this.drawActive = function (can) {
    ctx = can.getContext('2d');

  }
}
