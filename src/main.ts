import { Position } from "./domain/Position";
import { Grid } from "./domain/Grid";
import { Pacman } from "./domain/Pacman";
import { Ghost } from "./domain/Ghost";
import { RandomStrategy } from "./domain/RandomStrategy";
import { LoopStrategy } from "./domain/LoopStrategy";
import { Game } from "./domain/Game";
import { Dot } from "./domain/Dot";
import { Wall } from "./domain/Wall";

// Création de la grille
const grid = new Grid(5, 5);

// Placement des dots
for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
        grid.setEntityAt(x, y, new Dot(new Position(x, y)));
    }
}

// Ajout d'un mur
grid.setEntityAt(2, 2, new Wall(new Position(2, 2)));

// Création de Pacman
const pacman = new Pacman(new Position(1, 1));

// Création des fantômes
const ghost1 = new Ghost(new Position(3, 3), new RandomStrategy());
const ghost2 = new Ghost(new Position(4, 1), new LoopStrategy());

// Création du jeu
const game = new Game(grid, pacman, [ghost1, ghost2]);

// Affichage initial
game.print();

// Démarrage de la boucle du jeu
game.loop();
