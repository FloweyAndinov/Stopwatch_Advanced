/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { useContext, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ClockContext } from './ClockParent';

// interface ClockActionsProps {
//     propid: string;
//   }

function ClockActions() {
  

  const {running, setRunning, setStartTime, setOffsetTime } = useContext(ClockContext);
  
    const offsetRef = useRef<HTMLInputElement>(null);
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  
  

    function offsetTime() {
      if (offsetRef.current) {
        const offsetVal = offsetRef.current?.value;
        if (offsetVal) {
          const lastChar = offsetVal.slice(-1);
          const offsetNum = parseFloat(offsetVal.slice(0, -1));
          if (lastChar === 's') {
            setOffsetTime(offsetNum * 1000);
          } else if (lastChar === 'm') {
            setOffsetTime(offsetNum * 60 * 1000);
          } else if (lastChar === 'h') {
            setOffsetTime(offsetNum * 60 * 60 * 1000);
          } else {
            setOffsetTime(offsetNum);
          }
        }
      }
    }

    function resetTime() {
      setOffsetTime(0);
      setStartTime(0);
      setRunning(false);
    }

  
    return (
      <div style={{ display: 'flex', flexFlow: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center', gap: '2rem' }}>
          {!running ? (
            <Button
              variant={'ghost'}
              style={{ width: '5rem', height: '5rem' }}
              onClick={() => {
                setRunning(true);
              }}
            >
              <Play style={{ color: 'hsl(var(--primary))', height: 'inherit', width: 'inherit' }} />
            </Button>
          ) : (
            <Button
              variant={'ghost'}
              style={{ width: '5rem', height: '5rem' }}
              onClick={() => {
                setRunning(false);
              }}
            >
              <Pause style={{ color: 'hsl(var(--primary))', height: 'inherit', width: 'inherit' }} />
            </Button>
          )}
          <Button
            variant={'ghost'}
            style={{ width: '5rem', height: '5rem' }}
            onClick={resetTime}
          >
            <RotateCcw style={{ height: 'inherit', width: 'inherit' }} />
          </Button>
        </div>
        <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center', gap: '0.5rem' }}>
          <Button onClick={offsetTime}>Offset</Button>
          <Input ref={offsetRef} placeholder="Add offset" style={{ width: '10rem' }} />
        </div>
      </div>
    );
  }

export default ClockActions