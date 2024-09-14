import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import timesSliceReducer from '../src/clock/features/timesSlice'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import React from 'react'
import {
  createHashRouter,
  HashRouter,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom';



const times = configureStore({
  reducer: {
    times: timesSliceReducer
  }
})


createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <Provider store={times}>
    <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    </HashRouter>
    </Provider>
  </React.StrictMode>
)
