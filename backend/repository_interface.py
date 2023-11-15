from database import Database

class RepositoryInterface:
    ''' Class used to initialize the models repositories '''
    def __init__(self, db: Database, table_name:str, record_model, schema:list[str]):
        self.db:Database = db
        self.table_name:str = table_name
        self.record_model = record_model
        self.schema:list[str] = schema


    def create_table(self):
        try:
            self.db.connect()
            create_table_query = f"CREATE TABLE IF NOT EXISTS {self.table_name} ({', '.join(self.schema)})"
            self.db.cursor.execute(create_table_query)
            self.db.connection.commit()
        except Exception as e:
            raise Exception(f"Failed to create the table: {str(e)}")
        finally:
            self.db.disconnect()


    def insert_record(self, record):
        ''' Method to add a record to the table in the DB '''
        if isinstance(record, self.record_model):
            record_dict = record.dict()
            record_id = self.db.insert_record(self.table_name, record_dict)
            return record_id
        else:
            raise ValueError("Record does not match the expected model.")

    def get_records(self):
        ''' Method to get all records from the table in the DB '''
        records = self.db.get_records(self.table_name)
        return [self.record_model(**record) for record in records]