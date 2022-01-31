import Player from "./player";

test("player shot to be within board coordinates", () => {
  const player = new Player();
  const shot = player.makeShot();

  expect(shot[0]).toBeGreaterThanOrEqual(1);
  expect(shot[0]).toBeLessThanOrEqual(10);
  expect(shot[1]).toBeGreaterThanOrEqual(1);
  expect(shot[1]).toBeLessThanOrEqual(10);
});

test("player shots should never be the same", () => {
  const player = new Player();
  const shot1 = player.makeShot();
  const shot2 = player.makeShot();
  const shot3 = player.makeShot();
  const shot4 = player.makeShot();
  const shot5 = player.makeShot();
  const shot6 = player.makeShot();
  const shot7 = player.makeShot();
  const shot8 = player.makeShot();
  const shot9 = player.makeShot();
  const shot10 = player.makeShot();
  const shot11 = player.makeShot();

  const shotArray = [
    shot1,
    shot2,
    shot3,
    shot4,
    shot5,
    shot6,
    shot7,
    shot8,
    shot9,
    shot10,
  ];

  console.log(shotArray);

  expect(shotArray).not.toContain(shot11);
});
