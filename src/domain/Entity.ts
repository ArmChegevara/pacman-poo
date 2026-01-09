import { Position } from "./Position";
import { IRenderable } from "./IRenderable";

/**
 * Classe abstraite de base
 */
export abstract class Entity {
    protected position: Position;

    constructor(position: Position) {
        this.position = position;
    }

    getPosition(): Position {
        return this.position;
    }

    setPosition(position: Position): void {
        this.position = position;
    }

    abstract toChar(): string;
}

/**
 * Classe Empty utilisée pour représenter une case vide
 */
export class Empty extends Entity implements IRenderable {
    toChar(): string {
        return " ";
    }
}
