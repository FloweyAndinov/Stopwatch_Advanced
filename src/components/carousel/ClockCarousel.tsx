/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel'
import Clock from '../clock/Clock'
import { HelpCircle } from 'lucide-react'
import { Input } from '../ui/input'

function ClockCarousel() {
  return (
    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <Carousel className="w-full max-w-3xl">
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <div style={{width:'100%', height:'100%', display:'flex', flexFlow:'column', justifyContent:'center', alignItems:'center'}}>
                <Input style={{width:'50%', height:'3rem'}} placeholder="Enter title" />
            <Clock stopwatchId={index.toString()}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  style={{width:'3rem', height:'3rem' }}/>
      <CarouselNext style={{width:'3rem', height:'3rem' }}/>
    </Carousel>
    </div>
  )
}

export default ClockCarousel