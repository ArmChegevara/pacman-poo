import { Entity } from "../src/domain/Entity";
import { Position } from "../src/domain/Position";

// Dummy class for testing abstract Entity
class DummyEntity extends Entity {
  toChar(): string {
    return "?";
  }
}

test("Entity should store and return its position", () => {
  const pos = new Position(5, 7);
  const e = new DummyEntity(pos);

  expect(e.getPosition()).toBe(pos);
});

test("Entity should update its position", () => {
  const e = new DummyEntity(new Position(1, 1));
  const newPos = new Position(3, 4);

  e.setPosition(newPos);

  expect(e.getPosition()).toBe(newPos);
});

test("Entity toChar should be implemented by subclasses", () => {
  const e = new DummyEntity(new Position(0, 0));
  expect(e.toChar()).toBe("?");
});
