import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import './dashboard.css';

import Sidebar from '../../components/sidebar';
import Navigation from '../../components/navigationsScroll';
import Selection from './selection';
import { setHasFinished, setHasStarted } from '../../actions/test-data';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null,
  user: state.auth.currentUser
})

class Dashboard extends Component {
  componentDidMount(){
    this.props.dispatch(setHasStarted())
    this.props.dispatch(setHasFinished());
  }

  render() {

    if(!this.props.isLoggedIn){
      return <Redirect to="/signin" />
    }

    return (
      <div>

        <Navigation />

        <Sidebar 
          user={this.props.user.name}
          />

        <section className="dashboard">

          <Selection 
          class={"practice-test test-area"}
          selection={"Practice"}/>

          <Selection 
          class={"test test-area"}
          />
        </section>
        
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Dashboard);