/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { createContext, useEffect, useState } from 'react'
import ClockActions from './ClockActions'
import ClockDisplay from './ClockDisplay'

interface ClockProps {
    stopwatchId: string
}

export const ClockContext = createContext(null!); //wtf!

function ClockParent() {

   
    const [finalTime, setFinalTime] = useState(0)
    const [startTime, setStartTime] = useState(0);
    const [offsetTime, setOffsetTime] = useState(0);
    const [running, setRunning] = useState(false);  
    const [pauseTime, setPauseTime] = useState(0);
    
    useEffect(() => {
        if (running && startTime === 0) {
            setStartTime(Date.now());
        }
      const interval = setInterval(() => {
          if (running) {
              let time = Math.round((Date.now() - startTime + offsetTime) / 1000)
              console.log(Date.now() , startTime, offsetTime, time)
              setFinalTime(time)
          }
          else if (startTime === 0) {
              setFinalTime(0)
              clearInterval(interval)
          }
          else {
            clearInterval(interval)
          }
      }, 100)
      return () => {
          clearInterval(interval)
      }
  }, [offsetTime, running, startTime])




  return (
        <ClockContext.Provider value={{finalTime,
            setFinalTime,
            startTime,
            setStartTime,
            offsetTime,
            setOffsetTime,
            running,
            setRunning}}>
        <ClockDisplay/>
        <ClockActions/>
        </ClockContext.Provider>
        
  )
}

export default ClockParent