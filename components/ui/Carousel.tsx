"use client";
import React, { useState } from "react";
import Icon from "./Icon";
import svgs from "../svgs";
import Image, { StaticImageData } from "next/image";

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  companyLogo: string;
  rating: number;
  avatar: StaticImageData;
}

interface CarouselProps {
  testimonials: Testimonial[];
}

const Carousel: React.FC<CarouselProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex max-w-xl w-full">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`flex flex-col gap-y-12 justify-between transition-opacity duration-500 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          } absolute`}
        >
          <div className="w-[112.787px] h-8">
            <Icon
              content={testimonial.companyLogo}
              width="90px"
              height="32px"
            />
          </div>
          <div className="flex items-center">
            {[...Array(testimonial.rating)].map((i) => (
              <Icon content={svgs.star} key={i}/>
            ))}
          </div>
          <p className="text-xl font-semibold text-tsGray-800 max-w-sm">
            {testimonial.content}
          </p>

          <div className="flex justify-between w-full items-end">
            <div className="flex items-center gap-x-2">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                width={40}
                height={40}
              />
              <div>
                <p className="mt-4 text-base text-tsGray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-tsGray-600">
                  {testimonial.position}
                </p>
              </div>
            </div>

            <div className="relative flex gap-x-6 items-center">
              <button
                className="bg-white p-2 rounded-full border-tsBlue-100 shadow-lg cursor-pointer"
                onClick={goToPrev}
              >
                <Icon content={svgs.arrowLeft} />
              </button>
              <button
                className="bg-white p-2 rounded-full border-tsBlue-100 shadow-lg cursor-pointer"
                onClick={goToNext}
              >
                <Icon content={svgs.arrowRight} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
