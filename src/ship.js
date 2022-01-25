class Ship {
  sunk = false;
  hits = 0;
  constructor(shipLength) {
    this.shipLength = shipLength;
  }
  hasSunk() {
    if (this.hits === this.shipLength) {
      this.sunk = true;
    }
  }
}

export default Ship;
