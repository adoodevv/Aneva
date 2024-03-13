import React from 'react';
import { useState } from 'react';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';

interface UploadedFile {
  id: string;
  name: string;
}

const App: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleUpload = (file: File) => {
    const newFile = { id: '1', name: file.name };
    setUploadedFiles([...uploadedFiles, newFile]);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Aneva</h1>
      <FileUpload onUpload={handleUpload} />
      <FileList files={uploadedFiles} />
    </div>
  );
};

export default App;