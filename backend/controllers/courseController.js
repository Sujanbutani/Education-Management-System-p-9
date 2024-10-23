const Course = require('../models/Course');

// Create Course
exports.createCourse = async (req, res) => {
    const { title, description, dates } = req.body;
    const course = new Course({ title, description, dates, assignedTeacher: req.user.id });
    await course.save();
    res.status(201).json(course);
};

// Update Course
exports.updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = await Course.findByIdAndUpdate(id, req.body, { new: true });
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
};

// Delete Course
exports.deleteCourse = async (req, res) => {
    const { id } = req.params;
    const course = await Course.findByIdAndDelete(id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json({ message: 'Course deleted' });
};

// Get All Courses
exports.getCourses = async (req, res) => {
    const courses = await Course.find().populate('assignedTeacher', 'username');
    res.json(courses);
};
