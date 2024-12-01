/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ClockActions from '../clockactions/ClockActions'
import {useLocalStorage} from 'usehooks-ts'
import { addStopwatch } from '@/clock/features/timesSlice'

interface ClockProps {
    stopwatchId: string
}


function Clock({stopwatchId}: ClockProps) {

    const dispatch = useDispatch()
    const [finalTime, setFinalTime] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setFinalTime(prev => prev + Math.round(Math.random() * 100 - 50))
                
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])


    useEffect(() => {
        console.log(finalTime)
    }, [finalTime] )

    
    function displayHours(finalTime : number) {
        let hours : number
        if (finalTime < 0) {
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

    function displayMinutes(finalTime : number) {
        let minutes : number
        if (finalTime < 0) {
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

    function displaySeconds(finalTime : number) {
        let seconds : number
        if (finalTime < 0) {
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
        <div
        // style={{position:'absolute', top:'50vh', left:'50vw', width:'fit-content', transform:'translate(-50%, -50%)'}}
        >
        <div style={{display:'flex', flexFlow:'row nowrap space-between'}}>
            {/* <span className='text-9xl'>{negative ? '-' : ''}</span> */}
            <span className="text-9xl font-bold">{displayHours(finalTime)}:
                                                {displayMinutes(finalTime)}:
                                                {displaySeconds(finalTime)}
            </span>
            <div style={{display:'flex', flexDirection:'column-reverse', marginBottom:'0.25rem'}}>
                {/* <span className="text-4xl ">{finalms}</span> */}
                </div>
        </div>
        <ClockActions/>
        </div>
        
  )
}

export default Clock