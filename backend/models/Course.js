const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dates: { type: Date, required: true },
    assignedTeacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Course', courseSchema);
