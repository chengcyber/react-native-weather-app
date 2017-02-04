/**
 * Constants of action type
 */
export const TYPE = {
  /**
   * fetch weather from api
   */
  FETCH_WEATHER_REQUEST: 'FETCH_WEATHER_REQUEST',
  FETCH_WEATHER_SUCCESS: 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_FAILURE: 'FETCH_WEATHER_FAILURE',

  /**
   * fetch current position from navigator.geoLocation.getCurrentPosition
   */ 
  FETCH_CUR_POS_REQUEST: 'FETCH_CUR_POS_REQUEST',
  FETCH_CUR_POS_SUCCESS: 'FETCH_CUR_POS_SUCCESS',
  FETCH_CUR_POS_FAILURE: 'FETCH_CUR_POS_FAILURE',
}