const subjectSchema = require('./schema');

class SubjectsController {
	async index(req, res) {
		try {
			let subjects = await subjectSchema.find();

			if (!subjects) throw Error('No subjects found');

			res.status(200).json(subjects);
		} catch (err) {
			res.status(400).json({ msg: err });
		}
	}
}

module.exports = new SubjectsController();
