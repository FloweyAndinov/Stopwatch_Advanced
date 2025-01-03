/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { createContext, useEffect, useState } from 'react'
import ClockActions from './ClockActions'
import ClockDisplay from './ClockDisplay'
import ClockTitle from './ClockTitle';


interface ClockContextType {
    running: boolean;
    setRunning: React.Dispatch<React.SetStateAction<boolean>>;
    startTime: number;
    setStartTime: React.Dispatch<React.SetStateAction<number>>;
    offsetTime: number;
    setOffsetTime: React.Dispatch<React.SetStateAction<number>>;
    finalTime: number;
    setFinalTime: React.Dispatch<React.SetStateAction<number>>;
    completed: boolean;
    setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const ClockContext = createContext<ClockContextType | null>(null);

function ClockParent() {

   
    const [finalTime, setFinalTime] = useState(0)
    const [startTime, setStartTime] = useState(0);
    const [offsetTime, setOffsetTime] = useState(0);
    const [running, setRunning] = useState(false);  
    const [pauseTime, setPauseTime] = useState(0);
    const [lastPause, setlastPause] = useState(0);
    const [completed, setCompleted] = useState(false);
    
    useEffect(() => {
        if (running && startTime === 0) {
            setStartTime(Date.now()); // start the clock
        }
        const interval = setInterval(() => {
            if (running) { // clock is running
                let time = Math.round((Date.now() - startTime - pauseTime + offsetTime) / 1000)
                setFinalTime(time)
            }
            else if (startTime === 0) { // clock is not running and not started
                setFinalTime(Math.round(offsetTime / 1000))
            }
            else if (!running && startTime !== 0) {
                // When paused, calculate the frozen time
                let lastTime = Math.round((lastPause - startTime - pauseTime + offsetTime) / 1000)
                setFinalTime(lastTime)
            }
        }, 100)
        return () => {
            clearInterval(interval)
        }
    }, [offsetTime, running, startTime, pauseTime, lastPause])

    useEffect(() => {
        if (!running && startTime !== 0) {
            setlastPause(Date.now())
        }
        else if (lastPause !== 0) {
            setPauseTime(prev => prev + Date.now() - lastPause)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastPause, running, startTime])


  return (
        <ClockContext.Provider value={{finalTime,
            setFinalTime,
            startTime,
            setStartTime,
            offsetTime,
            setOffsetTime,
            running,
            setRunning,
            completed, setCompleted}}>
                <ClockTitle/>
        <ClockDisplay/>
        <ClockActions/>
        </ClockContext.Provider>
        
  )
}

export default ClockParent