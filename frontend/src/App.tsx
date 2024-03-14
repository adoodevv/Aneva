import React from 'react';
import FileList from './components/FileList';
import FileUpload from './components/FileUpload';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Aneva</h1>
      <div className="shadow-md rounded-lg">
        <FileUpload />
      </div>
      <FileList />
    </div>
  );
};

export default App;
