# calendar

Deployed at https://calendar-react-app.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/95b139a1-2884-41a7-ac59-9f06249339ab/deploy-status)](https://app.netlify.com/sites/calendar-react-app/deploys)

**Calendar** application built with React

**functionality**

- enter events by clicking on plus button: bottom right on mobile or bottom right in the day cell
- edit event data in event form
- delete event from event form
- open events in a popup when there are two many to see in day cell or on mobile
- calendar validates entered day by checking if day exits
- search for events in the search input

**implementation**

- Redux to preserve state
- React hooks for preserving state of the components and side effects
- Calendar data is saved to the localStorage
- CSS Grid for calendar layout
