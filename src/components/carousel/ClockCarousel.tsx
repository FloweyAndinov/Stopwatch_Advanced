/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel'
import Clock from '../clockComponents/ClockParent'
import { HelpCircle } from 'lucide-react'
import { Input } from '../ui/input'
import ClockParent from '../clockComponents/ClockParent'
import useEmblaCarousel from 'embla-carousel-react'

function ClockCarousel() {

  const [leng, setLeng] = React.useState(2)
  const [currSlide, setCurrSlide] = React.useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel()
  function slideGeneration(action: string) {
   switch (action) {
     case 'next':
      setCurrSlide(prev => prev + 1)
      if (currSlide === leng - 2) {
        setLeng(prev => prev + 1)
      }
      break;
     case 'prev':
      setCurrSlide(prev => prev -1)
      break;
   }
  }

  return (
    <div>
        <Carousel className="max-w-3xl" opts={{ dragFree: false, }} ref={emblaRef}>
      <CarouselContent>
        {Array.from({ length: leng }).map((_, index) => (
          <CarouselItem key={index} >
            <div style={{width:'100%', height:'100%', display:'flex', flexFlow:'column', justifyContent:'center', alignItems:'center'}}>
              <ClockParent/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  style={{width:'3rem', height:'3rem' }} onClickCapture={() => slideGeneration('prev')}/>
      <CarouselNext style={{width:'3rem', height:'3rem' }} onClickCapture={() => slideGeneration('next')}/>
    </Carousel>
    </div>
  )
}

export default ClockCarousel