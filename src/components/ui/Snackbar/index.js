import React from 'react';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  error: {
    color: 'rgb( 255, 0, 0)',
  },
  warning: {
    color: '#FF8C00',
  },
  info: {
    color: '#00BFFF',
  },
  success: {
    color: '#00FF00',
  },
});

const textClass = (classes, status = null) => {
  switch (status) {
    case 'error':
      return classes.error;
    case 'warning':
      return classes.warning;
    case 'info':
      return classes.info;
    case 'success':
      return classes.success;
    default:
      return null;
  }
};

const SimpleSnackbar = (props) => {
  const { classes } = props;
  const statusClass = textClass(classes, props.status);
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={props.open}
      autoHideDuration={6000}
      onClose={props.handleClose}
      SnackbarContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id" className={statusClass}>{props.message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={props.handleClose}
        ><CloseIcon />
        </IconButton>,
      ]}
    />
  );
};


export default withStyles(styles)(SimpleSnackbar);
