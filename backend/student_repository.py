from database import Database
from repository_interface import RepositoryInterface

class StudentRepository(RepositoryInterface):
    def __init__(self, db: Database, table_name:str, record_model, schema):
        super().__init__(db, table_name, record_model, schema)