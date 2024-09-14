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
  RouterProvider
} from 'react-router-dom';



const times = configureStore({
  reducer: {
    times: timesSliceReducer
  }
})

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={times}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
