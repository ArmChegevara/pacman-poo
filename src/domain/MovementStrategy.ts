import { Position } from "./Position";

/**
 * Interface des stratégies de déplacement des fantômes.
 */
export interface MovementStrategy {
    getNextPosition(pos: Position): Position;
}
