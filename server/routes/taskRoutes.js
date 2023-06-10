const router = require('express').Router();
const {createTask, getTodos} = require('../controllers/controller');

router.get('/', getTodos)
router.post('/createTask', createTask);

module.exports = router;