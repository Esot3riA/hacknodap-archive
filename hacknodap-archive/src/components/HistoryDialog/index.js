import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Properties } from '../../config/properties';
import styled from 'styled-components';

const Picture = styled.div`
  width: 400px;
  height: 300px;
  background-image: url(${props => props.restAPIURL + props.imageURL});
	background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  margin: 20px 0;
`;

const HistoryDialog = ({ open, onClose, onRemove, history }) => {
  const title = history.get('title');
  const imageURLs = history.get('imageURL').toJS();
  const PictureList = imageURLs.map(
    (imageURL, i) => (
      <Picture
        key={i}
        restAPIURL={Properties.restAPIURL}
        imageURL={imageURL} />)
  );
  
  const handleRemove = () => {
    onRemove(history.get('_id'));
  };
  
  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="paper">
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent dividers="true">
        {PictureList}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Ok
        </Button>
        <Button onClick={handleRemove} color="secondary">
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HistoryDialog;