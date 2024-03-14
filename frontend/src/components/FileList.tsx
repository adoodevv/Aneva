import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface File {
   id: number;
   name: string;
}

const FileList: React.FC = () => {
   const [files, setFiles] = useState<File[]>([]);

   useEffect(() => {
      const fetchFiles = async () => {
         try {
            const response = await axios.get<File[]>('http://localhost:8000/files/');
            setFiles(response.data);
         } catch (error) {
            console.error('Error fetching files:', error);
         }
      };

      fetchFiles();
   }, []);

   return (
      <div className="">
         <h2 className="">Uploaded Files</h2>
         <ul className="">
            {files.map((file) => (
               <li key={file.id} className="">
                  <span className="">{file.name}</span>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default FileList;
