import * as actionTypes from "./actionTypes";

export const updateEvent = (id, event) => ({
  type: actionTypes.UPDATE_EVENT,
  id,
  event
});

export const deleteEvent = id => ({ type: actionTypes.DELETE_EVENT, id });
