const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const { assignGrade, getGrades } = require('../controllers/gradeController');

const router = express.Router();

router.post('/', authenticate, authorize(['Teacher']), assignGrade);
router.get('/:courseId', authenticate, getGrades);

module.exports = router;
