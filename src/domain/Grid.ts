import { Entity } from "./Entity";
import { Position } from "./Position";
import { Empty } from "./Empty";

/**
 * Grille du jeu contenant toutes les entités.
 */
export class Grid {

    private cells: Entity[][] = [];  // ← FIX : initialisation immédiate

    constructor(
        width: number,
        height: number,
        defaultEntity: Entity = new Empty(new Position(0, 0))
    ) {
        for (let y = 0; y < height; y++) {
            const row: Entity[] = [];

            for (let x = 0; x < width; x++) {
                // Chaque cellule commence avec l'entité par défaut
                row.push(defaultEntity);
            }

            this.cells.push(row);
        }
    }

    getEntityAt(x: number, y: number): Entity {
        return this.cells[y][x];
    }

    setEntityAt(x: number, y: number, entity: Entity): void {
        this.cells[y][x] = entity;
    }

    render(): string {
        let output = "";

        for (const row of this.cells) {
            output += row.map(e => e.toChar()).join("") + "\n";
        }

        return output;
    }
}
