import React from "react";
import svgs from "../svgs";
import Icon from "../ui/Icon";

const SocialProofSection = () => {
  const logos = [
    svgs.shopify,
    svgs.coinbase,
    svgs.dropbox,
    svgs.intercom,
    svgs.marvel,
    svgs.automattic,
  ];
  return (
    <div className="relative flex flex-col items-center py-24 gap-y-6 w-full px-12">
      <p className="text-tsGray-600 text-md font-normal">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className="flex items-center justify-items-start gap-x-8">
        {logos.map((logo) => (
            <Icon content={logo}/>
        ))}
      </div>
    </div>
  );
};

export default SocialProofSection;
