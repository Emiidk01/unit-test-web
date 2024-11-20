const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../models/todo_models");
const newTask = require("../../test/mockups/todo_mockups.json");
const httpsMocks = require("node-mocks-http");

TodoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
  (res = httpsMocks.createResponse()),
    (req = httpsMocks.createRequest()),
    (next = null);
});

describe("Test Create methods exists in controllers", () => {
  // check the
  it("should have a create method", () => {
    expect(typeof TodoController.todoCreate).toBe("function");
  });

  it("should call todoModel.create", () => {
    req.body = newTask;
    TodoController.todoCreate(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTask);
  });
});
