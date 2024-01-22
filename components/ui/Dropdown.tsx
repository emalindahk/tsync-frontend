import React, { useState } from "react";
import svgs from "../svgs";
import Icon from "./Icon";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  title: string;
  options: Option[];
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-none flex items-center gap-x-1"
      >
        <span className="font-medium text-lg text-tsGray-500">{title}</span>
        <Icon content={svgs.chevronDown} height="18" width="18"/>
      </button>

      {isOpen && (
        <ul className="absolute mt-1 w-full rounded-md shadow-lg bg-white z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleItemClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
