import React,  {Component} from 'react';
import '../_css/Weather.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { weatherService } from '../_services';
import { weatherActions } from '../_actions';
import { LineChart, Line } from 'recharts';
import {AreaChart, Area,Brush, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

var moment = require('moment-timezone');
var dateFormat = require('dateformat');

class Weather extends React.Component {
  constructor(props){
    super(props);
    var currentTime = Date.now()
    var FcurTime = dateFormat(currentTime, "dddd, mmmm dS")
    this.state={
      sunRise: '0',
      data:[],
      currentTime:FcurTime
    }

  }


  componentDidMount(){
    this.props.dispatch(weatherActions.get5DayWeather());
    this.props.dispatch(weatherActions.getCurWeather());

  }

  componentWillUpdate(){
    if (this.props.weather.items) {
        console.log(this.props.weather.items)
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
    if(this.props.forecast.items ){
      if (this.state.data.length === 0){
        var daylist = []
        var objects = this.props.forecast.items.list
        objects.slice(0,30).map(function(key,index){
          var timeUTC =  new Date(objects[index].dt * 1000) ;
          var timePDT =  moment.tz(timeUTC, "America/Los_Angeles").format();
          var prettyDate = timePDT.slice(5,10);
          var prettyHour = timePDT.slice(11,16);
          var timePDTPretty = prettyDate +' ' +  prettyHour


          var temp = {
            time: timePDTPretty,
            temperature: objects[index].main.temp,
            description: objects[index].weather[0].description
          }
          daylist.push(temp)
        })
        this.setState({
          data:daylist
        })
      }
    }

  }

  render(){
    const { weathers } = this.props;
    if (this.props.forecast.items) {

    }
    return (
      <div className="clearfix" id="weather">

        <div className="current">
        {this.props.weather.loading &&<em> loading weather...</em>}
        {this.props.weather.items &&
          <div>
          <h4 className="city">Fremont</h4>
          <p className="currentTime">{this.state.currentTime}</p>
          <h1 className='temperature'>{this.props.weather.items.main.temp} °F</h1>
          <p className="tempDetail bold">{this.props.weather.items.weather[0].description} </p>
          <p className="tempDetail">Wind Speed: {this.props.weather.items.wind.speed} m/h</p>


          </div>
        }
        </div>
        <div className="forecast">

        {this.props.forecast.items &&
          <div >
            <AreaChart width={1100} height={200} data={this.state.data} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="time"/>
              <YAxis/>
              <Tooltip/>
              <Area type='monotone' dataKey='temperature' stroke='#82ca9d' fill='#82ca9d' />
              <Brush />
            </AreaChart>

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


 // <div className="description">Weather: {this.props.weather.items.weather[0].description}</div>
 // <div>Current Temp: {this.props.weather.items.main.temp} °F</div>
 //
 // <div>Sun Rise: {this.state.sunRise}</div>
 // <div>Sun Set: {this.state.sunSet}</div>
