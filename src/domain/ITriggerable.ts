import { Entity } from "./Entity";

export interface ITriggerable {
    onTrigger(entity: Entity): void;
}
