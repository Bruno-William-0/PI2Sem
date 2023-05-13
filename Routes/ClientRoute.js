import express from 'express';
import ClientController from '../Controllers/ClientController.js';

const router = express.Router()

router.get('/', ClientController.getAll)
  
export default router
