import React from 'react'
import './StatsStyle.scss';

function StatsInfo() {
  return (
    
    <div style={{position: 'relative', top: '50%', left: '25%', transform: 'translate(-50%, -50%)', width:'fit-content'}}>
        <div style={{display:'flex', flexFlow:'column', gap:'1.5rem'}}>
            <span className='infotext'>Session Time: </span>
            <span className='infotext'>Logged Time: </span>
            <span className='infotext'>Void Time: </span>
        </div>
    </div>
  )
}

export default StatsInfo