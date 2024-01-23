import React from 'react'
import Image from "next/image";

import Carousel, { Testimonial } from '../ui/Carousel'
import svgs from '../svgs';
import testimonialsImage from '../../public/images/Contentstestimonials.png'
import avatar from '../../public/avatars/image-103.png'
import avatar2 from "../../public/avatars/image-108.png";
import avatar3 from "../../public/avatars/image-21.png";


const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.",
    author: "Sarah Thompson",
    position: "Project Manager, Shopify",
    companyLogo: svgs.shopify,
    rating: 5,
    avatar: avatar,
  },
  {
    id: 2,
    content:
      "Thanks to ClearLink, our remote meetings are now more efficient than ever. The user interface is intuitive, and the security is top-notch.",
    author: "John Doe",
    position: "Marketing Director, Coinbase",
    companyLogo: svgs.coinbase,
    rating: 3,
    avatar: avatar2,
  },
  {
    id: 3,
    content:
      "Our team relies on ClearLink for all our communication needs. The video quality is unmatched, and the customer support is always helpful.",
    author: "Alex Johnson",
    position: "Tech Lead, Dropbox",
    companyLogo: svgs.dropbox,
    rating: 5,
    avatar: avatar3,
  },
];

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