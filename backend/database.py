import mysql.connector

class Database:
    def __init__(self, host, user, password, database):
        self.host = host
        self.user = user
        self.password = password
        self.database = database
        self.connect()

    def connect(self):
        self.connection = mysql.connector.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            database=self.database
        )
        self.cursor = self.connection.cursor()

    def disconnect(self):
        self.connection.close()

    def create_table(self, table_name, table_schema):
        try:
            self.connect()
            create_table_query = "CREATE TABLE IF NOT EXISTS {} ({})".format(table_name, table_schema)
            self.cursor.execute(create_table_query)
            self.connection.commit()
        except Exception as e:
            raise Exception(f"Failed to create the table: {str(e)}")
        finally:
            self.disconnect()

    def insert_record(self, table_name:str, record:dict):
        try:
            self.connect()
            columns = ', '.join(record.keys())
            values = [str(value) for value in record.values()]
            values = ', '.join(['"{}"'.format(value) for value in values])
            insert_query = f"INSERT INTO {table_name} ({columns}) VALUES ({values})"
            self.cursor.execute(insert_query, tuple(record.values()))
            self.connection.commit()
            return self.cursor.lastrowid
        except Exception as e:
            raise Exception(f"Failed to insert record: {str(e)}")
        finally:
            self.disconnect()

    def get_records(self, table_name):
        try:
            self.connect()
            query = f"SELECT * FROM {table_name}"
            self.cursor.execute(query)
            records = [dict(zip([column[0] for column in self.cursor.description], row)) for row in self.cursor.fetchall()]
            return records
        except Exception as e:
            raise Exception(f"Failed to fetch records: {str(e)}")
        finally:
            self.disconnect()
