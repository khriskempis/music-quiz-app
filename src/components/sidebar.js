import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import MenuIcon from "../assets/icons/menu";
import { fetchTestMiddle } from "../actions/test-data";

import "./sidebar.css";

export class sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleMenuClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <div
        className={
          this.state.clicked ? "sidebar-links" : "sidebar-links sidebar-right"
        }
      >
        <div className="user-image">
          <div
            onClick={e => this.handleMenuClick()}
            className="toggle-menu-button"
          >
            <MenuIcon />
          </div>

          <p>Welcome {this.props.user}!</p>
        </div>

        <h4>Weekly Objectives</h4>
        <ul className="weekly-objectives">
          <li>Complete 3 Practice Tests</li>
          <li>Complete 2 Test</li>
        </ul>

        <h4>Share your Thoughts</h4>

        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfGKmbKUDEnB5bGNSEOLkKG5bFp0XUy7y540DnI5UqwOmITvA/viewform?usp=sf_link"
            >
              Take a Survey
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect()(sidebar);
