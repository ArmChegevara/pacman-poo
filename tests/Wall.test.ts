import { Wall } from "../src/domain/Wall";
import { Position } from "../src/domain/Position";

test("Wall toChar returns #", () => {
  const w = new Wall(new Position(0, 0));
  expect(w.toChar()).toBe("#");
});

test("Wall has a valid Position", () => {
  const pos = new Position(1, 2);
  const w = new Wall(pos);
  expect(w.getPosition()).toBe(pos);
});
