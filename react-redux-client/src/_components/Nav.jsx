import React,  {Component} from 'react';
import '../_css/Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="Nav">
        <div class="nav-icons">
          <div class="nav-icon-area selected">
            <img class="nav-icon" src={require('../_assets/Icons/dash-blue.png')}></img>
            <div class="nav-icon-title">Dashboard</div>
          </div>
          <div class="nav-icon-area">
            <img class="nav-icon" src={require('../_assets/Icons/node-green.png')}></img>
            <div class="nav-icon-title">Node Monitor</div>
          </div>
          <div class="nav-icon-area">
            <img class="nav-icon" src={require('../_assets/Icons/todo-yellow.png')}></img>
            <div class="nav-icon-title">Node Config</div>
          </div>
          <div class="nav-icon-area right">
            <img class="nav-icon" src={require('../_assets/Icons/user-red.png')}></img>
            <div class="nav-icon-title">User Admin</div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Nav;

// <div class="nav-icon-area">
//   <img class="nav-icon" src={require('../_assets/Icons/todo-yellow.png')}></img>
//   <div class="nav-icon-title">To do list</div>
// </div>
