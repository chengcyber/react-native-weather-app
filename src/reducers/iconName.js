import { TYPE } from '../constants';

const iconName = (state = 'md-ionitron', action) => {

  /**
   * Request fetch weather from api
   */
  if (action.type === TYPE.FETCH_WEATHER_REQUEST) {
    return 'md-time';
  }


  /**
   * Response weather infos from api
   */
  if (action.type === TYPE.FETCH_WEATHER_SUCCESS) {
    const weather = action.response.weather;
    switch(weather) {
      case 'Clear': return 'md-sunnj'
      case 'Rain': return 'md-rainy'
      case 'Thunderstorm': return 'md-thunderstorm'
      case 'Clouds': return 'md-cloudy'
      case 'Snow': return 'md-snow'
      case 'Drizzle': return 'md-umbrella'
      case 'Haze': return 'ios-color-filter'
      case 'Mist': return 'ios-color-filter'
      default: return 'md-ionitron'
    } 
  }
  
  /**
   * Error occurred when fetching weather from api
   */
  if (action.type === TYPE.FETCH_WEATHER_FAILURE) {
    return 'md-ionitron'
  } 
  
  return state;
}

export default iconName;

export const getIconName = (state) => state