from database import Database

class ItemRepository:
    def __init__(self, db: Database, table_name:str, item_model):
        self.db = db
        self.table_name = table_name
        self.item_model = item_model

    def create_table(self):
        table_schema = ', '.join([f"{key} {value}" for key, value in self.item_model.__annotations__.items()])
        print(table_schema)
        self.db.create_table(self.table_name, table_schema)

    def insert_item(self, item):
        if isinstance(item, self.item_model):
            item_dict = item.dict()
            item_id = self.db.insert_item(self.table_name, item_dict)
            return item_id
        else:
            raise ValueError("Item does not match the expected model.")

    def get_items(self):
        items = self.db.get_items(self.table_name)
        return [self.item_model(**item) for item in items]
