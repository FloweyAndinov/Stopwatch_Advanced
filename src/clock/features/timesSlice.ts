import { createSlice } from "@reduxjs/toolkit"

export interface Times{

    elapsedCleanTime : number // clean => no offsets



    startTime: number
    offsetTime: number


    lastStart: number
    lastPause: number

    // subTimes: Map<number,number>


    offsets: Array<string>

    started : boolean

    running : boolean

    reset : boolean

}

const initialState: Times = {

    elapsedCleanTime: 0,


    startTime: 0, // start timestamp
    offsetTime: 0, // total offset time



    // helper variables for subtimes
    lastStart: 0, // last start time
    lastPause: 0, // last pause time

    // sum of subtimes
    // subTimes: new Map(),

    // array of offsets
    offsets: [],

    started : false,

    running : false,

    reset : false

}

export const timesSlice = createSlice({
    name: "times",
    initialState,
    reducers: { 
        startClock: (state) => { 
            if (state.started === false) {
                state.startTime  = Date.now()
                state.started = true
            }
            state.lastStart = Date.now()
            state.running = true
        },
        pauseClock: (state) => {
            state.lastPause = Date.now()
            // state.subTimes.set(state.lastStart, state.lastPause)
            state.elapsedCleanTime += state.lastPause - state.lastStart
            state.running = false
        },
        addOffset: (state, action) => {

            let input : string = action.payload;
            
            let lastChar = input.slice(-1);

            switch (lastChar) {
                case 's':
                    state.offsetTime -= parseInt(input.slice(0, -1)) * 1000
                    state.offsets.push(input.slice(0, -1) + " seconds")
                    break
                case 'm':
                    state.offsetTime -= parseInt(input.slice(0, -1)) * 1000 * 60
                    state.offsets.push(input.slice(0, -1) + " minutes")
                    break
                case 'h':
                    state.offsetTime -= parseInt(input.slice(0, -1)) * 1000 * 60 * 60
                    state.offsets.push(input.slice(0, -1) + " hours")
                    break
                default:
                    console.error("Invalid input")
            }
    },

    resetClock : (state) => {
        state.lastStart = 0
        state.lastPause = 0
        // state.subTimes = new Map()
        state.elapsedCleanTime = 0
        state.startTime = 0
        state.offsetTime = 0
        state.lastPause = 0
        state.offsets = []
        state.started = false
        state.reset = true
    },

    finishReset : (state) => {
        state.reset = false
    }
    }
})

export const { startClock, pauseClock, addOffset, resetClock, finishReset} = timesSlice.actions

export default timesSlice.reducer
