import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Hero from "./hero";
import Navigation from "../../components/navigation";
import Details from "./details";
import Features from "./features";
import Footer from "../../components/footer";
import RegisterForm from "../../components/registerForm";

// import "./landing.css";
import { setHasFinished } from "../../actions/test-data";

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null
});

export class Landing extends Component {
  componentDidMount() {
    this.props.dispatch(setHasFinished());
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="landing-page">
        <Navigation />
        <main>
          <Hero />

          <section>
            <Details />
          </section>

          <section className="section-1">
            <Features />
          </section>

          <section>
            <RegisterForm />
          </section>

          <Footer />
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Landing);
