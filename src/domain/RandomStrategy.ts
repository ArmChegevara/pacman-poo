import { Position } from "./Position";
import { MovementStrategy } from "./MovementStrategy";

/**
 * Stratégie aléatoire :
 * Le fantôme choisit au hasard une des 4 directions.
 */
export class RandomStrategy implements MovementStrategy {

    getNextPosition(pos: Position): Position {
        const r = Math.floor(Math.random() * 4);

        switch (r) {
            case 0: return new Position(pos.getX(), pos.getY() - 1); // haut
            case 1: return new Position(pos.getX(), pos.getY() + 1); // bas
            case 2: return new Position(pos.getX() - 1, pos.getY()); // gauche
            default: return new Position(pos.getX() + 1, pos.getY()); // droite
        }
    }
}
