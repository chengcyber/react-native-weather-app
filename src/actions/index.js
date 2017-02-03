import * as api from '../weatherAPI';
import * as CONST from '../reducers/constants';

export const fetchWeather = (lat, lon) => (dispatch, getState) => {
  dispatch({
    type: CONST.FETCH_WEATHER_REQUEST,
    lat,
    lon
  })
  
  return api.fetchWeather(lat, lon).then(
    response => 
      dispatch({
        type: CONST.FETCH_WEATHER_SUCCESS,
        response
      }),
    error => 
  )
}