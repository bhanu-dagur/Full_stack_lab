import express from 'express';
import bookController from '../controllers/bookController.js';

const router = express.Router();

router.get('/', bookController.getBooks);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;
