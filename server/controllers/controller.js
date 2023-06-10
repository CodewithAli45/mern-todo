const Task = require('../models/taskModel');

async function getTodos(req, res){
    try {
        const todos = await Task.find();
        res.send(todos)
    } catch (error) {
        console.log(error);
    }
}

async function createTask(req, res){
    const {description} = req.body;

    const newTask = {
        description,
    };

    await Task.create(newTask);
    try {
        res.send("task is created");
    } catch (error) {
        res.send("error happend ", error);
    }
}

module.exports = {
    createTask, getTodos
}