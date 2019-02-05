import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ImageDropZone from './ImageDropZone';

const AddDialog = ({ open, onClose, newHistoryData, onChangeDate }) => {
  
  const handleChangeDate = (e) => onChangeDate(e.target.value);
  
  return (
    <Dialog
      aria-labelledby="add-history-dialog"
      open={open}
      onClose={onClose}>
      <DialogTitle>새 히스토리 생성</DialogTitle>
      <DialogContent>
        <TextField
          name="historyDate"
          type="date"
          label="히스토리 날짜"
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
          margin="dense"
        />
        <ImageDropZone />
      </DialogContent>
      <DialogActions>
        <Button color="primary">
          NEXT
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