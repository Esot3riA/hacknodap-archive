import React from 'react';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ImageDropZone from './ImageDropZone';

const NewImageDiv = styled.div`
  margin-top: 20px;
`;
const NewImageLabelDiv = styled.div`
  margin-bottom: 5px;
`;

const AddDialog = ({ open, onClose, newHistoryData, onChangeDate }) => {
  
  const handleChangeDate = (e) => onChangeDate(e.target.value);
  
  return (
    <Dialog
      aria-labelledby="add-history-dialog"
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={onClose}>
      <DialogTitle>Create New History</DialogTitle>
      <DialogContent>
        <TextField
          name="historyDate"
          type="date"
          label="날짜"
          defaultValue={newHistoryData.get('historyDate')}
	        InputLabelProps={{
          	shrink: true,
        	}}
          margin="dense"
          onChange={handleChangeDate}
        />
        <TextField
          name="historyTitle"
          label="히스토리 제목"
          fullWidth
          margin="none"
        />
        <NewImageDiv>
          <NewImageLabelDiv>
            <DialogContentText>
              활동 사진
            </DialogContentText>
          </NewImageLabelDiv>
          <ImageDropZone />
        </NewImageDiv>
      </DialogContent>
      <DialogActions>
        <Button color="primary">
          ADD
        </Button>
        <Button
          color="secondary"
          onClick={onClose}>
          CANCEL
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDialog;