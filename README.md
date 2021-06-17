# Interview Scheduler

Interview Scheduler is a single-page app that lets users schedule appointments after pulling from a list of available instructors.

Interview Scheduler was built with: 
- React
- Axios
- Webpack 
Testing was done with:
- Storybook
- Jest
- Cypress

# Functionalities

Users can:
- Book an Interview with an Interviewer
- Edit a Preexisting Interview
- Delete a Preexisting Interview

The Page Displays:
- Appointments booked on the current day
- Available timeslots on the current day
- Sidebar with days & corresponding free appointment slots

## Final Product

<b>Booking an Interview</b>

!["Screenshot Booking Interview"](https://github.com/xPuffball/scheduler/blob/master/docs/screenshot_create.png)

<b>And After</b>

!["Screenshot After Booking"](https://github.com/xPuffball/scheduler/blob/master/docs/screenshot_created.png)

<b>Cancelling an Interview</b>

!["Screenshot of Deleting an Interview"](https://github.com/xPuffball/scheduler/blob/master/docs/screenshot_delete.png)

<b>Viewing Booked Interviews</b>

!["Screenshot of Booked Interviews"](https://github.com/xPuffball/scheduler/blob/master/docs/screenshot_appointments.png)

## Setup

Install dependencies with `npm install`.

## Running the Webpack Development Server

```sh
npm start
```

## Running the Jest Test Framework

```sh
npm test
```

## Running the Storybook Visual Testbed

```sh
npm run storybook
```
