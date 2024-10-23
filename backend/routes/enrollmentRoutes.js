const express = require('express');
const { authenticate } = require('../middleware/authMiddleware');
const { enrollStudent, getStudentEnrollments } = require('../controllers/enrollmentController');

const router = express.Router();

router.post('/enroll/:courseId', authenticate, enrollStudent);
router.get('/my-enrollments', authenticate, getStudentEnrollments);

module.exports = router;
