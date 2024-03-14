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
         <h2>Upload A File</h2>
         <div className="">
            <input
               type="file"
               onChange={onChangeHandler}
               className=""
            />
            <button
               onClick={onSubmitHandler}
               className=""
            >
               Upload
            </button>
         </div>
      </div>
   );
};

export default FileUpload;