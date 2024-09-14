import { useState } from 'react'
import { Button } from '@/components/ui/button';
import { ThemeProvider } from './components/theme-provider';
import Clock from './components/clock/Clock';
import Offsets from './components/offsets/Offsets';
import IRLtime from './components/irltime/IRLtime';

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Clock/>
    <Offsets/>
    <IRLtime/>
    </ThemeProvider>
    
  )
}

export default App
