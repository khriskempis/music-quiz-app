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
import TimeIcon from "../../assets/icons/time";
import GearIcon from "../../assets/icons/gear";

import { Activity, Hero as ActivityHero } from "./activity";
import { Practice, Hero as PracticeHero } from "./practice";
import Test from "./test";

import { setHasFinished, setHasStarted } from "../../actions/test-data";

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
          <div className="content">
            <Router>
              <div className="dashboard-content">
                <Route
                  exact
                  path={`${this.props.match.path}`}
                  component={ActivityHero}
                />
                <Route
                  path={`${this.props.match.path}/practice`}
                  component={PracticeHero}
                />
                <nav>
                  <ul>
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
          </div>
          <Sidebar user={this.props.user.name} />
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);
