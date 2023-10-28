const Task = require('../models/taskModel');


async function createTask(req, res){
    const {title, description} = req.body;
    try {
        const newTask = {
            title, description, completed: false
        };
    
        await Task.create(newTask);

        return res.status(201).json({
            status: "task created successfully",
            data: {
                newTask
            }
        })
    } catch (error) {
        return res.status(401).json({
            status: "failure",
            message: error.message
        })
    }

}

async function removeTask(req, res) {
    try {
        const {id} = req.body;
        const deletedTask = await Task.findByIdAndDelete(id);   

        return res.status(200).json({
            status: "task deleted successfully",
            data: {
                deletedTask
            }
        })
    } catch (error) {
        return res.status(401).json({
            status: "failure",
            message: error.message
        })
    }
}

async function getTasks(req, res){
    try {
        const {id} = req.params;
        const tasks = await Task.findById(id);   

        return res.status(200).json({
            status: "success",
            data: {
                tasks
            }
        })
    } catch (error) {
        return res.status(401).json({
            status: "failure",
            message: error.message
        })
    }
}

module.exports = {
    createTask, removeTask, getTasks
}