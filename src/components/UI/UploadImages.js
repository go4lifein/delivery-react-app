import React from 'react';
import {useDropzone} from 'react-dropzone';
import '../../styles/dropzone.css';

function UploadImageFile({maxFiles = 1, setFiles, ...props}) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({ onDropAccepted, accept: 'image/jpeg, image/png', maxFiles, ...props });
  
  function onDropAccepted(files) {
    setFiles(files);
  }
  const files = acceptedFiles.map(file => {

    return (
      <li key={file.path}>
        <img src={file.data_url} alt={file.path} style={{maxHeight: 100}}/>
        {file.path} - {file.size} bytes
      </li>
    )
  });

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

export default UploadImageFile;