const todoModel = require("../models/todo_models");

exports.todoCreate = (req, res, next) => {
    todoModel.crate(req.body);
    res.status(201).send();
};