/**
 * The Teacher class represents a teacher with a name, a list of subjects they teach, and a score.
 */
class Teacher {
	/**
	 * Creates an instance of the Teacher class.
	 * @param {string} name - The name of the teacher.
	 * @param {Array<Subject>} subjects - An array of Subject instances representing the subjects taught by the teacher.
	 * @param {number} score - The score or rating associated with the teacher.
	 */
	constructor(name, subjects, score) {
		/**
		 * The name of the teacher.
		 * @type {string}
		 */
		this.name = name;

		/**
		 * An array of Subject instances representing the subjects taught by the teacher.
		 * @type {Array<Subject>}
		 */
		this.subjects = subjects;

		/**
		 * The score or rating associated with the teacher.
		 * @type {number}
		 */
		this.score = score;
	}
}

module.exports = Teacher;
