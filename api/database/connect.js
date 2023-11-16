require('dotenv').config();

const mongoose = require('mongoose');

function connect() {
	return new Promise((resolve, reject) => {
		mongoose
			.connect(process.env.DB_URL)
			.then(() => {
				console.log('MongoDB conected');
				resolve();
			})
			.catch((err) => {
				console.error(err);
				reject(err);
			});
	});
}

module.exports = connect;
