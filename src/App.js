import React, { useEffect } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import calendarReducer from "./store/reducers/calendarReducer";
import eventsReducer from "./store/reducers/eventsReducer";
import "./App.css";
import CalendarContainer from "./components/CalendarContainer/CalendarContainer";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  events: eventsReducer
});

let initalState = { calendar: { current: `${+new Date()}` }, events: [] };

function App() {
  const storeSerialized = localStorage.getItem("calendarStore");
  if (storeSerialized) {
    const state = JSON.parse(storeSerialized);
    initalState = { ...initalState, ...state };
  }

  const store = createStore(
    rootReducer,
    initalState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    localStorage.setItem("calendarStore", JSON.stringify(store.getState()));
  });

  return (
    <Provider store={store}>
      <div className="App">
        <CalendarContainer />
      </div>
    </Provider>
  );
}

export default App;
