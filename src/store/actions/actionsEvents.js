import * as actionTypes from "./actionTypes";

export const createEvent = event => ({ type: actionTypes.CREATE_EVENT, event });
export const updateEvent = event => ({
  type: actionTypes.UPDATE_EVENT,
  event
});

export const deleteEvent = id => ({ type: actionTypes.DELETE_EVENT, id });
