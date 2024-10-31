import { useState } from 'react'
import { Button } from '@/components/ui/button';
import { ThemeProvider } from './components/theme-provider';
import Clock from './components/clock/Clock';
import Offsets from './components/offsets/Offsets';
import IRLtime from './components/irltime/IRLtime';
import OffsetToggle from './components/offset_toggle/OffsetToggle';

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Clock/>
    <OffsetToggle/>
    <IRLtime/>
    </ThemeProvider>
    
  )
}

export default App
