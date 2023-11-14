const router = require('express').Router();
const {createTask, removeTask, getTasks, getAllTask} = require('../controllers/controller');

router.delete('/delete', removeTask);
router.get('/getTask/:id', getTasks);
router.get('/getAllTasks', getAllTask);
router.post('/createTask', createTask);

module.exports = router;