const express = require('express');
const router = express.Router();
const bugController = require('../controllers/bugController');
const auth = require('../authMiddleware');

router.get('/', auth, bugController.getBugs);
router.post('/', auth, bugController.createBug);
router.put('/:id', auth, bugController.updateBug);
router.delete('/:id', auth, bugController.deleteBug);

module.exports = router;