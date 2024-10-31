import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import timesSliceReducer from '../src/clock/features/timesSlice'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import React from 'react'



const times = configureStore({
  reducer: {
    times: timesSliceReducer
  }
})


createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <Provider store={times}>
    <App/>
    </Provider>
  </React.StrictMode>
)
