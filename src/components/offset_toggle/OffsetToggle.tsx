import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import Offsets from '../offsets/Offsets'



function OffsetToggle() {
    const [menu, setMenu] = useState(false)

  return (
    menu ? 
    <div style={{position: 'absolute', right: '2vh', top: '50%', transform: 'translateY(-50%)',}}>
    <button onClick={() => setMenu(false)}>
        <ChevronLeft style={{color:'hsl(var(--primary))', 
        
        height:'auto', width:'10vh'}} />
        </button>
        </div>
         :
    <div style={{display:'flex', flexFlow:'row', position: 'absolute', right: '2vh', top: '50%', transform: 'translateY(-50%)',}}>
    <button onClick={() => setMenu(true)}>
        <ChevronRight style={{color:'hsl(var(--primary))', 
         
        height:'auto', width:'10vh'}} />
    </button>
    <Offsets/>
    </div>
  )
}

export default OffsetToggle