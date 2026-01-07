import {Position} from "../src/domain/Position";


test ("Position should store coordinates", () =>{
    const pos = new Position(1,2);
    expect(pos.getX()).toBe(1);
    expect(pos.getY()).toBe(2); 
})

test ("Position equals should work", () => {
    const p1 = new Position(1,1);
    const p2 = new Position(1,1);
    const p3 = new Position(2,2);

    expect(p1.equals(p2)).toBe(true);
    expect(p1.equals(p3)).toBe(false);
});