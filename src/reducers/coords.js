import { combineReducers } from 'redux';
import { TYPE } from '../constants';

const current = (state = {}, action) => {
  switch (action.type) {
    case TYPE.FETCH_CUR_POS_REQUEST:
      return {}
    case TYPE.FETCH_CUR_POS_SUCCESS:
      return action.response.coords;
    default:
      return state;
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case TYPE.FETCH_CUR_POS_REQUEST:
      return true;
    case TYPE.FETCH_CUR_POS_REQUEST:
    case TYPE.FETCH_CUR_POS_REQUEST:
      return false
    default:
      return state;
  }
}

const errMsg = (state = '', action) => {
  switch (action.type) {
    case TYPE.FETCH_CUR_POS_REQUEST:
      return '';
    case TYPE.FETCH_CUR_POS_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export default combineReducers({
  current,
  isFetching,
  errMsg
})

export const getCurrent = (state) => state.current

export const getIsFetching = (state) => state.isFetching

export const getErrMsg = (state) => state.errMsg