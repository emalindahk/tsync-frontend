import React from 'react'
import Image from 'next/image';

import Header from "../layout/Header";
import hero from '../../public/images/hero-image.png'
import Button from '../ui/Button';
import svgs from '../svgs';
import Icon from '../ui/Icon';
import UserReviews from '../ui/UserReviews';

const HeroSection = () => {
  const controlIcons = [svgs.microphone, svgs.videoRecorder, svgs.monitor, svgs.faceSmile, svgs.messageTextCircle, svgs.settings]

  return (
    <div className="py-4 bg-background-pattern w-full bg-cover">
      <Header />
      <div className="mt-28 flex justify-between w-full items-start">
        <div className="flex flex-col gap-y-5 items-start">
          <h1 className="text-tsGray-800 text-[54px] font-semibold">
            Uniting the world,
            <br />
            one video call at a time
          </h1>
          <p className="text-tsGray-500 text-base font-normal">
            Experience the future of communication with ClearLink – <br />
            where crystal-clear video conferencing meets <br/> 
            unparalleled simplicity.
          </p>

          <div className="flex items-center py-6 gap-x-3">
            <Button label="Start your free trial" variant="solid" />
            <div className="flex items-center gap-x-2">
              <Icon content={svgs.robot} />
              <span className="text-base text-tsBlue-700 font-semibold">
                Discover AI assistant
              </span>
            </div>
          </div>

          <UserReviews />
        </div>

        <div className="flex flex-col items-center gap-y-5 p-8 border rounded-2xl bg-tsBlue-200">
          <Image
            alt="Hero Image"
            src={hero}
            width={520}
            height={340}
            className="object-cover"
          />
          <div className="flex items-center gap-x-2">
            {controlIcons.map((icon) => (
              <div className="rounded-full bg-white border border-tsBlue-100 shadow-sm p-3">
                <Icon content={icon} width="20px" height="20px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection