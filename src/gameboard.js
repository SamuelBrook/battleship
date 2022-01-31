import Ship from "./ship";

class Gameboard {
  shipArray = [];

  shipCoordinatesCreated = [];

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

  createRandomShipCoordinates() {
    const allShipsCoordinates = [];

    function checkCoordinates(coordinates) {
      for (let i = 0; i < this.shipCoordinates.length; i += 1) {
        for (let j = 0; j < this.shipCoordinates[i].length; i += 1) {
          for (let k = 0; k < coordinates.length; k += 1) {
            if (this.shipCoordinates[j] === coordinates[k]) {
              return false;
            }
          }
        }
      }
      return true;
    }

    function createCoordinates(i) {
      // for one ship
      let coordinateX = [];
      let coordinateY = [];

      const allShipCoordinates = [];
      const direction = Math.floor(Math.random() * 2);
      const { shipLength } = this.shipArray[i];
      if (direction === 0) {
        coordinateX = Math.floor(Math.random() * (10 - (shipLength - 1)));
        coordinateY = Math.floor(Math.random() * 10 + 1);
        for (let j = 0; j < shipLength; j += 1) {
          allShipCoordinates.push([coordinateX + j, coordinateY]);
        }
      } else {
        coordinateY = Math.floor(Math.random() * (10 - (shipLength - 1)));
        coordinateX = Math.floor(Math.random() * 10 + 1);
        for (let j = 0; j < shipLength; j += 1) {
          allShipCoordinates.push([coordinateY + j, coordinateX]);
        }
      }
      const checked = checkCoordinates(allShipCoordinates);
      if (checked) {
        allShipsCoordinates.push(allShipCoordinates);
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
