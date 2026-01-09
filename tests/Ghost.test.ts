import { Ghost } from "../src/domain/Ghost";
import { Position } from "../src/domain/Position";
import { Grid } from "../src/domain/Grid";
import { RandomStrategy } from "../src/domain/RandomStrategy";

test("Ghost moves without throwing", () => {
    const grid = new Grid(3, 3);
    const ghost = new Ghost(new Position(1, 1), new RandomStrategy());

    expect(() => ghost.move(grid)).not.toThrow();
});
