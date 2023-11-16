const userSchema = require('./schema');

class UsersController {
	async index(req, res) {
		try {
			let users = await userSchema.find();

			if (!users) throw Error('No users found');

			res.status(200).json(users);
		} catch (err) {
			res.status(400).json({ msg: err });
		}
	}
}

module.exports = new UsersController();
