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
        <div className="location">WEATHER FORCAST
        <span>  Current location: Fremont, CA</span>
        </div>

        <img className='weather-icon' src={require('../_assets/cloud.png')}></img>
        <img className='weather-icon' src={require('../_assets/sunny.png')}></img>
        <img className='weather-icon' src={require('../_assets/sunny.png')}></img>
        <img className='weather-icon' src={require('../_assets/running.png')}></img>
        <img className='weather-icon' src={require('../_assets/sunny.png')}></img>
      </div>
    )
   }
 }


module.exports = Weather;
