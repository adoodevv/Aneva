from fastapi import APIRouter, UploadFile, File
from ...db.database import get_db
import sqlite3

router = APIRouter()

@router.get("/files/")
def list_files():
   conn = get_db()
   cursor = conn.cursor()
   cursor.execute("SELECT * FROM files")
   files = cursor.fetchall()

   # not including the content in the response here
   files = [{"id": id, "name": name} for id, name, content in files]
   return files

@router.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
   file_contents = await file.read()

   conn = get_db()
   cursor = conn.cursor()
   cursor.execute("INSERT INTO files (name, content) VALUES (?, ?)", (file.filename, sqlite3.Binary(file_contents)))
   conn.commit()

   return {"filename": file.filename}