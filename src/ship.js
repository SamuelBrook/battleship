class Ship {
  sunk = false;
  constructor(length, hit) {
    this.length = length;
    this.hit = hit;
  }
  hit() {}
  hasSunk() {
    if (this.hit === this.length) {
      this.sunk = true;
    }
  }
}

export default Ship;
