import React from 'react'
import Accordion from '../ui/Accordion';
import Link from 'next/link';
import { accordionItems } from '../data';

const FAQSection = () => {
  return (
    <div className="py-24 flex justify-between gap-x-12">
      <div className="w-1/3">
        <h3 className="text-sm font-medium text-tsBlue-700">Support</h3>
        <h2 className="text-3xl font-semibold text-tsGray-800">FAQs</h2>
        <p className="mt-3 text-tsGray-500 font-normal text-wrap max-w-sm">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <span className="underline">
            <Link href={'/'}>chat to our friendly team.</Link>
          </span>
        </p>
      </div>
      <Accordion items={accordionItems} />
    </div>
  );
}

export default FAQSection