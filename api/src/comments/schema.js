const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
	comment: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('comments', CommentsSchema);
