import { useEffect, useRef, useState } from 'react'
import { startClock, pauseClock, addOffset, resetClock} from '@/clock/features/timesSlice'
import { useDispatch, useSelector } from 'react-redux';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

function ClockActions() {


    const dispatch = useDispatch()

    const [running, setRunning] = useState(false)

    const offsetRef = useRef<HTMLInputElement>(null)

    let reset = useSelector((state: any) => state.times.started)

    
    useEffect(() => {
        if (!reset) {
            setRunning(false)
        }
    }, [reset])

    function offsetTime() {
        if (offsetRef.current) {
            let input = offsetRef.current.value
            dispatch(addOffset(input))
        }
    }


  return (
    <div style={{display:'flex', flexFlow:'row', justifyContent:'left', gap:'0.5rem'}}>
        {!running ? <Button variant={'ghost'} onClick={() => { setRunning(true); dispatch(startClock())}}><Play style={{color:'hsl(var(--primary))'}} /></Button> : <Button variant={'ghost'} onClick={() => { setRunning(false); dispatch(pauseClock());}}><Pause style={{color:'hsl(var(--primary))'}} /></Button>}
        <Button variant={'ghost'} onClick={() => dispatch(resetClock())}><RotateCcw /></Button>
        <Button onClick={offsetTime}>Offset</Button>
        <Input ref={offsetRef} placeholder="Add offset" style={{width:'5rem'}}/>
        </div>
  )
}

export default ClockActions