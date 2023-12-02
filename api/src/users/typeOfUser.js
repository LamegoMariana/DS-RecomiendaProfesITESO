/**
 * The TypeOfUser class represents a user with a username, email, and password.
 */
class TypeOfUser {
	/**
	 * Creates an instance of the TypeOfUser class.
	 * @param {string} username - The username of the user.
	 * @param {string} email - The email address of the user.
	 * @param {string} password - The password associated with the user's account.
	 */
	constructor(username, email, password) {
		/**
		 * The username of the user.
		 * @type {string}
		 */
		this.name = username;

		/**
		 * The email address of the user.
		 * @type {string}
		 */
		this.email = email;

		/**
		 * The password associated with the user's account.
		 * @type {string}
		 */
		this.password = password;
	}
}

module.exports = TypeOfUser;
