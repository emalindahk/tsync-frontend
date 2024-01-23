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
      <div className="mt-14 sm:mt-28 flex flex-col sm:flex-row justify-between w-full items-start">
        <div className="flex flex-col gap-y-5 items-start">
          <h1 className="text-tsGray-800 text-5xl sm:text-[56px] font-semibold xl:max-w-lg">
            Uniting the world,
            one video call at a time
          </h1>
          <p className="text-tsGray-500 text-base font-normal max-w-lg">
            Experience the future of communication with ClearLink –
            where crystal-clear video conferencing meets unparalleled simplicity.
          </p>

          <div className="flex flex-col sm:flex-row items-center py-6 sm:gap-x-3">
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

        <div className="flex flex-col items-center gap-y-5 p-8 border rounded-2xl bg-tsBlue-200 mt-8 sm:mt-0">
          <Image
            alt="Hero Image"
            src={hero}
            width={520}
            height={340}
            className="object-cover"
            priority
          />
          <div className="flex items-center gap-x-2">
            {controlIcons.map((icon, i) => (
              <div className="rounded-full bg-white border border-tsBlue-100 shadow-sm p-3" key={i}>
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