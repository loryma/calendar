import * as eventTypes from "../actions/actionTypes";
const uuid = require("uuid/v4");

const initialState = [
  {
    id: uuid(),
    title: "My B",
    date: "December 11, 2019",
    dateMs: `${+new Date(2019, 11, 11)}`,
    participants: "Me and You",
    description: "stuff"
  }
];

function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case eventTypes.CREATE_EVENT:
      const newEvent = { id: uuid(), ...action.event };
      return [...state, newEvent];
    case eventTypes.UPDATE_EVENT:
      const updatedEvents = state.map(event => {
        if (event.id === action.event.id) {
          return { ...event, ...action.event };
        }
        return event;
      });
      return updatedEvents;
    case eventTypes.DELETE_EVENT:
      let newList = state.filter(event => event.id !== action.id);
      return newList;
    default:
      return state;
  }
}

export default eventsReducer;
