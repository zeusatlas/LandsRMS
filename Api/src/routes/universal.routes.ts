import express from 'express';
import universalController from '../controllers/universal.controller';

const router = express.Router();

// Route for user login
router.post('/bulk-remove', universalController.bulkRemove);

export default router;