function blob(bColor, bViscous, bSlimy){
  this.bColor=bColor;
  this.bViscous = bViscous;
  this.bSlimy = bSlimy;
  this.mass = 40;
  this.desc = bColor + ", " + bViscous + ", and " + bSlimy;
  this.eats = function (target) {
    return("Blob ate " + target + "!");
  }
}
