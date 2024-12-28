/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel'
import Clock from '../clockComponents/ClockParent'
import { HelpCircle } from 'lucide-react'
import { Input } from '../ui/input'
import ClockParent from '../clockComponents/ClockParent'

function ClockCarousel() {
  return (
    <div>
        <Carousel className="max-w-3xl">
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <div style={{width:'100%', height:'100%', display:'flex', flexFlow:'column', justifyContent:'center', alignItems:'center'}}>
              <ClockParent/>
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