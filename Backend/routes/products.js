import express from 'express' ;
import { addProduct } from '../controllers/products.js';
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/add').post(authenticate,authorizeAdmin,addProduct)


export default router ;