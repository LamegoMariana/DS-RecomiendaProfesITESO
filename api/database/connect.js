require('dotenv').config();

const mongoose = require('mongoose');

/**
 * Establishes a connection to the MongoDB database using the specified URL.
 * @returns {Promise<void>} - A promise that resolves if the connection is successful, and rejects if an error occurs.
 */
function connect() {
	return new Promise((resolve, reject) => {
		/**
		 * Attempts to connect to the MongoDB database using the provided URL.
		 */
		mongoose
			.connect(process.env.DB_URL)
			.then(() => {
				/**
				 * Logs a message to the console when the connection is successful.
				 */
				console.log('MongoDB connected');
				resolve();
			})
			.catch((err) => {
				/**
				 * Logs an error to the console if the connection fails and rejects the promise with the error.
				 * @param {Error} err - The error object representing the connection error.
				 */
				console.error(err);
				reject(err);
			});
	});
}

module.exports = connect;
