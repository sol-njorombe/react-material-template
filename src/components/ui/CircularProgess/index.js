import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

export const Progress = props => (
  <CircularProgress
    className={props.classes.progress}
  />
);

export default withStyles(styles)(Progress);
