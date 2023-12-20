/* eslint-disable no-undef */
const todoList = require("../todo");
let today = new Date().toLocaleDateString("en-CA");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("Should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Should retrive all todo that are overdue", () => {
    let a = overdue();
    expect(
      a.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });
  test("Should retrive all todo that are due today", () => {
    let a = dueToday();
    expect(
      a.every((todo) => {
        return todo.dueDate == today;
      })
    ).toBe(true);
  });
  test("Should retrive all todo that are duelater", () => {
    let a = dueLater();
    expect(
      a.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
