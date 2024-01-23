import React from "react";
import Icon from "../ui/Icon";
import svgs from "../svgs";
import Image from "next/image";
import Button from "../ui/Button";

const CTASection = () => {
  const ListItems: string[] = [
    "30 days free trial",
    "Cancel at any time",
    "Access to all features",
    "Peronalized onboarding",
  ];

  return (
    <div className="relative py-12 flex justify-between w-full">
      <div className="w-1/3">
        <h2 className="text-3xl font-semibold text-tsGray-800">
          Ready to clear the path to perfect communication?
        </h2>

        <ul className="mt-8">
          {ListItems.map((item, i) => (
            <li className="flex items-center gap-3 mt-5" key={i}>
              <Icon content={svgs.checkCircle} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="inline-flex gap-x-2 mt-10">
          <Button variant="outline" label="Talk to sales" />
          <Button variant="solid" label="Sign up for free" />
        </div>
      </div>
      <Image
        src="/images/ScreenMockup.svg"
        alt="Screen Mockup"
        width={720}
        height={402}
        className="transform translate-x-20 -translate-y-14"
      />
    </div>
  );
};

export default CTASection;
