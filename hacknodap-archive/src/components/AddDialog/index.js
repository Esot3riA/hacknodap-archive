import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddDialog = ({ open, onClose }) => {
  return (
    <Dialog
      aria-labelledby="add-history-dialog"
      open={open}
      onClose={onClose}>
      <DialogTitle>Add New History...</DialogTitle>
      <DialogContent>
        <TextField
          name="historyDate"
          label="History Date (ex: 2019.01.17)"
          variant="outlined"
          fullWidth
          margin="normal"
          autoFocus
        />
        <TextField
          name="historyTitle"
          label="History Title (ex: 핵노답 스키장 여행)"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          name="historyContent"
          label="History Content (ex: 스키장 여행을 갔다왓따. 근데 많이 다쳣따..)"
          variant="outlined"
          multiline
          rows="10"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary">
          Add
        </Button>
        <Button
          color="secondary"
          onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDialog;