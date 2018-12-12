import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import MenuIcon from '../assets/icons/menu';
import {fetchTestMiddle} from '../actions/test-data';

import './sidebar.css';

class sidebar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleMenuClick(){
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div>
          <div className={ this.state.clicked ? "sidebar-links" : "sidebar-links sidebar-left"}>

            <div className="user-image">
              <div 
                onClick={e => this.handleMenuClick()}
                className="toggle-menu-button">
                  <MenuIcon/>
              </div>

              <p>Welcome {this.props.user}!</p>
            </div>

            <ul>
              <li onClick={e => this.props.dispatch(fetchTestMiddle())}>
                <Link to="/test">
                  Practice
                </Link>
              </li>
              <li onClick={e => this.props.dispatch(fetchTestMiddle())}>
                <Link to="/test">
                  Take a Test
                </Link>
              </li>
            </ul>

            <h4>Weekly Objectives</h4>
            <ul className="weekly-objectives">
              <li>Complete 3 Practice Tests</li>
              <li>Complete 2 Test</li>
            </ul>

            <h4>Share your Thoughts</h4>

            <p>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfGKmbKUDEnB5bGNSEOLkKG5bFp0XUy7y540DnI5UqwOmITvA/viewform?usp=sf_link">
                Take a Survey
              </Link>
            </p>
          </div>

      </div>
    );
  }

}

export default connect()(sidebar);