import React,  {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

var Home = require('../_components/Home')
var NodeDisplay = require('../_components/NodeDisplay');

class Spec extends Component {
  render () {
      const {spec} = this.props.params

      switch (spec) {
        case 'home':
          return <Home />
        case 'node':
          return <NodeDisplay />
        default:
          return <Home />
      }
    }

}

module.exports = Spec;
