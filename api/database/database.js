let database;

function setDB(_db) {
	if (_db) {
		database = _db;
	}
}

function getDB() {
	return database;
}

module.exports = { setDB, getDB };
