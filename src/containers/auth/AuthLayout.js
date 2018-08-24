import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = {
  container: {
    marginTop: '67px',
  },
};


const AuthLayout = props => (
  <Grid container justify={'center'} classes={{ container: props.classes.container }} >
    <Grid item xs={12} sm={6} md={4} >
      {props.children}
    </Grid>
  </Grid>
);

export default withStyles(styles)(AuthLayout);
