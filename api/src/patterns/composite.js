// ! Perdón por no combinar estos patterns a la app en Angular :(
// ! No nos dió suficiente tiempo :(

/**
 * The Composite class represents a comment and its responses in a hierarchical structure.
 * It allows you to organize and manage interactions in a tree-like format.
 */
class Composite {
	/**
	 * Creates an instance of the Composite class.
	 * @param {string} comment - The main comment for this interaction.
	 * @param {Array<Composite>} children - An array of Composite instances representing responses.
	 */
	constructor(comment, children = []) {
		this.comment = comment;
		this.children = children;
	}

	/**
	 * Adds a response to the current interaction.
	 * @param {string} comment - The comment to be added as a response.
	 */
	addResponse(comment) {
		this.children.push(new Composite(comment));
	}

	/**
	 * Retrieves the interactions in a structured format, including the main comment and its responses.
	 * @returns {Object} - An object representing the interaction and its responses.
	 */
	getInteractions() {
		const interaction = {
			comment: this.comment,
		};

		if (this.children.length > 0) {
			interaction['responses'] = this.children.map((child) => child.getInteractions());
		}

		return interaction;
	}
}

module.exports = Composite;
