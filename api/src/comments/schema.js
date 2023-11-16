const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
	comment: {
		type: String,
		required: true,
	},
	likes: {
		type: Number,
		required: true,
		default: 0,
	},
	dislikes: {
		type: Number,
		required: true,
		default: 0,
	},
});

module.exports = mongoose.model('comments', CommentsSchema);
