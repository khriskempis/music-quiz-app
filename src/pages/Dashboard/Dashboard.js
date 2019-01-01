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

export class Dashboard extends Component {
  componentDidMount(){
    this.props.dispatch(setHasStarted(false))
    this.props.dispatch(setHasFinished())
    // this.props.dispatch(restartTest());
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

        <section className="dashboard-section">

          <Selection 
          numberOfQuestions={10}
          class={"practice-test test-area"}
          selection={"Practice"}/>

          <Selection 
          numberOfQuestions={20}
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