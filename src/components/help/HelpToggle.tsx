import { BadgeHelp } from 'lucide-react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from '../ui/button'
import HelpDrawer from './HelpDrawer'

function HelpToggle() {
  return (
    <Drawer>
        <DrawerTrigger asChild>
    <BadgeHelp className='cursor-pointer' style={{position: 'relative', color:'hsl(var(--primary))', float: 'right', top: '75vh',transform: 'translateY(-50%)', right: '2em', height:'3.5em', width:'auto'}} />
        </DrawerTrigger>
        <HelpDrawer/>
    </Drawer>
  )
}

export default HelpToggle