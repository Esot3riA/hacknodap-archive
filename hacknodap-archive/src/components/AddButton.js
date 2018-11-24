import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: 0,
    paddingRight: theme.spacing.unit * 4,
  }
});

const AddButton = (props) => {
  const { classes } = props;
  return (
    <div className={classes.absolute}>
      <Tooltip placement="top" title="New Activity...">
        <Button variant="fab" color="secondary">
          <AddIcon />
        </Button>
      </Tooltip>
    </div>
  );
}

export default withStyles(styles)(AddButton);