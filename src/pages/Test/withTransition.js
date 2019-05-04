import React from 'react';

function withTransition(WrappedComponent){
  return class cardTransition extends React.Component {


    render() {
      return <WrappedComponent { ...this.props }/>
    }
  }
}

export default withTransition