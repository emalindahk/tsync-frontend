'use client';

import React from 'react'
import Logo from '../ui/Logo';
import Dropdown from '../ui/Dropdown';
import Link from 'next/link';
import Button from '../ui/Button';

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

const Header = () => {
  const handleSelect = (value: string) => {
    console.log("Selected:", value);
  }

  return (
    <header className="flex gap-x-10 justify-between items-center rounded-[100px] border border-tsGray-300 bg-tsGray-100 mt-5 py-2 px-8">
      <Logo />
      <div className="flex items-center gap-x-5">
        <Dropdown title="Products" options={options} onSelect={handleSelect} />
        <Dropdown title="Solutions" options={options} onSelect={handleSelect} />
        <Dropdown title="Resources" options={options} onSelect={handleSelect} />
        <Link href={"/"} className="font-medium text-lg text-tsGray-500">
          Pricing
        </Link>
      </div>
      <div className="inline-flex gap-x-2">
        <Button variant="outline" label="Talk to sales" />
        <Button variant="solid" label="Sign up for free" />
      </div>
    </header>
  );
}

export default Header