const TypeOfUser = require('./typeOfUser');
const { Logger, Log } = require('../patterns/logger');

/**
 * The Student class represents a user with student privileges, extending the TypeOfUser class.
 */
class Student extends TypeOfUser {
	/**
	 * Creates an instance of the Student class.
	 * @param {string} username - The username of the student.
	 * @param {string} email - The email address of the student.
	 * @param {string} password - The password associated with the student's account.
	 */
	constructor(username, email, password) {
		// Call the constructor of the parent class (TypeOfUser) with the username, email, and password.
		super(username, email, password);

		/**
		 * The logger associated with the student.
		 * @type {Logger}
		 */
		this.logger = this.getLogger();
	}

	/**
	 * Logs in the student and records the event in the logger.
	 */
	login() {
		this.getLogger().logToFile(new Log('info', `User: ${this.email} logged in`));
		// TODO: Implement authentication logic
	}

	/**
	 * Signs up the student and records the event in the logger.
	 */
	signUp() {
		this.getLogger().logToFile(new Log('info', `User: ${this.email} signed up`));
		// TODO: Implement authentication logic
	}

	/**
	 * Gets the logger associated with the student.
	 * @returns {Logger} - The logger instance.
	 */
	getLogger() {
		return new Logger();
	}

	/**
	 * Logs out the student and records the event in the logger.
	 */
	logout() {
		this.getLogger().logToFile(new Log('info', `User: ${this.email} logged out`));
	}
}

module.exports = Student;
