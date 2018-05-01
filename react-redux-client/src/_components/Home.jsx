import React,  {Component} from 'react';
import '../_css/Home.css';
import { Link } from 'react-router-dom';
import { Weather } from './Weather';
import { Todo } from './Todo'

var Nav = require('../_components/Nav');
var TopBar = require('../_components/TopBar');
// var Weather = require('../_components/Weather');
// var Todo = require('../_components/Todo');


class Home extends React.Component {
      constructor(props){
        super(props);
      }

      render() {
        const {user, users} = this.props;
        return (
            <div className=" content-container smMargT">
                <div className="welcome-area">
                  <h1 className="welcome ">WELCOME ON DASHBOARD</h1>
                  <img className="welcome-icon" src={require('../_assets/Icons/pin.png')}></img>
                </div>
                <div className="">
                  <div className="weather white">
                    <Weather />
                  </div>
                  <div className="col-6 white">
                      <Todo name={user}/>
                  </div>
                  <div className="col-6 white ">
                    <h3 className="quote-title">Inspiring Quote of the day:</h3>
                    <div className="other backg2">

                      <h3 className="quote">The only person you should try to be better than is the person you were yesterday</h3>
                    </div>
                  </div>
                </div>
            </div>

        )
      }
}

module.exports = Home;
//
//
// <div className="shotcut white">
// <div className="template1">Shotcut area</div>
//
// </div>
