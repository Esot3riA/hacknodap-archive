import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 8,
  }
});

const AddButton = (props) => {
  const { classes } = props;
  return (
    <Tooltip title="New Activity..." placement="top">
      <Button
        variant="fab"
        color="primary"
        className={classes.absolute}>
        <AddIcon />
      </Button>
    </Tooltip>
  );
}

export default withStyles(styles)(AddButton);