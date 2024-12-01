/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { createSlice } from "@reduxjs/toolkit"
import { configureStore } from '@reduxjs/toolkit';

interface Stopwatch {
    id: number | undefined;
    elapsedCleanTime: number;
    startTime: number;
    offsetTime: number;
    lastStart: number;
    lastPause: number;
    offsets: string[];
    started: boolean;
    running: boolean;
    reset: boolean;
  }

interface DailyTime {
    stopwatches: Stopwatch[];
    day: string; // Store the day as a string in 'YYYY-MM-DD' format
    sessionTime: number;
    loggedTime: number;
    breakTime: number;
    id : number
}


const initialStopwatchState: Stopwatch = {
  id: 0,
  elapsedCleanTime: 0,
  startTime: 0,
  offsetTime: 0,
  lastStart: 0,
  lastPause: 0,
  offsets: [],
  started: false,
  running: false,
  reset: false,
};

const initialState: DailyTime = {
  id: 0,
  stopwatches: [],
  day: new Date().toISOString().split('T')[0], // Default to today's date
  sessionTime: 0,
  loggedTime: 0,
  breakTime: 0,
};
console.log(initialState.day)
const timesSlice = createSlice({
  name: "times",
  initialState,
  reducers: {
    addStopwatch(state, action) {
      state.stopwatches.push({ ...initialStopwatchState, id: state.stopwatches.length });
    },
    removeStopwatch(state, action) {
      state.stopwatches = state.stopwatches.filter((stopwatch) => stopwatch.id !== action.payload);
    },
    updateStopwatch(state, action) {
      state.stopwatches = state.stopwatches.map((stopwatch) => {
        if (stopwatch.id === action.payload.id) {
          return { ...stopwatch, ...action.payload };
        }
        return stopwatch;
      });
    },
    resetStopwatches(state) {
      state.stopwatches = [];
    },
    setDay(state, action) {
      state.day = action.payload;
    },
  },
});

export const { addStopwatch, removeStopwatch, updateStopwatch, resetStopwatches, setDay } = timesSlice.actions;
export default timesSlice.reducer;

