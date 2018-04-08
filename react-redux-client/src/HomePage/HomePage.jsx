import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import '../_css/Home.css';

var Nav = require('../_components/Nav');
var TopBar = require('../_components/TopBar');
var Weather = require('../_components/Weather');
var Todo = require('../_components/Todo');

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
          <div>
            <TopBar name={user}/>
            <Nav />
            <div className="content-container margT">
                <div class="welcome-area">
                  <h1 class="welcome">WELCOME ON DASHBOARD</h1>
                  <img class="welcome-icon" src={require('../_assets/Icons/pin.png')}></img>
                </div>
                <div class="content">
                  <div class="weather outline">
                    <Weather />
                  </div>
                  <div class="col-md-6 outline">
                      <Todo />
                  </div>
                  <div class="col-md-6 outline">
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
                    <div class="shotcut outline col-md-6">
                    <div class="template1">Shotcut area</div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
