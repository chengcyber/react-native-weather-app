import * as api from '../weatherAPI';
import * as CONST from '../constants';
import { getIsFetching } from '../reducers';

export const fetchWeather = (lat, lon) => (dispatch, getState) => {

  if (getIsFetching(getState())) return Promise.resolve();


  dispatch({
    type: CONST.FETCH_WEATHER_REQUEST,
    lat,
    lon
  });
  
  return api.fetchWeather(lat, lon).then(
    response => 
      dispatch({
        type: CONST.FETCH_WEATHER_SUCCESS,
        response
      }),
    error => 
      dispatch({
        type: CONST.FETCH_WEATHER_FAILURE,
        error: error.message || 'fetch weather failed'
      })
  );
}

