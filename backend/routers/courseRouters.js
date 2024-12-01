import express from 'express';
import { getCourses, postCourse, updateCourse, deleteCourse} from '../controllers/courseControllers.js';

const router  = express.Router();
router.get('/', getCourses)
router.post('/', postCourse)
router.put('/:id', updateCourse)
router.delete('/:id', deleteCourse)

export default router;