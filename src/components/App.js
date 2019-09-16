import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Sign-In/SignIn";
import Test from "../pages/Test/Test";
import Dashboard from "../pages/Dashboard/Dashboard";
import Results from "../pages/Results/Results";

import { refreshAuthToken } from "../actions/auth";

// import "./App.css";
import "../css/main.css";

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }

    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <main>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/register" component={Register} />
              <Route path="/signin" component={SignIn} />
              <Route path="/test" component={Test} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/results" component={Results} />
              <Route exact render={() => <h1>404 Page Does Not Exist!</h1>} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
