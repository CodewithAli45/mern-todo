const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    sl:{type: Number},
    description:{type:String, required:true},
    completed:{type:Boolean}
}, {timeStamp: true});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;