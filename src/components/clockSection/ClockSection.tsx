import Clock from '../clock/Clock'
import React from 'react'
import IRLtime from '../irltime/IRLtime'
import HelpToggle from '../help/HelpToggle'

function ClockSection() {
  return (
    <div id='clock' style={{width:'100vw', height:'100vh', scrollSnapAlign:'start'}}>
        <Clock/>
        <HelpToggle/>
        <IRLtime/>
    </div>
  )
}

export default ClockSection