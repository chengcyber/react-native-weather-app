import { combineReducers } from 'redux';
import * as CONST from '../constants';

const main = (state = {}, action) => {
  switch(action.type) {
    case CONST.FETCH_WEATHER_SUCCESS:
      return action.response
    case CONST.FETCH_WEATHER_REQUEST:
      return {}
    default: return state;
  }
}

const isFetching = (state = false, action) => {
  switch(action.type) {
    case CONST.FETCH_WEATHER_REQUEST:
      return true;
    case CONST.FETCH_WEATHER_SUCCESS:
    case CONST.FETCH_WEATHER_FAILURE:
      return false;
    default:
      return state;
  }
}

const errMsg = (state = '', action) => {
  switch (action.type) {
    case CONST.FETCH_WEATHER_FAILURE:
      return action.error
    case CONST.FETCH_WEATHER_REQUEST:
      return ''
    default: 
      return state;
  }
}

export default combineReducers({
  main,
  isFetching,
  errMsg
});


export const getWeatherMain = (state) => state.main

export const getIsFetching = (state) => state.isFetching

export const getErrMsg = (state) => state.errMsg
