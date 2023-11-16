const { createWriteStream } = require('fs');
const { format } = require('date-fns');

class Log {
	constructor(level, info) {
		this.level = level;
		this.info = info;
		this.date = new Date();
	}

	toString() {
		const formattedDate = format(this.date, 'yyyy-MM-dd HH:mm:ss');
		return `<${this.level}\t|\t${formattedDate}>:\t${this.info}\n`;
	}
}

class Logger {
	static INSTANCE = null;

	constructor(filename = '../logs.txt') {
		if (Logger.INSTANCE === null) {
			this.filename = filename;
			this.file = createWriteStream(this.filename, { flags: 'a' });
			Logger.INSTANCE = this;
		} else {
			return Logger.INSTANCE;
		}
	}

	logToFile(log) {
		this.file.write(log.toString());
	}

	static getInstance() {
		return Logger.INSTANCE;
	}

	toString() {
		return Logger.INSTANCE ? `Logger to file: ${Logger.INSTANCE.filename}` : 'No logger created';
	}
}

module.exports = { Logger, Log };
