const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    description: {type: String, required: true}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;