class Player {
  shotArray = [0, 0];

  makeShot(playerShot) {
    // eslint-disable-next-line consistent-return
    function autoShot(shotArray) {
      const autoShotX = Math.floor(Math.random() * 10) + 1;
      const autoShotY = Math.floor(Math.random() * 10) + 1;
      const autoShotCoordinates = [autoShotX, autoShotY];
      if (shotArray.includes(autoShotCoordinates)) {
        this.autoshot();
      } else {
        return autoShotCoordinates;
      }
    }

    if (playerShot) {
      let playerShotUsed = false;
      for (let i = 0; i < this.shotArray.length; i += 1) {
        if (this.shotArray[i] === playerShot) {
          playerShotUsed = true;
        }
      }
      if (playerShotUsed) {
        // shouldnt work and player can take a shot again
        console.log("nada");
      } else {
        this.shotArray.push(playerShot);
        return playerShot;
      }
    } else {
      const computerShot = autoShot(this.shotArray);
      this.shotArray.push(computerShot);
      return computerShot;
    }
    console.log(this.shotArray);
  }
}

export default Player;
