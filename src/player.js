class Player {
  shotArray = [0, 0];

  shotArrayPlayer = [0, 0];

  playerShot(shot, array) {
    for (let i = 0; i < array.length; i += 1) {
      if (shot[0] === array[i][0] && shot[1] === array[i][1]) {
        return true;
      }
    }
    return false;
  }

  makeShot(playerShot) {
    // eslint-disable-next-line consistent-return
    function autoShot() {
      const autoShotX = Math.floor(Math.random() * 10) + 1;
      const autoShotY = Math.floor(Math.random() * 10) + 1;
      const autoShotCoordinates = [autoShotX, autoShotY];
      return autoShotCoordinates;
    }

    if (playerShot) {
      this.shotArrayPlayer.push(playerShot);
      return playerShot;
    }

    const computerShot = autoShot();
    if (this.playerShot(computerShot, this.shotArray)) {
      return this.makeShot();
    }
    this.shotArray.push(computerShot);
    return computerShot;
  }
}

export default Player;
