import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { List } from 'immutable';

const ImageDropZone = ({ onChangeImage }) => {
  
  const handleChangeImage = (files) => {
    const newImages = List(files);
    onChangeImage(newImages);
  };
  // const handleSave = (files) => {
  // };
  
  return (
    <DropzoneArea
      acceptedFiles={['image/*']}
      dropzoneText="Select or drag-drop history pictures..."
      filesLimit={10}
      onChange={handleChangeImage} />
  );
}

ImageDropZone.defaultProps = {
  onChangeImage: () => console.warn('onChangeImage is not defined')
}

export default ImageDropZone;