import { Dot } from "../src/domain/Dot";
import { Position } from "../src/domain/Position";

test("Dot toChar returns *", () => {
  const d = new Dot(new Position(0, 0));
  expect(d.toChar()).toBe("*");
});
