import Ship from "./ship";

class Gameboard {
  shipArray = [];

  shipCoordinatesCreated = [];

  placedShipLocations = [];

  hits = 0;

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

  createRandomShipCoordinates() {
    const allShipsCoordinates = [];
    const shipArrayA = this.shipArray;

    function checkCoordinates(coordinates) {
      for (let i = 0; i < coordinates.length; i += 1) {
        for (let j = 0; j < allShipsCoordinates.length; j += 1) {
          for (let k = 0; k < allShipsCoordinates[j].length; k += 1) {
            if (
              coordinates[i][0] === allShipsCoordinates[j][k][0] &&
              coordinates[i][1] === allShipsCoordinates[j][k][1]
            ) {
              return false;
            }
          }
        }
      }
      // for (let i = 0; i < allShipsCoordinates.length; i += 1) {

      // }
      return true;
    }

    function createCoordinates(i) {
      // for one ship
      let coordinateX = [];
      let coordinateY = [];

      const shipCoordinates = [];
      const direction = Math.floor(Math.random() * 2);
      const length = shipArrayA[i].shipLength;
      if (direction === 0) {
        coordinateX = Math.floor(Math.random() * (10 - (length - 1)));
        coordinateY = Math.floor(Math.random() * 10 + 1);
        for (let j = 0; j < length; j += 1) {
          shipCoordinates.push([coordinateX + j, coordinateY]);
        }
      } else {
        coordinateY = Math.floor(Math.random() * (10 - (length - 1)));
        coordinateX = Math.floor(Math.random() * 10 + 1);
        for (let j = 0; j < length; j += 1) {
          shipCoordinates.push([coordinateX, coordinateY + j]);
        }
      }
      const checked = checkCoordinates(shipCoordinates);
      if (checked) {
        allShipsCoordinates.push(shipCoordinates);
      } else {
        createCoordinates(i);
      }
    }

    for (let i = 0; i < this.shipArray.length; i += 1) {
      createCoordinates(i);
    }

    this.shipCoordinatesCreated = allShipsCoordinates;
  }

  placeShips(shipCoordinates) {
    if (shipCoordinates) {
      for (let i = 0; i < this.shipArray.length; i += 1) {
        const { shipLength } = this.shipArray[i];
        // if horizontal
        const locationsX = [shipCoordinates[i][0]];
        for (let j = 1; j <= shipLength; j += 1) {
          locationsX.push(shipCoordinates[i][0] + j);
        }
        const locationsY = [shipCoordinates[i][1]];
        const newShip = [locationsX, locationsY];
        this.placedShipLocations.push(newShip);
      }
    } else {
      this.placedShipLocations = this.shipCoordinatesCreated;
    }
  }

  attackReceived(shotCoordinates) {
    let hit = false;
    const shotX = shotCoordinates[0];
    const shotY = shotCoordinates[1];
    for (let i = 0; i < this.placedShipLocations.length; i += 1) {
      for (let j = 0; j < this.placedShipLocations[i].length; j += 1) {
        const shipX = this.placedShipLocations[i][j][0];
        const shipY = this.placedShipLocations[i][j][1];
        if (shipX === shotX && shipY === shotY) {
          this.shipArray[i].hits += 1;
          this.shipArray[i].hasSunk();
          hit = true;
        }
      }
    }
    return hit;
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
