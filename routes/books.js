const bookController = require('../controllers/bookController');

const router = require('express').Router();

// ADD AUTHOR
router.post('/', bookController.addBook);

// GET ALL AUTHORS
router.get('/', bookController.getAllBooks);

// GET AN AUTHORS
router.get('/:id', bookController.getAnBook);

// UPDATE AUTHORS
router.put('/:id', bookController.updateBook);

module.exports = router;
