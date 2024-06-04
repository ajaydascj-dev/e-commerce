import express from 'express' ;
import { newCategory , listCategories, removeCategory ,updateCategory } from '../controllers/categories.js';

const app = express();
const router = express.Router() ;

router.route('/').post(newCategory).get(listCategories);
router.route('/:id').delete(removeCategory).put(updateCategory);

export default router ;
