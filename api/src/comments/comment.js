const Composite = require('../patterns/composite');

class Comment extends Composite {
	constructor(comment) {
		this.comment = comment;
	}

	getInteractions() {}
}

module.exports = Comment;
