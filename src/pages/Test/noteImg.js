import React from "react";
import { TweenLite, Power4 } from "gsap";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const bassImages = importAll(
  require.context("../../assets/BASS/JPGs", false, /\.(png|jpe?g|svg)$/)
);
const trebleImages = importAll(
  require.context("../../assets/TREBLE/JPGs", false, /\.(png|jpe?g|svg)$/)
);

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
    if (this.props.noteId !== prevProps.noteId) {
      this.imgTween = TweenLite.from(this.imgElement, 0.5, {
        y: -200,
        easeIn: Power4
      });
    }
    // if (this.props.currentQuestion !== prevProps.currentQuestion) {
    //   this.imgTween = TweenLite.from(this.imgElement, 0.5, {
    //     y: -200
    //     // easeIn: Power4
    //   });
    // }
  }
  findImg(bassObj, trebleObj, noteId) {
    const bassArr = Object.keys(bassObj);
    const trebleArr = Object.keys(trebleObj);

    let bassImg = bassArr.find(item => {
      return item.slice(0, 2) === noteId;
    });

    let trebleImg = trebleArr.find(item => {
      return item.slice(0, 2) === noteId;
    });

    if (noteId === "C4T") {
      trebleImg = "C4.jpg";
    }

    // console.log(bassObj[bassImg], trebleObj[trebleImg], noteId);
    return bassObj[bassImg] || trebleObj[trebleImg];
  }

  render() {
    return (
      <div className="test-question" ref={div => (this.imgElement = div)}>
        <img
          src={this.findImg(bassImages, trebleImages, this.props.noteId)}
          alt="music note"
        />
      </div>
    );
  }
}

export default img;
