const commentSchema = require('./schema');
const TeacherSchema = require('../teachers/schema');

class CommentsController {
	async index(req, res) {
		try {
			let comments = await commentSchema.find();

			if (!comments) throw Error('No comments found');

			res.status(200).json(comments);
		} catch (err) {
			res.status(500).json({ msg: err });
		}
	}

	async createComment(req, res) {
		try {
			let comment = req.body.comment;
			let teacher = await TeacherSchema.findById(req.params.teacher_id);

			if (!teacher) throw Error('No teacher found');

			let comments = [];
			let subjects = [];

			teacher.subjects.forEach((subject) => {
				if (subject._id.toString() === req.params.subject_id) {
					comments = subject.comments;
					comments.push(comment);
					subject.comments = comments;
				}
				subjects.push(subject);
			});
			await TeacherSchema.findByIdAndUpdate(teacher._id, { $set: { subjects: subjects } });

			res.json({ message: 'Todo Cool' });
		} catch (err) {
			res.status(500).json({ msg: err });
		}
	}
}

module.exports = new CommentsController();
