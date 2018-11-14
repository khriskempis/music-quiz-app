import React from 'react';

import './Test.css';

class testForm extends React.Component {
  render() {
    return (
      <div>
        <form className="test-container">
          <div class="test-timer">
              <p>4:30</p>
            </div>

            <div class="test-question-number">
              <p>4/20</p>
            </div>

            <div class="test-question">
              <img src="" alt="picture of music note"/>
            </div>

            <div class="answers-container">
              <button>A</button>
              <button>G</button>
              <button>D</button>
              <button>C</button>
            </div>

            <button class="test-next">Next</button>

        </form>
      </div>
    );
  }
}

export default testForm