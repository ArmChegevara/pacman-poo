import { Empty, Entity } from "./Entity";
import { Position } from "./Position";
import { Grid } from "./Grid";
import { Wall } from "./Wall";
import { ScoreManager } from "./ScoreManager";
import { IMovable } from "./IMovable";
import { IControllable } from "./IControllable";
import { IRenderable } from "./IRenderable";
import { ITriggerable } from "./ITriggerable";
// import { Ghost } from "./Ghost";   // ← удаляем


/**
 * Classe Pacman : se déplace, mange les dots, perd des vies.
 */
export class Pacman extends Entity
    implements IMovable, IControllable, IRenderable, ITriggerable {

    private scoreManager!: ScoreManager;
    private lives = 3;
    private initialPosition: Position;

    constructor(position: Position) {
        super(position);
        this.initialPosition = position;
    }

    /** Pacman reçoit le ScoreManager depuis Game */
    setScoreManager(manager: ScoreManager): void {
        this.scoreManager = manager;
    }

    /** Ajoute des points au score */
    addScore(points: number): void {
        this.scoreManager.add(points);
    }

    /** Représentation sur la grille */
    toChar(): string {
        return "C";
    }

    /** Gestion des commandes (sera complété plus tard) */
    handleInput(input: string): void {}

    /** Déclenché quand Pacman rencontre un fantôme */
    onTrigger(entity: Entity): void {
    if (entity.toChar() === "G") {
        this.loseLife();
    }
}


    /** Déplacement de Pacman */
    move(direction: string, grid: Grid): void {
        const current = this.getPosition();
        let newPos = new Position(current.getX(), current.getY());

        if (direction === "up")    newPos = new Position(current.getX(), current.getY() - 1);
        if (direction === "down")  newPos = new Position(current.getX(), current.getY() + 1);
        if (direction === "left")  newPos = new Position(current.getX() - 1, current.getY());
        if (direction === "right") newPos = new Position(current.getX() + 1, current.getY());

        const targetEntity = grid.getEntityAt(newPos.getX(), newPos.getY());

        // Impossible de passer à travers un mur
        if (targetEntity instanceof Wall) return;

        // Si l'entité possède un trigger (Dot ou Ghost)
        if ("onTrigger" in targetEntity && typeof targetEntity.onTrigger === "function") {
            targetEntity.onTrigger(this);
        }

        // Mise à jour de la grille
        grid.setEntityAt(current.getX(), current.getY(), new Empty(current));
        this.setPosition(newPos);
        grid.setEntityAt(newPos.getX(), newPos.getY(), this);
    }

    /** --- Gestion des vies --- */

    getLives(): number {
        return this.lives;
    }

    isAlive(): boolean {
        return this.lives > 0;
    }

    loseLife(): void {
        this.lives--;
        console.log("Pacman a perdu une vie !");

        if (this.isAlive()) {
            this.resetPosition();
        } else {
            console.log("GAME OVER !");
        }
    }

    resetPosition(): void {
        this.setPosition(this.initialPosition);
    }
}
