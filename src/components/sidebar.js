import React from 'react';
import {Link} from 'react-router-dom';

import MenuIcon from '../assets/icons/menu';

import './sidebar.css';

class sidebar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleMenuClick(){
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div>
          <div className={ this.state.clicked ? "sidebar-links" : "sidebar-links sidebar-left"}>

            <div className="user-image">
              <div 
                onClick={e => this.handleMenuClick()}
                className="toggle-menu-button">
                <MenuIcon/></div>
              <p>Welcome {this.props.user}!</p>
            </div>

            <ul>
              <li><Link to="/dashboard">Practice</Link></li>
            </ul>
          </div>

      </div>
    );
  }

}

export default sidebar