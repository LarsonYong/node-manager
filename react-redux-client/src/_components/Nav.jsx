import React,  {Component} from 'react';
import '../_css/Nav.css';
import { Link, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom'

class Nav extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  componentWillUpdate() {
    const url = location.pathname.split("/")[1];
    const node = ReactDOM.findDOMNode(this.refs.home).classList
    switch(url){
      case 'home':
        ReactDOM.findDOMNode(this.refs.home).classList.add('selected')
        ReactDOM.findDOMNode(this.refs.node).classList.remove('selected')
        ReactDOM.findDOMNode(this.refs.config).classList.remove('selected')
        break;
      case 'node':
        ReactDOM.findDOMNode(this.refs.home).classList.remove('selected')
        ReactDOM.findDOMNode(this.refs.config).classList.remove('selected')
        ReactDOM.findDOMNode(this.refs.node).classList.add('selected')
        break;
      case 'config':
        ReactDOM.findDOMNode(this.refs.home).classList.remove('selected')
        ReactDOM.findDOMNode(this.refs.node).classList.remove('selected')
        ReactDOM.findDOMNode(this.refs.config).classList.add('selected')
      case (url.match(/config[0-9]+/) || {}).input:

        ReactDOM.findDOMNode(this.refs.home).classList.remove('selected')
        ReactDOM.findDOMNode(this.refs.node).classList.remove('selected')
        ReactDOM.findDOMNode(this.refs.config).classList.add('selected')
      }
  }
  render(){
    return (
      <nav>
      <div id="Nav">
        <div className="nav-icons">
          <NavLink to="/home" >
          <div ref="home" className="nav-icon-area selected" >
            <img className="nav-icon" src={require('../_assets/Icons/home.png')}></img>
            <div className="nav-icon-title">Dashboard</div>
          </div>
          </NavLink>
          <NavLink to="/node">
          <div ref="node" className="nav-icon-area" >
            <img className="nav-icon" src={require('../_assets/Icons/monitor.png')}></img>
            <div className="nav-icon-title">Node Monitor</div>
          </div>
          </NavLink>
          <NavLink to="/config">
          <div ref="config" className="nav-icon-area">
            <img className="nav-icon" src={require('../_assets/Icons/config.png')}></img>
            <div className="nav-icon-title">Node Config</div>
          </div>
          </NavLink>
          <div className="nav-icon-area">
            <img className="nav-icon" src={require('../_assets/Icons/user.png')}></img>
            <div className="nav-icon-title">User Admin</div>
          </div>
        </div>
        </div>
      </nav>
    )
  }
}

module.exports = Nav;

// <div className="nav-icon-area">
//   <img className="nav-icon" src={require('../_assets/Icons/todo-yellow.png')}></img>
//   <div className="nav-icon-title">To do list</div>
// </div>
