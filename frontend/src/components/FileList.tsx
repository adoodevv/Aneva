interface UploadedFile {
   id: string;
   name: string;
}

interface FileListProps {
   files: UploadedFile[];
}

const FileList: React.FC<FileListProps> = ({ files }) => {
   return (
      <div>
         <h2>Uploaded files</h2>
         <ul>
            {files.map((file) => (
               <li key={file.id}>
                  {file.name}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default FileList;
