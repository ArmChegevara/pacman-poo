import { Pacman } from "../src/domain/Pacman";
import { Position } from "../src/domain/Position";

test("Pacman toChar returns C", () => {
  const p = new Pacman(new Position(1, 1));
  expect(p.toChar()).toBe("C");
});
