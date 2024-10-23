const Grade = require('../models/Grade');

// Assign Grade
exports.assignGrade = async (req, res) => {
    const { studentId, courseId, grade } = req.body;
    const gradeEntry = new Grade({ student: studentId, course: courseId, grade });
    await gradeEntry.save();
    res.status(201).json(gradeEntry);
};

// Get Grades for a Course
exports.getGrades = async (req, res) => {
    const { courseId } = req.params;
    const grades = await Grade.find({ course: courseId }).populate('student', 'username');
    res.json(grades);
};
