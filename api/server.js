require('dotenv').config();

// Express config and routes
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use('/', express.json());

const { apiRoutes } = require('./src');
app.listen(port, () => {
	console.log(`App running on: http://localhost:${port}/`);
});

app.use('/test/:id', (req, res) => {
	res.send('test endpoint');
});

app.use('/test/', (req, res) => {
	res.send('test endpoint');
});

app.use('', apiRoutes);

// Database config
const databaseModule = require('./database');
databaseModule
	.connect()
	.then(() => {
		console.log('> DATABASE CONNECTED SUCCESSFULLY');
	})
	.catch((err) => {
		console.error('Database connection error  - database/connect.js', err);
	});
