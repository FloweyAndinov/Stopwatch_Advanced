/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Button } from '../ui/button'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input'
import { Plus } from 'lucide-react';

function SettingsDialog() {

  const [breaksState, setBreaksState] = React.useState([{id: 0, start: "0", end: "0"}]);

  function AddBreak() {
    const newBreak = {id: breaksState.length + 1, start: "0", end: "0"};
    setBreaksState([...breaksState, newBreak]);
  }

  
  function DeleteBreak(id: number) {
    setBreaksState(breaksState.filter((breakItem) => breakItem.id !== id));
  }
  
  return (
    <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>App Settings</DialogTitle>
      <DialogDescription>
        Set up the application. Your settings will be saved.
      </DialogDescription>
    </DialogHeader>
    <div className="flex items-center space-x-2">
      <div>Start Time</div>
      <div className='w-20'>
        <Input
          id="link"
          defaultValue="08:30"
        />
      </div>
    </div>

    <div className="flex items-center space-x-2">
      <div>End Time</div>
      <div className='w-20'>
        <Input
          id="link"
          defaultValue="17:30"
        />
      </div>
    </div>

    <div className="flex items-center space-x-2">
      <div>Breaks</div>
      <Button variant="secondary" style={{width:'3rem'}} onClick={() => AddBreak()}><Plus style={{width:'auto', height:'auto'}}/></Button>
      
    </div>

    <div className='flex-column space-y-3'>
      {/* <div className="flex items-center space-x-2">
        <Input className='w-20'
          id="link"
          defaultValue="10:15"
        />
        <span>-</span>
        <Input className='w-20'
          id="link"
          defaultValue="10:25"
        />
      </div> */}
      
      {breaksState.map((breakItem) => (
        <div className="flex items-center space-x-2" key={breakItem.id}>
          <Input className='w-20'
            id="link"
            defaultValue="10:15"
          />
          <span>-</span>
          <Input className='w-20'
            id="link"
            defaultValue="10:25"
          />
          <Button variant="destructive" style={{width:'3rem'}} onClick={() => DeleteBreak(breakItem.id)}>X</Button>
        </div>
      ))}
    </div>


    <DialogFooter className="sm:justify-start">
      <DialogClose asChild>
        <Button type="button" variant="default">
          Submit
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
  )
}

export default SettingsDialog