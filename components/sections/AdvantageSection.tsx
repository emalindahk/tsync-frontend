import React, { ReactNode } from "react";
import Image from "next/image";

import Icon from "../ui/Icon";
import featureImage from "../../public/images/features.png"
import { features } from "../data";

const AdvantageSection = () => {
  return (
    <div className="relative flex items-center w-full py-12 px-4 gap-x-4">
      <div>
        <h3 className="text-sm font-medium text-tsBlue-700">
          The ClearLink Advantage
        </h3>
        <h2 className="text-3xl font-semibold text-tsGray-800">
          Why choose ClearLink?
        </h2>
        <p className="mt-3 text-tsGray-500 font-normal text-wrap max-w-sm">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
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
        <Image src={featureImage} alt="Features Image" priority/>
      </div>
    </div>
  );
};

export default AdvantageSection;
