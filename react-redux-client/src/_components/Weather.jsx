import React,  {Component} from 'react';
import '../_css/Weather.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { weatherService } from '../_services';
import { weatherActions } from '../_actions';

var dateFormat = require('dateformat');

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state={
      sunRise: '0'
    }
  }


  componentDidMount(){
    this.props.dispatch(weatherActions.get5DayWeather());
    this.props.dispatch(weatherActions.getCurWeather());

  }

  componentWillUpdate(){
    if (this.props.weather.items) {

        var _sunRise = new Date(this.props.weather.items.sys.sunrise);
        var _sunSet = new Date(this.props.weather.items.sys.sunset);
        var FsunRise = dateFormat(_sunRise, "h:MM:ss TT")
        var FsunSet = dateFormat(_sunSet, "h:MM:ss TT")
        if (this.state.sunRise !== FsunRise){
          this.setState({
            sunRise: FsunRise
          })
        }
        if (this.state.sunSet !== FsunSet){
          this.setState({
            sunSet: FsunSet
          })
        }

    }
  }

  render(){
    const { weathers } = this.props;
    if (this.props.forecast.items) {
        console.log(this.props.forecast.items.list[0])
    }

    return (
      <div className="clearfix" id="weather">

        <div className="current">
        {this.props.weather.loading &&<em> loading weather...</em>}
        {this.props.weather.items &&
          <div>
          <div>City: {this.props.weather.items.name}</div>

          <div className="description">Weather: {this.props.weather.items.weather[0].description}</div>
          <div>Current Temp: {this.props.weather.items.main.temp} °F</div>
          <div>Wind Speed: {this.props.weather.items.wind.speed} m/h</div>
          <div>humidity: {this.props.weather.items.main.humidity} %</div>
          <div>Sun Rise: {this.state.sunRise}</div>
          <div>Sun Set: {this.state.sunSet}</div>
          </div>
        }
        </div>
        <div className="forecast">

        {this.props.forecast.items &&
          <div >

            <div>  Current location: {this.props.forecast.items.city.name}</div>
            {this.props.forecast.items.list.slice(0,5).map((day,index) => (
              <div className="forecast-detail">
                <div key={index}>Date: {day.dt_txt.slice(5,10)}</div>
                <div>Weather: {day.weather[0].description} </div>
                <div>temperature: {day.main.temp} °F</div>
              </div>
            ))}
          </div>}
        </div>

      </div>
    )
   }
 }


 function mapStateToProps(state) {
     const { forecast, weather } = state;
     return {
         forecast: state.weathers,
         weather: state.weather
     };
 }

 const connectedWeather = connect(mapStateToProps)(Weather);
 export { connectedWeather as Weather };
