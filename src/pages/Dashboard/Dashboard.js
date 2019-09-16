import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Sidebar from "../../components/sidebar";
import Navigation from "../../components/navigationsScroll";

import Activity from "./activity";
import Practice from "./practice";
import Test from "./test";

import { setHasFinished, setHasStarted } from "../../actions/test-data";

// import "./dashboard.css";

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null,
  user: state.auth.currentUser
});

export class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(setHasStarted(false));
    this.props.dispatch(setHasFinished());
    // this.props.dispatch(restartTest());
  }

  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/signin" />;
    }

    return (
      <div>
        <Navigation />
        <section className="dashboard-section">
          <Router>
            <div className="dashboard-content">
              <nav>
                <ul>
                  <li>
                    <Link to={`${this.props.match.url}/`}>Activity</Link>
                  </li>
                  <li>
                    <Link to={`${this.props.match.url}/practice`}>
                      Practice Area
                    </Link>
                  </li>
                  <li>
                    <Link to={`${this.props.match.url}/test`}>Test Area</Link>
                  </li>
                </ul>
              </nav>
              <Route
                exact
                path={`${this.props.match.path}`}
                component={Activity}
              ></Route>
              <Route
                path={`${this.props.match.path}/practice`}
                component={Practice}
              ></Route>
              <Route
                path={`${this.props.match.path}/test`}
                component={Test}
              ></Route>
            </div>
          </Router>
          <Sidebar user={this.props.user.name} />
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);
