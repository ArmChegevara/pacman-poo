import { Entity } from "./Entity";
import { Position } from "./Position";
import { IRenderable } from "./IRenderable";

/**
 * Classe représentant une case vide dans la grille.
 * Pacman et les fantômes peuvent se déplacer dessus.
 */
export class Empty extends Entity implements IRenderable {

    constructor(position: Position) {
        super(position);
    }

    /** Symbole affiché pour une case vide */
    toChar(): string {
        return " ";
    }
}
