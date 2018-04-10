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
        <div class="location">WEATHER FORCAST
        <span>  Current location: Fremont, CA</span>
        </div>

        <img class='weather-icon' src={require('../_assets/cloud.png')}></img>
        <img class='weather-icon' src={require('../_assets/sunny.png')}></img>
        <img class='weather-icon' src={require('../_assets/sunny.png')}></img>
        <img class='weather-icon' src={require('../_assets/running.png')}></img>
        <img class='weather-icon' src={require('../_assets/sunny.png')}></img>
      </div>
    )
   }
 }


module.exports = Weather;
