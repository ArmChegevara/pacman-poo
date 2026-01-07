import { Entity } from "./Entity";
import { Position } from "./Position";

export class Dot extends Entity {
  constructor(position: Position) {
    super(position);
  }

  toChar(): string {
    return "*";
  }
}
