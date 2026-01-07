import { Grid } from "./Grid";
import { Pacman } from "./Pacman";

export class Game {
    grid: Grid;
    pacman: Pacman;

    constructor(grid: Grid, pacman: Pacman) {
        this.grid = grid;
        this.pacman = pacman;
    }

    tick(): void {
        // позже здесь будет движение Pacman, призраков, логика игры
        // пока — просто ничего не делаем, по требованиям Этапа 03
    }

    print(): void {
        console.log(this.grid.render());
    }
}
