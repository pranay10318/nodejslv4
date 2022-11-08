/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist test suite", () => {
  beforeAll(() => {
    add({
      title: "test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("should add a new todo", () => {
    const todoItemsCount = all.length;

    add({
      title: "test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("should retrieve overdue items", () => {
    let len = overdue().length;
    add({
      title: "adding overdue items",
      completed: false,
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 10)
      ).toLocaleDateString("en-CA"),
    });
    expect(overdue().length).toBe(len + 1);
  });

  test("should retrieve due today items", () => {
    let len = dueToday().length;
    add({
      title: "adding due today items",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(dueToday().length).toBe(len + 1);
  });

  test("should retrieve due later items", () => {
    let len = dueLater().length;
    add({
      title: "adding due later items",
      completed: false,
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 10)
      ).toLocaleDateString("en-CA"),
    });
    expect(dueLater().length).toBe(len + 1);
  });
});
