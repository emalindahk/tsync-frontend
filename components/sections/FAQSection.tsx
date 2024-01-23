import React from 'react'
import Accordion, { AccordionItem } from '../ui/Accordion';
import Link from 'next/link';

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "How many participants can join a ClearLink video conference?",
    content:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 2,
    title: "Can I use ClearLink on multiple devices?",
    content:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 3,
    title: "Is ClearLink compatible with other video conferencing platforms?",
    content:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 4,
    title: "How does ClearLink ensure the security of my video conferences?",
    content:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 5,
    title: "Do I need to download any software to use ClearLink?",
    content:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 6,
    title: "What kind of customer support does ClearLink provide?",
    content:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
];

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