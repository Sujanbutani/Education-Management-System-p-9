const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    submission: [{ type: String }],
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
