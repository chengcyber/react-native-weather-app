import * as CONST from './constants';

const temperature = (store, action) => {
  if (action.type === CONST.FETCH_WEATHER_SUCCESS) {
    return action.temperature;
  }
  return store
}