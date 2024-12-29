/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Button } from '../ui/button'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input'
import { Plus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { submitSettings } from '@/clock/features/timesSlice';

function SettingsDialog() {

  const dispatch = useDispatch();

  const defaultBreakStart = "10:15";
  const defaultBreakEnd = "10:25";
  const defaultStart = "8:30";
  const defaultEnd = "17:30";

  const [breaksState, setBreaksState] = React.useState([{id: 0, start: defaultBreakStart, end: defaultBreakEnd}]);
  const [start, setStart] = React.useState(defaultStart);
  const [end, setEnd] = React.useState(defaultEnd);
  function AddBreak() {
    const newBreak = {id: breaksState.length, start: "0", end: "0"};
    setBreaksState([...breaksState, newBreak]);
  }

  function UpdateBreakStart(id : number, value : string) {
    setBreaksState(
      breaksState.map((breakItem) =>
        breakItem.id === id ? { ...breakItem, start: value } : breakItem
      )
    );

  }

  function UpdateBreakEnd(id : number, value : string) {
    setBreaksState(
      breaksState.map((breakItem) =>
        breakItem.id === id ? { ...breakItem, end: value } : breakItem
      )
    );
  }
  
  function DeleteBreak(id: number) {
    setBreaksState(breaksState.filter((breakItem) => breakItem.id !== id));
  }


  function SubmitSettings() {
    console.log("submitting")
   
   dispatch(submitSettings([breaksState, start, end]));
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
          defaultValue={defaultStart}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
    </div>

    <div className="flex items-center space-x-2">
      <div>End Time</div>
      <div className='w-20'>
        <Input
          id="link"
          defaultValue={defaultEnd}
          onChange={(e) => setEnd(e.target.value)}
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
            defaultValue={defaultBreakStart}
            onChange={(e) => UpdateBreakStart(breakItem.id, e.target.value)}
          />
          <span>-</span>
          <Input className='w-20'
            id="link"
            defaultValue={defaultBreakEnd}
            onChange={(e) => UpdateBreakEnd(breakItem.id, e.target.value)}
          />
          <Button variant="destructive" style={{width:'3rem'}} onClick={() => DeleteBreak(breakItem.id)}>X</Button>
        </div>
      ))}
    </div>


    <DialogFooter className="sm:justify-start">
      <DialogClose asChild>
        <Button type="button" variant="default" onClick={() => SubmitSettings()}>
          Submit
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
  )
}

export default SettingsDialog