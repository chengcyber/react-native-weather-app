import { combineReducers } from 'redux';
import { TYPE } from '../constants';

const main = (state = {}, action) => {
  switch(action.type) {
    case TYPE.FETCH_WEATHER_SUCCESS:
      return action.response
    case TYPE.FETCH_WEATHER_REQUEST:
      return {}
    default: return state;
  }
}

const isFetching = (state = false, action) => {
  switch(action.type) {
    case TYPE.FETCH_WEATHER_REQUEST:
      return true;
    case TYPE.FETCH_WEATHER_SUCCESS:
    case TYPE.FETCH_WEATHER_FAILURE:
      return false;
    default:
      return state;
  }
}

const errMsg = (state = '', action) => {
  switch (action.type) {
    case TYPE.FETCH_WEATHER_FAILURE:
      return action.error
    case TYPE.FETCH_WEATHER_REQUEST:
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
