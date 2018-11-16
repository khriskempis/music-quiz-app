import React, { Component } from 'react';
import { connect } from 'react-redux';

import TestForm from "./testForm";

import Navigation from '../../components/navigation'

function mapStateToProps(state) {
  return {

  };
}

class Test extends Component {
  render() {
    return (
      <div className="test-page">
       <Navigation />
        
        <main>

          <header>
            <h3>Treble Clef Test</h3>
          </header>

          <section>
            <TestForm />
          </section>
        </main>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Test);