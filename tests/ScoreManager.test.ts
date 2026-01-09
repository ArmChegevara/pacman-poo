import { ScoreManager } from "../src/domain/ScoreManager";

test("ScoreManager adds points", () => {
    const sm = new ScoreManager();
    sm.add(10);
    sm.add(5);
    expect(sm.getScore()).toBe(15);
});
