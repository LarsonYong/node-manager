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
                  <div className="col-6 white">
                    <div className="other">
                    <div >Hi {user}!</div>
                    <p>You're logged in with React & JWT!!</p>
                    <h3>Users from secure api end point:</h3>
                      {users.loading && <em>Loading users...</em>}
                      {users.error && <span classNameName="text-danger">ERROR: {users.error}</span>}
                      {users.items &&
                        <ul>
                          {users.items.map((user, index) =>
                              <li key={user._id}>
                                  {user.username }
                                  </li>
                                )}
                        </ul>
                      }

                    <p>
                    <Link to="/login">Logout</Link>
                    </p>

                    </div>
                    <div className="shotcut white">
                    <div className="template1">Shotcut area</div>
                    </div>
                    </div>

                </div>
            </div>

        )
      }
}

module.exports = Home;
