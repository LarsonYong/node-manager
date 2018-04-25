import { weatherConstants } from '../_constants';

export function weathers(state ={}, action){
  switch(action.type) {
    case weatherConstants.FORECAST_REQUEST:
        return {
          loading:true
        };
    case weatherConstants.FORECAST_SUCCESS:
        return {
          items:action.forecast
        };
    case weatherConstants.FORECAST_FAILURE:
        return {
          error: action.error
        };
    default:
        return state
  }
}

export function weather(state ={}, action){
  switch(action.type) {
    case weatherConstants.CURRENT_REQUEST:
        return {
          loading:true
        };
    case weatherConstants.CURRENT_SUCCESS:
        return {
          items:action.weather
        };
    case weatherConstants.CURRENT_FAILURE:
        return {
          error: action.error
        };
    default:
        return state
  }
}
