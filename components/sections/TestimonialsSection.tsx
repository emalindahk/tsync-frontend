import React from 'react'
import Image from "next/image";

import Carousel from '../ui/Carousel'
import testimonialsImage from '../../public/images/Contentstestimonials.png'
import { testimonials } from '../data';

const TestimonialsSection = () => {
  return (
    <div className='flex items-start w-full justify-between py-24 px-8'>
        <Carousel testimonials={testimonials}/>
        <div className='max-w-xl w-full mx-auto'>
            <Image src={testimonialsImage} alt="Testimonials Image"/>
        </div>
    </div>
  )
}

export default TestimonialsSection