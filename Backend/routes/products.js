import express from 'express' ;
import { addProduct, generateSignature } from '../controllers/products.js';
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/add').post(authenticate,authorizeAdmin,addProduct);
router.route('/sign-upload').post(generateSignature);


export default router ;