/**
 * The Subject class represents a subject with a name and associated comments.
 */
class Subject {
	/**
	 * Creates an instance of the Subject class.
	 * @param {string} name - The name of the subject.
	 * @param {Array<Comment>} comments - An array of Comment instances associated with the subject.
	 */
	constructor(name, comments) {
		/**
		 * The name of the subject.
		 * @type {string}
		 */
		this.name = name;

		/**
		 * An array of Comment instances associated with the subject.
		 * @type {Array<Comment>}
		 */
		this.comments = comments;
	}
}

module.exports = Subject;
