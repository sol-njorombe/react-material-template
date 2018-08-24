import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CardHeader } from 'material-ui';

const styles = {
  root: {
    backgroundColor: '#3F51B5',
  },
  title: {
    color: '#fff',
  },
};

function Classes(props) {
  return (
    <CardHeader
      classes={{
        root: props.classes.root,
        title: props.classes.title,
      }}
      {...props}
    />
  );
}

export default withStyles(styles)(Classes);
