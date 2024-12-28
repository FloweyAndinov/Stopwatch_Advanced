import React from 'react'
import './StatsStyle.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/clock/features/store';
function StatsInfo() {

  const loggedTime = useSelector((state: RootState) => state.times.loggedTime)

  const hours = Math.floor(loggedTime / 60 / 60)
  const minutes = Math.floor((loggedTime / 60) % 60)
  const seconds = Math.floor(loggedTime % 60)
  return (
    
    <div style={{position: 'relative', top: '50%', left: '25%', transform: 'translate(-50%, -50%)', width:'fit-content'}}>
        <div style={{display:'flex', flexFlow:'column', gap:'1.5rem'}}>
            <span className='infotext'>Session Time: </span>
            <span className='infotext'>Logged Time: {hours}h:{minutes}m:{seconds}s</span>
            <span className='infotext'>Void Time: </span>
        </div>
    </div>
  )
}

export default StatsInfo