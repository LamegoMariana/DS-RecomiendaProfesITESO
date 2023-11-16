const teacherSchema = require('./schema');

class TeachersController {
	async index(req, res) {
		try {
			let teachers = await teacherSchema.find();

			if (!teachers) throw Error('No teachers found');

			res.status(200).json(teachers);
		} catch (err) {
			res.status(400).json({ msg: err });
		}
	}
}

module.exports = new TeachersController();
