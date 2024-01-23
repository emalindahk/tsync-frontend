import React from "react";
import Icon from "./Icon";
import svgs from "../svgs";

export interface AccordionItem {
  id: number;
  title: string;
  content: string | JSX.Element;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="space-y-2 max-w-[44rem] w-full p-8">
      {items.map((item) => (
        <details
          key={item.id}
          className="group border-none rounded-lg border border-tsGray-200 bg-tsGray-50"
        >
          <summary className="cursor-pointer p-4 w-full list-none [&::-webkit-details-marker]:hidden">
            <div className="flex w-full items-center justify-between cursor-pointer">
              <span className="text-lg text-tsGray-900 font-semibold">
                {item.title}
              </span>
              <Icon content={svgs.plusCircle}/>
            </div>
          </summary>
          <div className="p-4 bg-tsGray-50 w-full text-tsGray-600 text-base">{item.content}</div>
        </details>
      ))}
    </div>
  );
};

export default Accordion;
