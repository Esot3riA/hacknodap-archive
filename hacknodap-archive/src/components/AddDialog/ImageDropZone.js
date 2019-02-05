import React, { Component } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { List } from 'immutable';

class ImageDropZone extends Component {
  static defaultProps = {
    onChangeNewImage: () => console.warn('onChangeNewImage is not defined')
  };
  state = {
    files: []
  };
  
  handleChangeImage = (files) => {
    this.setState({
      files: files
    });
  };
  handleSave = (files) => {
    const newImages = List(files);
    const { onChangeNewImage } = this.props;
    onChangeNewImage(newImages);
  };
  
  render() {
    return (
      <DropzoneArea onChange={this.handleChangeImage} />
    );
  }
}

export default ImageDropZone;