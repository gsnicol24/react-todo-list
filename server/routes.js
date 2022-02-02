
const labelModel = require("./mongo/schemas/label");
const todoModel = require("./mongo/schemas/todo");
const express = require("express");
const app = express();

app.post("/labels", async (request, response) => {
    const label = new labelModel(request.body);

    try {
        await label.save();
        response.send(label);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/labels", async (request, response) => {
    const labels = await labelModel.find({});

    try {
        response.send(labels);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/todos", async (request, response) => {
    const todo = new todoModel(request.body);

    try {
        await todo.save();
        response.send(todo);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/todos", async (request, response) => {
    const todos = await todoModel.find({})
        .populate('labels')

    try {
        response.send(todos);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;