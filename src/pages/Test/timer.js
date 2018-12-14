import React from 'react';
import {connect} from 'react-redux';

import { setTimeRemaining, setOutOfTime } from '../../actions/test-data'

const mapStateToProps = state => ({
  hasFinished: state.testData.hasFinished
})

export class timer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      seconds: '00',
      value: 1,
    }
  }

  componentDidMount(){
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.value;
    this.secondsRemaining = time * 60;
  }

  componentWillUnmount(){
    clearInterval(this.intervalHandle);
    this.props.dispatch(setTimeRemaining(`${this.state.value}:${this.state.seconds}`))
  }

  tick = () => {
    let min = Math.floor(this.secondsRemaining / 60)
    let sec = this.secondsRemaining - ( min * 60 ) 

    this.setState({
      value: min,
      seconds: sec
    })

    if(sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      })
    }

    if(min === 0 && sec === 0){
      this.props.endTest();
      this.props.dispatch(setOutOfTime());
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--
  }

  render() {

    return (
      <div className="test-timer">
        <p>{this.state.value}:{this.state.seconds}</p>
      </div>

    );
  }
}

export default connect()(timer);