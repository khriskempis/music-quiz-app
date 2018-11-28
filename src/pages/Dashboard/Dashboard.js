import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import './dashboard.css';

import Sidebar from '../../components/sidebar';
import Navigation from '../../components/navigation';
import Selection from './selection';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null,
  user: state.auth.currentUser
})

class Dashboard extends Component {
  render() {

    if(!this.props.isLoggedIn){
      return <Redirect to="/signin" />
    }

    return (
      <div>

        <Navigation />

        <Sidebar user={this.props.user.name}/>
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