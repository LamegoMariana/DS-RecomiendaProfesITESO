# uvicorn main:app --reload

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from database import Database  # Import the Database class from the database.py file
from items import ItemRepository
from student_repository import StudentRepository

# ------- BaseModel semi-concrete classes -------
class Item(BaseModel):
    name: str

class Student(BaseModel):
    email: str
    password: str
# ------- END BaseModel semi-concrete classes -------


# ------- Config vars -------
app = FastAPI()

# Database connection parameters
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "recomienda_profes_iteso"
}
db = Database(**db_config)
# ------- END Config vars -------


# ------- Model Repositories -------
item_repository = ItemRepository(db, "items", Item)

student_table_schema = [
    "id INT AUTO_INCREMENT PRIMARY KEY",
    "email VARCHAR(255) NOT NULL",
    "password VARCHAR(255) NOT NULL"
]
student_repository = StudentRepository(db, "students", Student, student_table_schema)


student_repository.create_table()
# ------- END Model Repositories -------


# ------- Routes -------
@app.get('/test', response_model = str)
def test():
    try:
        db.connect()
        item_repository.create_table()
        return "Testing"
    except Exception as e:
        raise HTTPException(status_code = 500, detail = str(e))

@app.post("/items/", response_model=Item)
def create_item(item: Item):
    try:
        db.connect()
        item_id = db.insert_record(item.name)
        db.disconnect()
        return {"name": item.name}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/items/", response_model=list[Item])
def get_items():
    try:
        db.connect()
        items = db.get_records('items')
        db.disconnect()
        return items
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/students/", response_model = list[Student])
def get_students():
    try:
        db.connect()
        students = db.get_records('students')
        db.disconnect()
        return students
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/students/", response_model = Student)
def create_student(student: Student):
    try:
        db.connect()
        student_id = student_repository.insert_record(student)
        db.disconnect()
        return {"name": student.email, "password": student.password}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))



