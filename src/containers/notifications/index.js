import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleSnackBar from '../../components/ui/Snackbar';

import * as actions from './actions';

class Notification extends Component {
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.destroyNotification();
    this.setState({ open: false });
  };

  render() {
    if (!this.props.show) return null;
    return (
      <SimpleSnackBar
        message={this.props.message}
        status={this.props.status}
        open={this.props.show}
        handleClose={this.handleClose}
      />
    );
  }
}

const mapStateToProps = state => ({
  show: state.Notification.show,
  message: state.Notification.message,
  status: state.Notification.status,
});

const mapDispatchToProps = {
  destroyNotification: actions.destroyNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
