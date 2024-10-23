const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const { createCourse, updateCourse, deleteCourse, getCourses } = require('../controllers/courseController');

const router = express.Router();

router.post('/', authenticate, authorize(['Admin']), createCourse);
router.put('/:id', authenticate, authorize(['Admin', 'Teacher']), updateCourse);
router.delete('/:id', authenticate, authorize(['Admin']), deleteCourse);
router.get('/', getCourses);

module.exports = router;
