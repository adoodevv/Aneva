import React from 'react';
import FileList from './components/FileList';
import FileUpload from './components/FileUpload';

const App: React.FC = () => {
  return (
    <div className="">
      <h1>Aneva</h1>
      <div className="">
        <FileUpload />
      </div>
      <FileList />
    </div>
  );
};

export default App;
