import * as eventTypes from "../actions/actionTypes";
const initialState = {
  [+new Date(2019, 11, 11)]: {
    title: "My B",
    date: "December 11, 2019",
    participants: "Me and You",
    description: "stuff"
  }
};

function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case eventTypes.UPDATE_EVENT:
      return { ...state, [action.id]: action.event };
    case eventTypes.DELETE_EVENT:
      let newList = { ...state };
      delete newList[action.id];
      return { ...newList };
    default:
      return state;
  }
}

export default eventsReducer;
