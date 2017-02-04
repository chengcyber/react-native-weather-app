import * as api from '../weatherAPI';
import { TYPE } from '../constants';
import { getWeatherIsFetching, getCoordsIsFetching } from '../reducers';

export const fetchWeather = (lat, lon) => (dispatch, getState) => {

  // console.log('getWeatherIsFetching', getWeatherIsFetching(getState()))
  if (getWeatherIsFetching(getState())) return Promise.resolve();
  dispatch({
    type: TYPE.FETCH_WEATHER_REQUEST,
    lat,
    lon
  });
  return api.fetchWeather(lat, lon).then(
    response => 
      dispatch({
        type: TYPE.FETCH_WEATHER_SUCCESS,
        response
      }),
    error => 
      dispatch({
        type: TYPE.FETCH_WEATHER_FAILURE,
        error: error.message || 'fetch weather failed'
      })
  );
}

export const getCoordsCurrent = () => (dispatch, getState) => {
  const promise = new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      response => {
        dispatch({
          type: TYPE.FETCH_CUR_POS_SUCCESS,
          response
        });
        resolve(response);
      },
      error => {
        dispatch({
          type: TYPE.FETCH_CUR_POS_FAILURE,
          error: error.message || 'get current position failed'
        });
        reject(error);
      },
      { timeout: 10000}
    )
  });

  if (getCoordsIsFetching(getState())) return Promise.resolve();
  dispatch({
    type: TYPE.FETCH_CUR_POS_REQUEST
  });
  return promise;
}