const TypeOfUser = require('./typeOfUser');
const { Logger, Log } = require('../patterns/logger');

class Student extends TypeOfUser {
	constructor(username, email, password) {
		super(username, email, password);
		this.logger = this.getLogger();
	}

	// TODO: Auth flow wont be implemented rn heehee
	login() {
		this.getLogger().logToFile(new Log('info', `User: ${this.email} logged in`));
	}

	signUp() {
		this.getLogger().logToFile(new Log('info', `User: ${this.email} signed up`));
	}

	getLogger() {
		return new Logger();
	}

	logout() {
		this.getLogger().logToFile(new Log('info', `User: ${this.email} logged out`));
	}
}

module.exports = Student;
