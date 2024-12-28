import React, { useContext, useState } from 'react'
import { ClockContext } from './ClockParent'

function ClockDisplay() {

    const {finalTime} = useContext(ClockContext)

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
    <>
    {/* <span className='text-9xl'>{negative ? '-' : ''}</span> */}
    <span className="text-9xl font-bold">
        {displayHours(finalTime)}:
        {displayMinutes(finalTime)}:
        {displaySeconds(finalTime)}
    </span>
    <div style={{display:'flex', flexDirection:'column-reverse', marginBottom:'0.25rem'}}>
                {/* <span className="text-4xl ">{finalms}</span> */}
    </div>
    </>
  )
}

export default ClockDisplay