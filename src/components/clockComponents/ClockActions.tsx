/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { useContext, useRef,} from 'react'
import { Play, Pause, RotateCcw, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ClockContext } from './ClockParent';
import { useDispatch } from 'react-redux';
import { addClock } from '../../clock/features/timesSlice';

// interface ClockActionsProps {
//     propid: string;
//   }



function ClockActions() {

  const context = useContext(ClockContext);
  
  if (!context) {
    throw new Error("ClockActions must be used within a ClockParent");
  }

  const {running, setRunning, setStartTime, setOffsetTime, setCompleted, completed, finalTime} = context;
  
    const offsetRef = useRef<HTMLInputElement>(null);
  
  
    let dispatch = useDispatch();

    function offsetTime() {
      if (offsetRef.current) {
        const offsetVal = offsetRef.current?.value;
        if (offsetVal) {
          const lastChar = offsetVal.slice(-1);
          const offsetNum = parseFloat(offsetVal.slice(0, -1));
          if (lastChar === 's') {
            setOffsetTime(prev => prev + offsetNum * 1000);
          } else if (lastChar === 'm') {
            setOffsetTime(prev => prev + offsetNum * 60 * 1000);
          } else if (lastChar === 'h') {
            setOffsetTime(prev => prev + offsetNum * 60 * 60 * 1000);
          } else {
            setOffsetTime(prev => prev + offsetNum);
          }
        }
      }
    }

    function resetTime() {
      setOffsetTime(0);
      setStartTime(0);
      setRunning(false);
    }

    function completedClock() {
      setRunning(false);
      setCompleted(true);
      dispatch(addClock(finalTime));
    }        

  
    return (
      <div style={{ display: 'flex', flexFlow: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center', gap: '2rem' }}>
          {!running ? (
            <Button disabled={completed}
              variant={'ghost'}
              style={{ width: '5rem', height: '5rem' }}
              onClick={() => {
                setRunning(true);
              }}
            >
              <Play style={{ color: 'hsl(var(--primary))', height: 'inherit', width: 'inherit' }} />
            </Button>
          ) : (
            <Button disabled={completed}
              variant={'ghost'}
              style={{ width: '5rem', height: '5rem' }}
              onClick={() => {
                setRunning(false);
              }}
            >
              <Pause style={{ color: 'hsl(var(--primary))', height: 'inherit', width: 'inherit' }} />
            </Button>
          )}
          <Button disabled={completed}
            variant={'ghost'}
            style={{ width: '5rem', height: '5rem' }}
            onClick={resetTime}
          >
            <RotateCcw style={{ height: 'inherit', width: 'inherit' }} />
          </Button>

          <Button disabled={completed}
            variant={'ghost'}
            style={{ width: '5rem', height: '5rem' }}
            onClick={completedClock}
          >
            <Check style={{ height: 'inherit', width: 'inherit', color: 'green' }} />
          </Button>
        </div>
        <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center', gap: '0.5rem' }}>
          <Button disabled={completed} onClick={offsetTime}>Offset</Button>
          <Input disabled={completed} ref={offsetRef} placeholder="Add offset" style={{ width: '10rem' }} />
        </div>
      </div>
    );
  }

export default ClockActions