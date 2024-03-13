import { useState } from "react";

interface FileUploadProps {
   onUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
   const [selectedFile, setSelectedFile] = useState<File | null>(null);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      setSelectedFile(file ? file : null);
   };

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (selectedFile) {
         onUpload(selectedFile);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <input type="file" onChange={handleChange} />
         <button type="submit">Upload</button>
      </form>
   );
};

export default FileUpload;