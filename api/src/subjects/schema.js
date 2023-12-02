const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	score: {
		type: Number,
		required: true,
		default: 0,
	},
	comments: {
		type: Array,
		required: true,
		default: [],
	},
});

module.exports = mongoose.model('subjects', SubjectSchema);
