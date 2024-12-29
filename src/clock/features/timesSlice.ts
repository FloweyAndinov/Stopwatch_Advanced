/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { createSlice } from "@reduxjs/toolkit"

interface TimesState {
  times: [{time: number}]
  loggedTime: number
  breaks: [{id: number, start: string, end: string}]
  sessionStartTime: number
  sessionEndTime: number
}

const initialState : TimesState = {
  times: [{time: 0}],
  loggedTime: 0,
  breaks: [{id: 0, start: "0", end: "0"}],
  sessionStartTime: 30600,
  sessionEndTime: -1
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
    submitSettings: (state, action) => {
      state.breaks = action.payload[0]
      let startHours = action.payload[1].split(':')[0]
      let startMinutes = action.payload[1].split(':')[1]
      let endHours = action.payload[2].split(':')[0]
      let endMinutes = action.payload[2].split(':')[1]
      state.sessionStartTime = parseInt(startHours) * 60 * 60 + parseInt(startMinutes) * 60
      state.sessionEndTime = parseInt(endHours) * 60 * 60 + parseInt(endMinutes) * 60


    }
  }
})

export default timesSlice.reducer
export const { addClock , submitSettings} = timesSlice.actions