const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

// Enroll Student
exports.enrollStudent = async (req, res) => {
    const { courseId } = req.params;
    const enrollment = new Enrollment({ student: req.user.id, course: courseId });
    await enrollment.save();

    await Course.findByIdAndUpdate(courseId, { $push: { enrolledStudents: req.user.id } });
    res.status(201).json(enrollment);
};

// Get Student Enrollments
exports.getStudentEnrollments = async (req, res) => {
    const enrollments = await Enrollment.find({ student: req.user.id }).populate('course');
    res.json(enrollments);
};
