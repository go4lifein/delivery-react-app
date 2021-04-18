import React from 'react';
import {useDropzone} from 'react-dropzone';
import '../../styles/dropzone.css';

function UploadFile({maxFiles = 1, ...props}) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({ maxFiles, ...props});
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="file-dropzone-container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drop some files here, or Click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default UploadFile;