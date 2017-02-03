import * as CONST from './constants';

const weather = (store = {}, action) => {
  switch(action.type) {
    case CONST.FETCH_WEATHER_SUCCESS:
      return action.weather
    default: return store;
  }
}

export default weather;