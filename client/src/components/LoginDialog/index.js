import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from "@material-ui/core/TextField";

const LoginDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="paper">
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="ID"
          type="string"
          fullWidth
        />
        <TextField
          margin="dense"
          label="PASSWORD"
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Login
        </Button>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;