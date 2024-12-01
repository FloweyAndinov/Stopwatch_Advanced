import { ThemeProvider } from './components/theme-provider';
import Test from './components/Test';
import StatsSection from './components/stats/StatsSection';
import ClockSection from './components/clockSection/ClockSection';
import { useEffect, useState } from 'react';
import Commands from './components/commands/Commands';
import { Separator } from '@radix-ui/react-separator';

function App() {


  
  useEffect(() => {
    const handleScroll = (event: { deltaY: number; }) => {
      // Get scroll direction
      if (event.deltaY > 0) {
        // Scroll down
          scrollToSection("stats");
      } else {
        // Scroll up
          scrollToSection("clock");
      }
    };

    // Add event listener for scrolling
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll); // Clean up the listener
    };
  }, []);


  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ClockSection/>
      <StatsSection/>
      <Commands/>
    </ThemeProvider>
    
  )
}

export default App
