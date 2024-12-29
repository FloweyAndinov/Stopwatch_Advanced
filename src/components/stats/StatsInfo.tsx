import React, { useEffect } from 'react'
import './StatsStyle.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/clock/features/store';
function StatsInfo() {

  const loggedTime = useSelector((state: RootState) => state.times.loggedTime)
  const sessionStartTime = useSelector((state: RootState) => state.times.sessionStartTime)
  const breaks = useSelector((state: RootState) => state.times.breaks)
  const [seconds, setSeconds] = React.useState(0)
  function convertToHMS(time : number) {
    const hours = Math.floor(time / 60 / 60)
    const minutes = Math.floor((time / 60) % 60)
    const seconds = Math.floor(time % 60)
    return `${hours}h:${minutes}m:${seconds}s`
  }

  function getCurrentBreakTime(currentTime : number) {
    let totalBreakTime : number = 0
    for (let i = 0; i < breaks.length; i++) {
      const [startHour, startMinute] = breaks[i].start.split(':')
      const [endHour, endMinute] = breaks[i].end.split(':')
      const startSeconds = parseInt(startHour) * 60 * 60 + parseInt(startMinute) * 60
      const endSeconds = parseInt(endHour) * 60 * 60 + parseInt(endMinute) * 60
      // console.log(currentTime, endSeconds)
      if (currentTime >= endSeconds) {
        totalBreakTime += endSeconds - startSeconds
      }
    }
    return totalBreakTime
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const elapsedSeconds =(() => {
        const secondsSinceMidnight = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds()
        console.log(secondsSinceMidnight)
        // console.log(((now.getTime() - startOfToday.getTime() - getCurrentBreakTime(secondsSinceMidnight))/ 1000))
        return Math.round((now.getTime() - startOfToday.getTime() - (getCurrentBreakTime(secondsSinceMidnight) * 1000)) / 1000)
      })();
      // console.log(elapsedSeconds)
      setSeconds(elapsedSeconds)
    }, 1000)
    return () => clearInterval(interval)
  })
  return (
    
    <div style={{position: 'relative', top: '50%', left: '25%', transform: 'translate(-50%, -50%)', width:'fit-content'}}>
        <div style={{display:'flex', flexFlow:'column', gap:'1.5rem'}}>
            <span className='infotext'>Session Time: {convertToHMS(seconds - sessionStartTime)}</span>
            <span className='infotext'>Logged Time: {convertToHMS(loggedTime)}</span>
            <span className='infotext'>Void Time: {convertToHMS((seconds - sessionStartTime) - (loggedTime))}</span>
        </div>
    </div>
  )
}

export default StatsInfo