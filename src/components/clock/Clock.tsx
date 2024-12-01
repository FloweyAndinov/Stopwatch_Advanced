/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useEffect, useState } from 'react'
import { finishReset} from '@/clock/features/timesSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ClockActions from '../clockactions/ClockActions'
import {useLocalStorage} from 'usehooks-ts'


function Clock() {

    const dispatch = useDispatch()

    const [finalTime, setFinalTime] = useLocalStorage('finalTime', 0)
    const [finalms, setFinalMs] = useState(0)
    const [negative, setNegative] = useState(false)


    //booleans
    let reset = useSelector((state: any) => state.times.reset)
    let running = useSelector((state: any) => state.times.running)
    let started = useSelector((state: any) => state.times.started)  


    //numbers
    let offset = useSelector((state: any) => state.times.offsetTime)
    let cleanTime = useSelector((state: any) => state.times.elapsedCleanTime)

    let startTime = useSelector((state: any) => state.times.startTime)
    let lastStart = useSelector((state: any) => state.times.lastStart)

    let elapsedCleanTime = useSelector((state: any) => state.times.elapsedCleanTime)
    useEffect(() => { // handle the clock while running
        const interval = setInterval(() => {
            if (started && running) { 
                // current time - start time + offset
                setFinalTime(Math.floor(((Date.now()- lastStart) + (elapsedCleanTime) - offset) / 1000))
                setFinalMs(Math.abs(Math.floor(((Date.now()- lastStart) + (elapsedCleanTime) - offset) / 100 % 10)))
                setNegative(Math.floor(((Date.now()- lastStart) + (elapsedCleanTime) - offset) / 1000) < 0)
            }
        }, 50)
        return () => clearInterval(interval)
    }, [started, running, offset, startTime, cleanTime])

    useEffect(() => {// reset the clock
            setFinalTime(0)
            setFinalMs(0)
            dispatch(finishReset());
    }, [reset])

    useEffect(() => { //handle the clock while paused
        
        if (!started) {// if clock has not started yet
            // elapsed time (0) + -offset
            setFinalTime((offset * -1) / 1000) // works
            setNegative((offset * -1) / 1000 < 0)
        }
        else if (started) {// if clock has been paused after start
            // elapsed time + -offset
            setFinalTime(Math.floor((cleanTime / 1000) + (offset * -1) / 1000)) // works
            setNegative(Math.floor((cleanTime / 1000) + (offset * -1) / 1000) < 0)
        }
    }, [offset, started, lastStart, cleanTime])
    
    function displayHours() {
        let hours : number
        if (negative) {
             hours = Math.abs(Math.floor(finalTime / -60 / 60))
        }
        else {
             hours = Math.abs(Math.floor(finalTime / 60 / 60))
        }
            if (hours < 10 && hours >= 0) {
                return `0${hours}`
            }
        
        return hours
    }

    function displayMinutes() {
        let minutes : number
        if (negative) {
            minutes = Math.abs(Math.floor(finalTime / -60) % 60)
        }
        else {
            minutes = Math.abs(Math.floor(finalTime / 60) % 60)
        }
        if (minutes < 10 && minutes >=0) {
            return `0${minutes}`
        }
    
        return minutes
    }

    function displaySeconds() {
        let seconds : number
        if (negative) {
            seconds = Math.abs(finalTime % -60)
        }
        else {
            seconds = Math.abs(finalTime % 60)
        }
        if (seconds < 10 && seconds>=0) {
            return `0${seconds}`
        }
    
        return seconds
    }

  return (
        <div style={{position:'relative', top:'50vh', left:'50vw', width:'fit-content', transform:'translate(-50%, -50%)'}}>
        <div style={{display:'flex', flexFlow:'row nowrap space-between'}}>
            <span className='text-9xl'>{negative ? '-' : ''}</span>
            <span className="text-9xl font-bold">{displayHours()}:
                                                {displayMinutes()}:
                                                {displaySeconds()}
            </span>
            <div style={{display:'flex', flexDirection:'column-reverse', marginBottom:'0.25rem'}}><span className="text-4xl ">{finalms}</span></div>
        </div>
        {/* <ClockActions/> */}
        </div>
        
  )
}

export default Clock