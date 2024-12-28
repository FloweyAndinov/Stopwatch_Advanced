import React, { useContext } from 'react'
import { Input } from '../ui/input'
import { ClockContext } from './ClockParent';

function ClockTitle() {
  const context = useContext(ClockContext);

  if (!context) {
    throw new Error("ClockTitle must be used within a ClockParent");
  }


  const {completed} = context;
  return (
    <Input disabled={completed}  style={{width:'50%', height:'3rem', margin:'1rem', fontSize:'1.5rem'}} placeholder="Enter title" />
  )
}

export default ClockTitle