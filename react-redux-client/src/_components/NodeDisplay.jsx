import React,  {Component} from 'react';
import '../_css/NodeDisplay.css';
import { Link } from 'react-router-dom';

class NodeDisplay extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="content-container blurred margT">
        <div class="temp container col-6"> </div>
      </div>
    )
  }
}

module.exports = NodeDisplay;
