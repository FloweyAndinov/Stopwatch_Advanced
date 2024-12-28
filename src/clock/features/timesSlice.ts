/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { createSlice } from "@reduxjs/toolkit"
import { configureStore } from '@reduxjs/toolkit';

interface TimesState {
  times: [{time: number}]
  loggedTime: number
}

const initialState : TimesState = {
  times: [{time: 0}],
  loggedTime: 0
}

const timesSlice = createSlice({
  name: 'times',
  initialState,
  reducers: {
    addClock: (state, action) => {
      let entry = {time : action.payload};
      state.times.push(entry);
      state.loggedTime += entry.time
    },
  }
})

export default timesSlice.reducer
export const { addClock } = timesSlice.actions