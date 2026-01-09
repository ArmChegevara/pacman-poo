import { Ghost } from "./Ghost";
import { Grid } from "./Grid";
import { Pacman } from "./Pacman";
import { ScoreManager } from "./ScoreManager";

/**
 * Classe principale du jeu :
 * gère la grille, Pacman, les fantômes et le score.
 */
export class Game {

    private grid: Grid;
    private pacman: Pacman;
    private ghosts: Ghost[];
    private scoreManager: ScoreManager;

    constructor(grid: Grid, pacman: Pacman, ghosts: Ghost[] = []) {
        this.grid = grid;
        this.pacman = pacman;
        this.ghosts = ghosts;

        // Initialisation du ScoreManager
        this.scoreManager = new ScoreManager();

        // Pacman doit utiliser le même manager
        this.pacman.setScoreManager(this.scoreManager);
    }

    print(): void {
        console.log("Vies : " + this.pacman.getLives());
        console.log("Score : " + this.scoreManager.getScore());
        console.log(this.grid.render());
    }

    /**
     * Boucle automatique du jeu.
     */
    loop(): void {
        setInterval(() => {
            this.ghosts.forEach(g => g.move(this.grid));
            this.print();
        }, 500);
    }
}
