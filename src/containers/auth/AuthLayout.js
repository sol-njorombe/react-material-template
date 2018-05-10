import React from 'react';
import Grid from 'material-ui/Grid';

const AuthLayout = props => (
  <Grid container justify={'center'}>
    <Grid item xs={12} sm={6} md={4} >
      {props.children}
    </Grid>
  </Grid>
);

export default AuthLayout;
