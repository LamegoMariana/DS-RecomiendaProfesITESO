class Composite {
	constructor(comment, children = []) {
		this.comment = comment;
		this.children = children;
	}

	addResponse(comment) {
		this.children.append(comment);
	}

	getInteractions() {
		const interaction = {
			comment: this.comment,
		};

		if (this.children.length > 0) {
			interaction['responses'] = this.children.map((comment) => comment.getInteractions());
		}

		return interaction;
	}
}

module.exports = Composite;
