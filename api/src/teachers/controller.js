const teacherSchema = require('./schema');

class TeachersController {
	async index(req, res) {
		try {
			let teachers = await teacherSchema.find();

			if (!teachers) throw Error('No teachers found');

			res.status(200).json(teachers);
		} catch (err) {
			res.status(500).json({ msg: err });
		}
	}

	async create(req, res) {
		try {
			console.log(req.body);
			console.log(req.params);
			let newTeacher = new teacherSchema({
				name: req.body.name,
				score: 0,
				subjects: [],
			});
			await newTeacher.save();

			res.json(newTeacher);
		} catch (err) {
			res.status(500).json({ msg: err });
		}
	}
}

module.exports = new TeachersController();
