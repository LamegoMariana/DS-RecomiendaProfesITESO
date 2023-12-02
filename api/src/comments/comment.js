const Composite = require('../patterns/composite');

/**
 * The Comment class represents a comment without responses, extending the Composite class.
 */
class Comment extends Composite {
	/**
	 * Creates an instance of the Comment class.
	 * @param {string} comment - The main comment for this interaction.
	 */
	constructor(comment) {
		// Call the constructor of the parent class (Composite) with the comment and an empty children array.
		super(comment, []);

		/**
		 * The main comment for this interaction.
		 * @type {string}
		 */
		this.comment = comment;
	}

	/**
	 * Overrides the getInteractions method of the Composite class.
	 * Retrieves the interaction in a structured format, including the main comment.
	 * @returns {Object} - An object representing the interaction.
	 */
	getInteractions() {
		const interaction = {
			comment: this.comment,
		};

		return interaction;
	}
}

module.exports = Comment;
