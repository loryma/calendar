# calendar

Deployed at https://calendar-react-app.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/95b139a1-2884-41a7-ac59-9f06249339ab/deploy-status)](https://app.netlify.com/sites/calendar-react-app/deploys)

**Calendar** application built with React

**functionality**

- enter events by clicking on calendar cell
- edit event data in event form
- delete event from event form
- another way to enter event is to click create event button and enter month and day and year optionally (current year by default)
- calendar validates entered day by checking if day exits and if any event already assigned to the date
- search for events in the search input

**implementation**

- Redux to preserve state
- React hooks for preserving state of the components and side effects
- Calendar data is saved to the localStorage
- CSS Grid for calendar layout
