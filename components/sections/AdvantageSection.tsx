import React, { ReactNode } from "react";
import Image from "next/image";

import svgs from "../svgs";
import Icon from "../ui/Icon";
import featureImage from "../../public/images/features.png"

interface featuresProps {
  icon: ReactNode;
  title: string;
  text: string;
}

const features: featuresProps[] = [
  {
    icon: svgs.videoRecorder,
    title: "Crystal-clear HD video",
    text: `No more pixelation or blurriness just stunning, lifelike clarity that brings your team closer in meetings.`,
  },
  {
    icon: svgs.recording,
    title: "Noise-canceling audio",
    text: "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
  },
  {
    icon: svgs.calendar,
    title: "Scheduling made easy",
    text: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    icon: svgs.lockUnlocked,
    title: "Crystal-clear HD video",
    text: "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
  },
];

const AdvantageSection = () => {
  return (
    <div className="relative flex items-center w-full py-24 px-4 gap-x-4">
      <div>
        <h3 className="text-base font-medium text-tsBlue-700">
          The ClearLink Advantage
        </h3>
        <h2 className="text-3xl font-semibold text-tsGray-800">
          Why choose ClearLink?
        </h2>
        <p className="mt-3 text-tsGray-500 font-normal">
          In a world where connection is everything, ClearLink takes the lead.
          Our <br />
          cutting-edge video conferencing app offers:
        </p>
        <div className="grid grid-cols-2 gap-x-10 gap-y-14 mt-20">
          {features.map((f, i) => (
            <div className="flex flex-col" key={i}>
              <div className=" rounded-full shadow-lg border border-tsGray-200 bg-tsGray-50 p-3 w-12 h-12">
                <Icon content={f.icon} />
              </div>
              <div className="mt-5">
                <h2 className="text-tsGray-900 text-lg font-medium">
                  {f.title}
                </h2>
                <h3 className="text-tsGray-600 text-sm font-normal">
                  {f.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <Image src={featureImage} alt="Features Image" />
      </div>
    </div>
  );
};

export default AdvantageSection;
