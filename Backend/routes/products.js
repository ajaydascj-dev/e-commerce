import express from 'express' ;
import { addProduct } from '../controllers/products.js';

const router = express.Router();

router.route('/add').post(addProduct)


export default router ;