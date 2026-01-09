import { Position } from "./Position";
import { MovementStrategy } from "./MovementStrategy";

/**
 * Stratégie de va-et-vient (haut <-> bas).
 */
export class LoopStrategy implements MovementStrategy {

    private direction: number = -1; // -1 = haut, 1 = bas

    getNextPosition(pos: Position): Position {
        const newY = pos.getY() + this.direction;

        // Inversion si nécessaire
        this.direction *= -1;

        return new Position(pos.getX(), newY);
    }
}
