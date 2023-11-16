const commentSchema = require('./schema');

class CommentsController {
	async index(req, res) {
		try {
			let comments = await commentSchema.find();

			if (!comments) throw Error('No comments found');

			res.status(200).json(comments);
		} catch (err) {
			res.status(400).json({ msg: err });
		}
	}
}

module.exports = new CommentsController();
