const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	score: {
		type: Number,
		required: true,
		default: 0,
	},
	subjects: {
		type: Array,
		required: true,
		default: [],
	},
});

module.exports = mongoose.model('teachers', TeacherSchema);
