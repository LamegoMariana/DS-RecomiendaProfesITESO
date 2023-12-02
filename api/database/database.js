let database;

/**
 * Sets the reference to the database instance.
 * @param {object} _db - The database instance to be set.
 */
function setDB(_db) {
	/**
	 * Checks if the provided database instance is truthy and sets the global 'database' variable.
	 * @param {object} _db - The database instance to be set.
	 */
	if (_db) {
		database = _db;
	}
}

/**
 * Retrieves the reference to the database instance.
 * @returns {object} - The database instance.
 */
function getDB() {
	/**
	 * Returns the reference to the current database instance.
	 * @returns {object} - The database instance.
	 */
	return database;
}

module.exports = { setDB, getDB };
