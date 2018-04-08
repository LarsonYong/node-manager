import React,  {Component} from 'react';
import '../_css/Weather.css';
import { Link } from 'react-router-dom';

class Weather extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="weather">
        <div class="location">Current location: Fremont, CA</div>
      </div>
    )
   }
 }


module.exports = Weather;
