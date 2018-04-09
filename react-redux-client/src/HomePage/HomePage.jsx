import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import {IndexRoute, browserHistory} from 'react-router'
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { authActions } from '../_actions';
import '../_css/Home.css';
import { userService } from '../_services';

var Home = require('../_components/Home')
var Nav = require('../_components/Nav');
var TopBar = require('../_components/TopBar');
var Weather = require('../_components/Weather');
var Todo = require('../_components/Todo');
var NodeDisplay = require('../_components/NodeDisplay');
var Spec = require('../_components/Spec');

class HomePage extends React.Component {
    componentDidMount() {
      userService.verifyToken1();
      this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const {spec} = this.props.params
        const { user, users } = this.props;
        return (
          <Router history={browserHistory}>
            <div id="Home">
              <TopBar name={user}/>
              <Nav />
              <Switch>
                <Route exact path="/home" render={() => <Home user={this.props.user} users={this.props.users} />}/>
                <Route exact path="/node" render={function(){
                  history.pushState(null, '/node');
                  return <NodeDisplay />
                }} />
                <Route path='/:spec' component={Spec} />
                <Route render={function () {
                  return <div class="container"><p>Not Found</p></div>
                }} />
              </Switch>
            </div>
          </Router>


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

// <Route path="/node" render={() => <NodeDisplay />}/>
