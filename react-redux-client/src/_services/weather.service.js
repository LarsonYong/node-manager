import { browserHistory } from 'react-router';

export const weatherService = {
  get5day,
  getCurrent
};

function get5day(){
  const api_key='dde79685c5a47da02f42960ad609328f';
  const requestOptions = {
    method: 'GET'
  }
  return fetch('http://api.openweathermap.org/data/2.5/forecast?zip=94560,us&APPID=dde79685c5a47da02f42960ad609328f&units=imperial', requestOptions)
          .then(resp => resp.json())
          .then(json => {

            return json
          })
}

function getCurrent(){
  const requestOptions = {
    method: 'GET'
  }
  return fetch('http://api.openweathermap.org/data/2.5/weather?zip=94539,us&APPID=dde79685c5a47da02f42960ad609328f&units=imperial', requestOptions)
          .then(resp => resp.json())
          .then(json => {
            
            return json
          })
}
