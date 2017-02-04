import { combineReducers } from 'redux';
import weather, * as fromWeather from './weather';
import iconName, * as fromIconName from './iconName';
import phrase, * as fromPhrase from './phrase';
import coords, * as fromCoords from './coords';


const reducer = combineReducers({
  weather,
  iconName,
  phrase,
  coords
})


export default reducer;

export const getWeatherIsFetching = (state) =>
  fromWeather.getIsFetching(state.weather)
  
export const getWeatherMain = (state) =>
  fromWeather.getWeatherMain(state.weather)
  
export const getWeatherErrMsg = (state) =>
  fromWeather.getErrMsg(state.weather)
  
export const getIconName = (state) =>
  fromIconName.getIconName(state.iconName)
  
export const getPhrase = (state) =>
  fromPhrase.getPhrase(state.phrase)
  
export const getCoordsCurrent = (state) =>
  fromCoords.getCurrent(state.coords)
  
export const getCoordsIsFetching = (state) =>
  fromCoords.getIsFetching(state.coords)
  
export const getCoordsErrMsg = (state) =>
  fromCoords.getErrMsg(state.coords)