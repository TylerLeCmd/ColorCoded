function Platform(xp, yp, wl, hl) {
    this.x = xp;
    this.y = yp;
    this.w = wl;
    this.h = hl;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
} 