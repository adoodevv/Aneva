import sqlite3

def get_db():
   conn = sqlite3.connect('files.db')
   return conn

def create_tables():
   conn = get_db()
   cursor = conn.cursor()
   cursor.execute("""
      CREATE TABLE IF NOT EXISTS files (
         id INTEGER PRIMARY KEY,
         name TEXT NOT NULL,
         content BLOB NOT NULL
      )
   """)
   conn.commit()

create_tables()