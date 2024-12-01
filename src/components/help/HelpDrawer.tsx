import React from 'react'
import { Button } from '../ui/button'
import { DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '../ui/drawer'

function HelpDrawer() {
  return (
    <DrawerContent>
        <DrawerHeader>
      <DrawerTitle style={{textAlign:'center'}}>Help/Controls</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
  )
}

export default HelpDrawer