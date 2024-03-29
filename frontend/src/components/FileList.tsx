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
      <div className="mx-auto p-4 items-center justify-center">
         <h2 className="text-2xl font-bold mb-4">Uploaded Files</h2>
         <ul className="list-disc list-inside">
            {files.map((file) => (
               <li key={file.id} className="py-2">
                  <span className="text-gray-700 font-medium">{file.name}</span>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default FileList;
