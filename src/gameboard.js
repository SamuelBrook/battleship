import Ship from "./ship";

class Gameboard {
  allSunk = false;
  shipArray = [];
  placedShipLocations = [];

  constructor(shipCoordinates) {
    this.shipCoordinates = shipCoordinates;
  }

  callShips() {
    let shipA = new Ship(4);
    let shipB = new Ship(3);
    let shipC = new Ship(3);
    let shipD = new Ship(2);
    let shipE = new Ship(2);
    let shipF = new Ship(2);
    let shipG = new Ship(1);
    let shipH = new Ship(1);
    let shipI = new Ship(1);
    let shipJ = new Ship(1);
    let ships = [
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
    for (let i = 0; i < this.shipArray.length; i++) {
      let shipLength = this.shipArray[i].shipLength;
      //if horizontal
      let locationsX = [this.shipCoordinates[i][0]];
      for (let j = 1; j <= shipLength; j++) {
        locationsX.push(this.shipCoordinates[i][0] + j);
      }
      let locationsY = [this.shipCoordinates[i][1]];
      let newShip = [locationsX, locationsY];
      this.placedShipLocations.push(newShip);
    }
  }

  attackReceived(shotCoordinates) {
    let matchX = false;
    let matchY = false;
    for (let i = 0; i < this.placedShipLocations.length; i++) {
      // let length = this.placedShipLocations[i][0].length;
      for (let j = 0; j < this.placedShipLocations[i][0].length; j++) {
        //go into the first element of the ships' coordinates (the x coordinates)
        //if the shot x coordinate is the same as any of the x coordinates for this ship then matchX = true
        if (shotCoordinates[0] === this.placedShipLocations[i][0][j]) {
          matchX = true;
        }
      }
      for (let j = 0; j < this.placedShipLocations[i][1].length; j++) {
        //go into the second element of the ships' coordinates (the y coordinates)
        //if the shot y coordinate is the same as any of the y coordinates for this ship then matchY = true
        if (shotCoordinates[1] === this.placedShipLocations[i][1][j]) {
          matchY = true;
        }
      }
      if (matchX === true && matchY === true) {
        this.shipArray[i].hits++;
        break;
      }
    }
  }

  allShipsSunk() {
    let counter = 0;

    for (let i = 0; i < this.shipArray.length; i++) {
      if (this.shipArray[i].sunk === true) {
        counter++;
      }
    }

    if (counter === this.shipArray.length) {
      this.allSunk = true;
    }
  }
}

export default Gameboard;
