class Mediator {
	constructor() {
		this.stars = 0;
	}

	grade(student, teacher, subject) {}

	sortTeachers() {}

	search(teacher, subject) {}

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
