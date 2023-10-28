const router = require('express').Router();
const {createTask, removeTask, getTasks} = require('../controllers/controller');

router.delete('/delete', removeTask);
router.get('/getTask/:id', getTasks)
router.post('/createTask', createTask);

module.exports = router;