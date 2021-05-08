import React from 'react';
import ImageUploading from "react-images-uploading";
import '../../styles/image-upload.css';

// https://www.npmjs.com/package/react-images-uploading
function ImageUploadPreview({
  open = true, 
  maxNumber = 1, 
  buttonLabel = "Choose image", 
  onSubmit,
  ...props
}) {
  const [images, setImages] = React.useState([]);
  
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  if(!open) {
    return '';
  }

  return (
    <div className="p-10">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              className={`upload__image-button ${isDragging ? 'dragging': ''}`}
              onClick={onImageUpload}
              {...dragProps}
            >
              {buttonLabel}
            </button>
            <button
              disabled={imageList.length === 0}
              className={`upload__image-submit`}
              onClick={onSubmit}
            >
              Submit
            </button>
            
            {maxNumber > 1 && <button className={`remove__image-button`} onClick={onImageRemoveAll}>Remove all images</button>}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="200" className="upload__image-preview" />
                <h4>{image.file.name}</h4>
                <div className="image-item__btn-wrapper">
                  <button className={`upload__image-button`} onClick={() => onImageUpdate(index)}>Update</button>
                  <button className={`remove__image-button`} onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUploadPreview;