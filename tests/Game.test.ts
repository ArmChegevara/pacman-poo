import { Game } from "../src/domain/Game";
import { Grid } from "../src/domain/Grid";
import { Pacman } from "../src/domain/Pacman";
import { Position } from "../src/domain/Position";

test("Game starts without crashing", () => {
    const grid = new Grid(3, 3);
    const pacman = new Pacman(new Position(1, 1));
    const game = new Game(grid, pacman);

    expect(() => game.print()).not.toThrow();
});
