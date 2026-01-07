import { Grid } from "./domain/Grid";
import { Dot } from "./domain/Dot";
import { Wall } from "./domain/Wall";
import { Position } from "./domain/Position";
import { Pacman } from "./domain/Pacman";
import { Game } from "./domain/Game";

const dot = new Dot(new Position(0, 0));
const grid = new Grid(5, 3, dot);

// пример: делаем стену в центре
grid.setEntityAt(2, 1, new Wall(new Position(2, 1)));

const pacman = new Pacman(new Position(0, 1));
grid.setEntityAt(0, 1, pacman);

const game = new Game(grid, pacman);
game.print();
