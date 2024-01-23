import Link from "next/link";
import React from "react";

interface FooterMenuItem {
  label: string;
  href?: string;
}

interface FooterMenuProps {
  title: string;
  listItems: FooterMenuItem[];
}

const FooterMenu: React.FC<FooterMenuProps> = ({ title, listItems }) => {
  return (
    <div className="text-sm w-32">
      <h4 className="text-tsGray-500 font-normal text-sm mb-4">{title}</h4>
      <ul className="flex flex-col gap-y-4">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="text-tsGray-600 hover:text-gray-800 cursor-pointer"
          >
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
