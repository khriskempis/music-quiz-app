import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { PassThrough } from 'stream';

import Spinner from 'react-spinkit';

export default () => WrappedComponent => {
  function RequiresLogin(props){
    const {authenticating, loggedIn, error, ...PassThroughProps } = props;
    if(authenticating){
      return <Spinner className="spinner" name="pacman" />
    } else if (loggedIn){
      return <Redirect to='/dashboard' />
    }

    return <WrappedComponent {...PassThroughProps} />;
  }

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  RequiresLogin.displayName = `RequiresLogin{${displayName}}`;

  const mapStateToProps = state => ({
    authenticating: state.auth.loading,
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error
  })

  return connect(mapStateToProps)(RequiresLogin)
}