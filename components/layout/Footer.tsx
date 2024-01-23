import React from "react";
import svgs from "../svgs";
import Icon from "../ui/Icon";
import Logo from "../ui/Logo";
import FooterMenu from "../ui/FooterMenu";
import { footerList } from "../data";

const Footer = () => {
  const socialIcons = [
    svgs.linkedin,
    svgs.x,
    svgs.facebook,
    svgs.github,
    svgs.youtube,
  ];
  return (
    <footer className="mt-12">
      <div className="py-12 flex items-start">
        <div className="flex flex-col max-w-sm w-full gap-y-8 mr-24">
          <Logo />
          <span className="text-tsGray-600 text-base font-normal">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </span>
        </div>

        <div className="grid grid-cols-4 gap-x-8">
          {footerList.map((list, i) => (
            <FooterMenu key={i} title={list.title} listItems={list.listItems} />
          ))}
        </div>

        <div className="flex flex-col gap-y-4">
          <h3 className="text-sm font-medium text-tsBlue-700">Get the app</h3>
          <Icon content={svgs.appstoreBadge} />
          <Icon content={svgs.playstorebadge} />
        </div>
      </div>

      <div className="flex w-full items-center justify between py-12 gap-x-8">
        <span className="text-tsGray-500 font-normal text-sm flex-1">
          © 2023 ClearLink. All rights reserved.
        </span>
        <div className="flex items-center gap-x-6 cursor-pointer">
          {socialIcons.map((icon) => (
            <Icon content={icon} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
