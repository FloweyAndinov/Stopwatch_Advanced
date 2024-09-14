import React from 'react'

import {} from '@/clock/features/timesSlice'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useSelector } from 'react-redux'


function Offsets() {

    let offsets : Array<string> = useSelector((state: any) => state.times.offsets)

  return (
    <>
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="flex flex-col gap-1">

        <Separator />
        <div className="text-sm font-semibold text-center">Offsets</div>
        <Separator />
        {Object.entries(offsets).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-sm">{value}</span>
          </div>
        ))}
        </div>
    </ScrollArea>
    </>
  )
}

export default Offsets