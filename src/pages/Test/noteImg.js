import React from "react";
import { CSSTransition } from "react-transition-group";

class img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeImg: false
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.hasAnswered !== prevProps.hasAnswered) {
      this.setState({
        changeImg: !this.state.changeImg
      });
    }
  }

  render() {
    return (
      <CSSTransition
        in={this.state.changeImg}
        appear={true}
        timeout={2000}
        classNames="note-img-animation"
      >
        <div className="test-question">
          <img src={this.props.imgUrl} alt="music note" />
        </div>
      </CSSTransition>
    );
  }
}

export default img;
