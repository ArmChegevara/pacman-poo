import { Position } from "./Position";

export interface IMovable {
    getPosition(): Position;
    setPosition(position: Position): void;
}
