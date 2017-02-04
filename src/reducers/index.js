import { combineReducers } from 'redux';
import weather, * as fromWeather from './weather';
import iconName, * as fromIconName from './iconName';
import phrase, * as fromPhrase from './phrase';


const reducer = combineReducers({
  weather,
  iconName,
  phrase
})


export default reducer;

export const getIsFetching = (state) =>
  fromWeather.getIsFetching(state.weather)
  
export const getWeatherMain = (state) =>
  fromWeather.getWeatherMain(state.weather)
  
export const getFetchErrMsg = (state) =>
  fromWeather.getErrMsg(state.weather)
  
export const getIconName = (state) =>
  fromIconName.getIconName(state.iconName)
  
export const getPhrase = (state) =>
  fromPhrase.getPhrase(state.phrase)