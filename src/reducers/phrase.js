import { TYPE } from '../constants';

const initialState = {
    title: 'Hello RNweather',
    subtitle: '',
    highlight: 'RNweather',
    color: '#636363',
    background: '#9C9C9C'
}

const phrase = (state = initialState, action) => {
  /**
   * Response weather infos from api
   */
  if (action.type === TYPE.FETCH_WEATHER_REQUEST) {
    return {
      title: 'Fetching current weather',
      subtitle: 'Be patient, you are witnessing a miracle',
      highlight: 'Fetching',
      color: '#636363',
      background: '#9C9C9C'
    }
  }

  /**
   * Response weather infos from api
   */
  if (action.type === TYPE.FETCH_WEATHER_SUCCESS) {
    const weather = action.response.weather;
    switch(weather) {
      case 'Clear': return {
        title: 'Sunny, have a good time.',
        subtitle: 'go out side!',
        highlight: 'Sunny',
        color: '#E32500',
        background: '#FFD017'
      }
      case 'Rain': return {
        title: 'rain... rain... rain... go away',
        subtitle: 'stay home all day',
        highlight: 'away',
        color: '#004A96',
        background: '#2F353A'
      }
      case 'Thunderstorm': return {
        title: 'thundstrike coming !',
        subtitle: 'unplug devices',
        highlight: 'thundstrike',
        color: '#F8FF46',
        background: '#020202'
      }
      case 'Clouds': return {
        title: 'uphead see blue sky',
        subtitle: 'oh blue and white',
        highlight: 'blue',
        color: '#0044FF',
        background: '#939393'
      }
      case 'Snow': return {
        title: 'I got a freezing head',
        subtitle: 'no idea today',
        highlight: 'freezing',
        color: '#021D4C',
        background: '#15A678'
      }
      case 'Drizzle': return {
        title: 'Little Little Rain',
        subtitle: 'take your umbrella',
        highlight: 'Little',
        color: '#B3F6E4',
        background: '#1FBB68'
      }
      case 'Haze': return {
        title: 'Terrible Haze Attack',
        subtitle: 'turn on air purifier',
        highlight: 'Terrible',
        color: '#FFD017',
        background: '#E32500'
      }
      case 'Mist': return {
        title: 'anything which dims or darkens',
        subtitle: 'highly recommend stay home',
        highlight: 'dims',
        color: '#FFD017',
        background: '#E32500'
      }
      default: return {
        title: 'unknown weather',
        subtitle: 'you got a mysterious weather',
        highlight: 'unknown',
        color: '#636363',
        background: '#9C9C9C'
      }
    }
  }

  /**
   * Error occurred when fetching weather from api
   */
  if (action.type === TYPE.FETCH_WEATHER_FAILURE) {
    return {
      title: 'fetch weather failed!',
      subtitle: 'check your LOCATION settings',
      highlight: 'failed',
      color: '#E32500',
      background: '#B3F6E4'
    }
  }

  return state;
}

export default phrase;


export const getPhrase = (state) => state 
