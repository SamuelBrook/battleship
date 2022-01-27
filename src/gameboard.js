import Ship from "./ship";

class Gameboard {
  shipArray = [];

  placedShipLocations = [];

  constructor(shipCoordinates) {
    this.shipCoordinates = shipCoordinates;
  }

  callShips() {
    const shipA = new Ship(4);
    const shipB = new Ship(3);
    const shipC = new Ship(3);
    const shipD = new Ship(2);
    const shipE = new Ship(2);
    const shipF = new Ship(2);
    const shipG = new Ship(1);
    const shipH = new Ship(1);
    const shipI = new Ship(1);
    const shipJ = new Ship(1);
    const ships = [
      shipA,
      shipB,
      shipC,
      shipD,
      shipE,
      shipF,
      shipG,
      shipH,
      shipI,
      shipJ,
    ];
    this.shipArray = ships;
  }

  placeShips() {
    for (let i = 0; i < this.shipArray.length; i += 1) {
      const { shipLength } = this.shipArray[i];
      // if horizontal
      const locationsX = [this.shipCoordinates[i][0]];
      for (let j = 1; j <= shipLength; j += 1) {
        locationsX.push(this.shipCoordinates[i][0] + j);
      }
      const locationsY = [this.shipCoordinates[i][1]];
      const newShip = [locationsX, locationsY];
      this.placedShipLocations.push(newShip);
    }
  }

  attackReceived(shotCoordinates) {
    let matchX = false;
    let matchY = false;
    for (let i = 0; i < this.placedShipLocations.length; i += 1) {
      // let length = this.placedShipLocations[i][0].length;
      for (let j = 0; j < this.placedShipLocations[i][0].length; j += 1) {
        // go into the first element of the ships' coordinates (the x coordinates)
        // if the shot x coordinate is same as any x coordinate for this ship then matchX = true
        if (shotCoordinates[0] === this.placedShipLocations[i][0][j]) {
          matchX = true;
        }
      }
      for (let j = 0; j < this.placedShipLocations[i][1].length; j += 1) {
        // go into the second element of the ships' coordinates (the y coordinates)
        // if the shot y coordinate is the same as any y coordinate for this ship then matchY = true
        if (shotCoordinates[1] === this.placedShipLocations[i][1][j]) {
          matchY = true;
        }
      }
      if (matchX && matchY) {
        this.shipArray[i].hits += 1;
        this.shipArray[i].hasSunk();
        break;
      }
    }
  }

  allShipsSunk() {
    let counter = 0;

    for (let i = 0; i < this.shipArray.length; i += 1) {
      if (this.shipArray[i].sunk === true) {
        counter += 1;
      }
    }

    if (counter === this.shipArray.length) {
      return true;
    }
    return false;
  }
}

export default Gameboard;
