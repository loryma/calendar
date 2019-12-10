import * as actionTypes from "../actions/actionTypes";

const initialState = { current: `${+new Date()}` };

function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_CURRENT_DATE:
      return { ...state, current: `${+action.date}` };

    default:
      return state;
  }
}

export default calendarReducer;
