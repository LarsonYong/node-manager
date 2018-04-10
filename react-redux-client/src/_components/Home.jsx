import React,  {Component} from 'react';
import '../_css/Home.css';
import { Link } from 'react-router-dom';


var Nav = require('../_components/Nav');
var TopBar = require('../_components/TopBar');
var Weather = require('../_components/Weather');
var Todo = require('../_components/Todo');


class Home extends React.Component {
      constructor(props){
        super(props);
      }

      render() {
        const {user, users} = this.props;
        return (
            <div className=" content-container   margT">
                <div class="welcome-area">
                  <h1 class="welcome">WELCOME ON DASHBOARD</h1>
                  <img class="welcome-icon" src={require('../_assets/Icons/pin.png')}></img>
                </div>
                <div class="content">
                  <div class="weather ">
                    <Weather />
                  </div>
                  <div class="col-md-6 ">
                      <Todo />
                  </div>
                  <div class="col-md-6 ">
                    <div class="other">
                    <div >Hi {user}!</div>
                    <p>You're logged in with React & JWT!!</p>
                    <h3>Users from secure api end point:</h3>
                      {users.loading && <em>Loading users...</em>}
                      {users.error && <span className="text-danger">ERROR: {users.error}</span>}
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

                    </div>
                    <div class="shotcut  col-md-6">
                    <div class="template1">Shotcut area</div>
                    </div>
                </div>
            </div>

        )
      }
}

module.exports = Home;
