import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

class LogOut extends Component {
  componentDidMount() {
    this.props.tryLogOut();
  }

  render() {
    if (this.props.auth === true) {
      return <Redirect to={'/'} />;
    }
    return (
      <div>
        Logging out
      </div>);
  }
}

export const mapStateToProps = (state) => {
  const props = { auth: state.Auth.authenticated };
  return props;
};


const mapDispatchToProps = {
  tryLogOut: actions.tryLogOut,
};


export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
