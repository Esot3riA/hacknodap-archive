import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Properties } from '../../config/properties';
import styled from 'styled-components';

const Picture = styled.img`
  max-width: 100%;
  margin: 10px 0;
`;

const HistoryDialog = ({ open, onClose, onRemove, history }) => {
  const title = history.get('title');
  const imageURLs = history.get('imageURL').toJS();
  const PictureList = imageURLs.map(
    (imageURL, i) => (
      <Picture key={i}
               src={Properties.restAPIURL + imageURL} />)
  );
  
  const handleRemove = () => {
    onRemove(history.get('_id'));
  };
  
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      scroll="paper">
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent dividers="true">
        {PictureList}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRemove} color="secondary">
          Remove
        </Button>
        <Button onClick={onClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HistoryDialog;