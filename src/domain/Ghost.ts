import { Empty, Entity } from "./Entity";
import { Position } from "./Position";
import { Grid } from "./Grid";
import { Wall } from "./Wall";
import { IMovable } from "./IMovable";
import { IRenderable } from "./IRenderable";
import { Pacman } from "./Pacman";
import { MovementStrategy } from "./MovementStrategy";


/**
 * Classe représentant un fantôme.
 * Il utilise une stratégie de déplacement (aléatoire ou en boucle).
 */
export class Ghost extends Entity implements IMovable, IRenderable {

    private strategy: MovementStrategy;

    constructor(position: Position, strategy: MovementStrategy) {
        super(position);
        this.strategy = strategy;
    }

    /**
     * Représentation du fantôme sur la grille.
     */
    toChar(): string {
        return "G";
    }

    /**
     * Déplacement automatique du fantôme selon sa stratégie.
     */
    move(grid: Grid): void {
        const current = this.getPosition();
        const newPos = this.strategy.getNextPosition(current);

        const target = grid.getEntityAt(newPos.getX(), newPos.getY());

        // Le fantôme ne peut pas traverser les murs
        if (target instanceof Wall) return;

        // Interaction avec Pacman
        if (target instanceof Pacman) {
            target.onTrigger(this);
        }

        // Mise à jour de la grille
        // Mise à jour de la grille
grid.setEntityAt(current.getX(), current.getY(), new Empty(current));
this.setPosition(newPos);
grid.setEntityAt(newPos.getX(), newPos.getY(), this);

    }
}
