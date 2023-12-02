const { createWriteStream } = require('fs');
const { format } = require('date-fns');

/**
 * The Log class represents a log entry with a specified level, information, and timestamp.
 */
class Log {
	/**
	 * Creates an instance of the Log class.
	 * @param {string} level - The log level (e.g., 'info', 'warning', 'error').
	 * @param {string} info - The information or message to be logged.
	 */
	constructor(level, info) {
		/**
		 * The log level.
		 * @type {string}
		 */
		this.level = level;

		/**
		 * The information or message to be logged.
		 * @type {string}
		 */
		this.info = info;

		/**
		 * The timestamp when the log entry is created.
		 * @type {Date}
		 */
		this.date = new Date();
	}

	/**
	 * Converts the log entry to a formatted string.
	 * @returns {string} - A formatted string representation of the log entry.
	 */
	toString() {
		/**
		 * Formats the date in 'yyyy-MM-dd HH:mm:ss' format.
		 * @param {Date} date - The date to be formatted.
		 * @param {string} format - The format string for the date.
		 * @returns {string} - The formatted date string.
		 */
		const formattedDate = format(this.date, 'yyyy-MM-dd HH:mm:ss');

		/**
		 * The formatted string representation of the log entry.
		 * @type {string}
		 */
		return `<${this.level}\t|\t${formattedDate}>:\t${this.info}\n`;
	}
}

/**
 * The Logger class provides a singleton logger for logging entries to a specified file.
 */
class Logger {
	/**
	 * The singleton instance of the Logger class.
	 * @type {?Logger}
	 */
	static INSTANCE = null;

	/**
	 * Creates an instance of the Logger class.
	 * @param {string} filename - The name of the file to which log entries will be written.
	 */
	constructor(filename = '../logs.txt') {
		/**
		 * The name of the file to which log entries will be written.
		 * @type {string}
		 */
		this.filename = filename;

		/**
		 * The file stream for writing log entries.
		 * @type {WriteStream}
		 */
		this.file = createWriteStream(this.filename, { flags: 'a' });

		/**
		 * Singleton pattern: Ensures only one instance of Logger is created.
		 */
		if (Logger.INSTANCE === null) {
			Logger.INSTANCE = this;
		} else {
			return Logger.INSTANCE;
		}
	}

	/**
	 * Logs a log entry to the specified file.
	 * @param {Log} log - The log entry to be written to the file.
	 */
	logToFile(log) {
		this.file.write(log.toString());
	}

	/**
	 * Gets the singleton instance of the Logger class.
	 * @returns {Logger} - The singleton instance of the Logger class.
	 */
	static getInstance() {
		return Logger.INSTANCE;
	}

	/**
	 * Converts the Logger instance to a string representation.
	 * @returns {string} - A string representation of the Logger instance.
	 */
	toString() {
		return Logger.INSTANCE ? `Logger to file: ${Logger.INSTANCE.filename}` : 'No logger created';
	}
}

module.exports = { Logger, Log };
