import React from "react";
import { TweenLite, Power4 } from "gsap";

class img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeImg: false
    };
    this.imgElement = null;
    this.imgTween = null;
  }

  toggleComponent() {
    this.setState({ changeImg: !this.state.changeImg });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.img !== prevProps.img ||
      this.props.currentQuestion !== prevProps.currentQuestion
    ) {
      this.imgTween = TweenLite.from(this.imgElement, 0.5, {
        y: -200,
        easeIn: Power4
      });
    }
  }

  render() {
    return (
      <div className="test-question" ref={div => (this.imgElement = div)}>
        <img src={this.props.img} alt="music note" />
      </div>
    );
  }
}

export default img;
