const teacherSchema = require('./schema');
const mongo = require('mongodb');

class TeachersController {
	static transformData(data) {
		const transformedData = data.map((item) => ({
			...item.toObject(),
			id: item._id.toString(), // Convert ObjectId to string
		}));

		return transformedData;
	}

	async index(req, res) {
		try {
			let teachers = await teacherSchema.find();

			const transformedData = TeachersController.transformData(teachers);

			res.status(200).json(transformedData);
		} catch (err) {
			res.status(500).json({ msg: err });
		}
	}

	async show(req, res) {
		try {
			const mongoID = new mongo.ObjectId(req.params.id);

			// Use findOne with a query object containing _id
			const teacher = await teacherSchema.findOne({ _id: mongoID });

			if (!teacher) {
				// If no teacher is found, you may want to send a 404 status code
				return res.status(404).json({ msg: 'Teacher not found' });
			}

			// Assign the id field with the string version of _id
			teacher.id = teacher._id.toString();
			teacher.subjects = teacher.subjects.map((item) => ({
				...item,
				id: item._id.toString(), // Convert ObjectId to string
			}));

			console.log(teacher);

			res.status(200).json(teacher);
		} catch (err) {
			// Log the error for debugging purposes
			console.error(err);
			res.status(500).json({ msg: 'Internal Server Error' });
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
