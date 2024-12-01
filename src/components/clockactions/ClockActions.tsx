/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

// interface ClockActionsProps {
//     propid: string;
//   }

function ClockActions() {
    const dispatch = useDispatch();
    const [running, setRunning] = useState(false);
  
    const offsetRef = useRef<HTMLInputElement>(null);
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  
  
    function offsetTime() {
      if (offsetRef.current) {
        let input = offsetRef.current.value;
      }
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