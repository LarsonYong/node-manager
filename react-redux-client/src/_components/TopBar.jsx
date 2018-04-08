import React,  {Component} from 'react';
import '../_css/TopBar.css';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link, NavLink,Switch } from "react-router-dom";



class TopBar extends React.Component {
      constructor(props){
        super(props);
      }
      render() {
        return (
          <div id="top-nav">
            <ul class="top-ul">
              <img class="top-logo" src={require('../_assets/Icons/logo-icon.png')}></img>
              <li class="top-logout "><Link to="/login">Logout</Link></li>
              <li class="top-user ">Hi  {this.props.name} </li>
            </ul>
          </div>
        )
      }
}

// export default TopBar
module.exports = TopBar;
