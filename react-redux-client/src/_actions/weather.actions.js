import { weatherConstants } from '../_constants';
import { weatherService } from '../_services';
import { history } from '../_helpers';

export const weatherActions = {
  get5DayWeather,
  getCurWeather
}

function get5DayWeather(){
  return dispatch => {
    dispatch(request());

    weatherService.get5day()
      .then(
        forecast => {dispatch(success(forecast))}
      )
  };

  function request(){
    return {type: weatherConstants.FORECAST_REQUEST}
  }
  function success(forecast) {
    return {type: weatherConstants.FORECAST_SUCCESS, forecast}
  }
}

function getCurWeather(){
  return dispatch => {
    dispatch(request());
    weatherService.getCurrent()
      .then(
        weather => {dispatch(success(weather))}
      )
  };

  function request(){
    return {type: weatherConstants.CURRENT_REQUEST}
  }
  function success(weather) {
    return {type: weatherConstants.CURRENT_SUCCESS, weather}
  }
}
