import React from 'react';
import Snackbar from '@material-ui/core/Snackbar/index';
import IconButton from '@material-ui/core/IconButton/index';
import CloseIcon from '@material-ui/icons/Close';

const InfoSnackBar = ({ open, onClose, message }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={open}
      autoHideDuration={1500}
      onClose={onClose}
      message={message}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ]}
    >
    </Snackbar>
  );
};

export default InfoSnackBar;