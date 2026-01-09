import { Entity } from "./Entity";
import { IRenderable } from "./IRenderable";

/**
 * Classe représentant un mur (Wall).
 * Pacman et les fantômes ne peuvent pas le traverser.
 */
export class Wall extends Entity implements IRenderable {

    toChar(): string {
        return "#"; // Représentation du mur
    }
}
