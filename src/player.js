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
      if (this.shotArray.includes(playerShot)) {
        // shouldnt work and player can take a shot again
      } else {
        this.shotArray.push(playerShot);
        return playerShot;
      }
    } else {
      const computerShot = autoShot(this.shotArray);
      return computerShot;
    }
  }
}

export default Player;
