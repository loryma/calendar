import React from "react";
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

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CalendarContainer />
      </div>
    </Provider>
  );
}

export default App;
