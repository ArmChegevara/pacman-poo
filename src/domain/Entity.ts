import { Position } from "./Position";

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
