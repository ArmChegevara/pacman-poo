import { Game } from "../src/domain/Game";
import { Grid } from "../src/domain/Grid";
import { Pacman } from "../src/domain/Pacman";
import { Dot } from "../src/domain/Dot";
import { Position } from "../src/domain/Position";

test("Game.print runs without throwing", () => {
    const grid = new Grid(2, 2, new Dot(new Position(0, 0)));
    const pacman = new Pacman(new Position(0, 0));

    const game = new Game(grid, pacman);

    expect(() => game.print()).not.toThrow();
});

test("Game.tick runs without throwing", () => {
    const grid = new Grid(2, 2, new Dot(new Position(0, 0)));
    const pacman = new Pacman(new Position(0, 0));

    const game = new Game(grid, pacman);

    expect(() => game.tick()).not.toThrow();
});
