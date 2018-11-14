import React, { Component } from 'react';
import { connect } from 'react-redux';

import './dashboard.css';

import Sidebar from '../../components/sidebar';
import Navigation from '../../components/navigation';
import Selection from './selection';

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
        <section className="dashboard">
          <Selection />
        </section>
        
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Dashboard);