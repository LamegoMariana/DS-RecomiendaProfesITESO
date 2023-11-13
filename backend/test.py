import mysql.connector

mydb = mysql.connector.connect(
  host = 'localhost',
  user = 'root',
  password = 'root',
  database = 'recomienda_profes_iteso'
)

cursor = mydb.cursor()
cursor.execute("SHOW TABLES")

for x in cursor:
  print(x)