import React, { useState } from 'react';
import axios from 'axios';

const FileUpload: React.FC = () => {
   const [selectedFile, setSelectedFile] = useState<File | null>(null);

   const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
         setSelectedFile(event.target.files[0]);
      }
   };

   const onSubmitHandler = async () => {
      if (!selectedFile) {
         console.error('No file selected');
         return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);
      try {
         await axios.post('http://localhost:8000/upload/', formData, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });
         console.log('File uploaded successfully!');
      } catch (error) {
         console.error('Error uploading file:', error);
      }
   };

   return (
      <div>
         <h2 className="text-2xl font-bold mb-4 text-center">Upload A File</h2>
         <div className="container mx-auto p-4 flex items-center justify-center gap-4">
            <input
               type="file"
               onChange={onChangeHandler}
               className="bg-white border border-gray-300 rounded py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
               onClick={onSubmitHandler}
               className="bg-blue-500 text-white py-3 px-5 rounded hover:bg-blue-700"
            >
               Upload
            </button>
         </div>
      </div>
   );
};

export default FileUpload;