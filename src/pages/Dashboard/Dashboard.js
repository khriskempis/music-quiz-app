import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../../components/sidebar';
import Navigation from '../../components/navigation';

function mapStateToProps(state) {
  return {

  };
}

class Dashboard extends Component {
  render() {
    return (
      <div>

        <Navigation />

        <Sidebar />

        
        
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Dashboard);