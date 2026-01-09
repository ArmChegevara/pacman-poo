import { Entity } from "./Entity";
import { ITriggerable } from "./ITriggerable";
import { Pacman } from "./Pacman";


/**
 * Classe Dot (un simple point que Pacman peut manger)
 * Implémente l’interface ITriggerable.
 */
export class Dot extends Entity implements ITriggerable {

    /**
     * Représentation du point sur la grille.
     */
    toChar(): string { 
        return "."; 
    }

    /**
     * Cette méthode est appelée quand Pacman entre dans la cellule du Dot.
     * Elle ne modifie pas directement la grille — cela sera géré dans Pacman.move().
     */
    onTrigger(entity: Entity): void {
        
        // Si l'entité qui entre est Pacman → elle gagne des points
        if (entity instanceof Pacman) {
            // Ajoute 10 points au score
            entity.addScore(10);
        }

        // La logique de remplacement du Dot par une cellule vide
        // sera faite dans Pacman.move() ou dans Game selon l'étape.
    }
}
