const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: {type: String, required: true},
    isCompleted: {type: Boolean, required: true},
    creadtedAt: {type: Date, required: true, default: Date.now}
});

const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;