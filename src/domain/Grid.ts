import { Entity } from "./Entity";
import { Position } from "./Position";

export class Grid {
    private cells: Entity[][];

    constructor(width: number, height: number, defaultEntity: Entity) {
        this.cells = [];

        for (let y = 0; y < height; y++) {
            const row: Entity[] = [];
            for (let x = 0; x < width; x++) {
                
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
