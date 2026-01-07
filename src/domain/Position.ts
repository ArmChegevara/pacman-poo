export class Position {
    constructor(private x: number, public y: number) {}


    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

equals(pos:Position): boolean {
    return this.x === pos.getX() && this.y === pos.getY();

}

}