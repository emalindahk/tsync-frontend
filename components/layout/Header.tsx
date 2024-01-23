'use client';

import React from "react";
import Logo from "../ui/Logo";
import Dropdown from "../ui/Dropdown";
import Link from "next/link";
import Button from "../ui/Button";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Header = () => {
  const handleSelect = (value: string) => {
    console.log("Selected:", value);
  };


  return (
    <header className="relative bg-white sm:bg-tsGray-100 mt-5 py-2 px-4 sm:px-8 sm:rounded-[100px] sm:border sm:border-tsGray-300">
      <div className="flex justify-between items-center w-full">
        <Logo />
        <nav
          className="hidden sm:relative top-full left-0 w-full sm:w-auto p-5 sm:p-0 sm:bg-transparent z-50 sm:flex gap-x-5 items-center"
        >
          <Dropdown
            title="Products"
            options={options}
            onSelect={handleSelect}
          />
          <Dropdown
            title="Solutions"
            options={options}
            onSelect={handleSelect}
          />
          <Dropdown
            title="Resources"
            options={options}
            onSelect={handleSelect}
          />
          <Link href={"/"} className="font-medium text-lg text-tsGray-500">
            Pricing
          </Link>
        </nav>
        <div className="hidden lg:inline-flex gap-x-2">
          <Button variant="outline" label="Talk to sales" />
          <Button variant="solid" label="Sign up for free" />
        </div>
      </div>
    </header>
  );
};

export default Header;
