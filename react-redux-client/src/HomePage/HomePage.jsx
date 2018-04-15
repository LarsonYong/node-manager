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
import { NodeDisplay } from '../_components/NodeDisplay';
import { NodeConfig } from '../_components/NodeConfig';

var Home = require('../_components/Home')
var Nav = require('../_components/Nav');
var TopBar = require('../_components/TopBar');
var Weather = require('../_components/Weather');
var Todo = require('../_components/Todo');


class HomePage extends React.Component {
    componentDidMount() {
      userService.verifyToken1();
      this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {

        const { user, users } = this.props;
        return (
          <Router history={browserHistory}>
            <div id="Home">
              <TopBar name={user}/>
              <Nav />
              <Switch>
                <Route path="/home" render={() => <Home user={this.props.user} users={this.props.users} />}/>
                <Route exact path="/node" render={function(){

                  return <NodeDisplay />
                }} />

                <Route exact path="/config" render={function(){
                  return <NodeConfig />
                }} />
                <Route exact path="/config:id" render={function(){

                  return <NodeConfig />
                }} />
                <Route path="/login" render={function() {
                  location.href='/login'
                }} />
                <Route path='/*' render={function () {
                  return <div className="container"><p>Not Found</p></div>
                }} />
                <Route render={function () {
                  return <div className="container"><p>Not Found</p></div>
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
// <Route path='/:spec' component={Spec} />
// const {spec} = this.props.params

// history.pushState(null, '/node');
