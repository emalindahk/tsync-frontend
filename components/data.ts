import { ReactNode } from "react";
import svgs from "./svgs";
import { AccordionItem } from "./ui/Accordion";
import { Testimonial } from "./ui/Carousel";
import avatar from "../public/avatars/image-103.png";
import avatar2 from "../public/avatars/image-108.png";
import avatar3 from "../public/avatars/image-21.png";

interface featuresProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export const features: featuresProps[] = [
  {
    icon: svgs.videoRecorder,
    title: "Crystal-clear HD video",
    text: `No more pixelation or blurriness just stunning, lifelike clarity that brings your team closer in meetings.`,
  },
  {
    icon: svgs.recording,
    title: "Noise-canceling audio",
    text: "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
  },
  {
    icon: svgs.calendar,
    title: "Scheduling made easy",
    text: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    icon: svgs.lockUnlocked,
    title: "Crystal-clear HD video",
    text: "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
  },
];

export const accordionItems: AccordionItem[] = [
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


export const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.",
    author: "Sarah Thompson",
    position: "Project Manager, Shopify",
    companyLogo: svgs.shopify,
    rating: 5,
    avatar: avatar,
  },
  {
    id: 2,
    content:
      "Thanks to ClearLink, our remote meetings are now more efficient than ever. The user interface is intuitive, and the security is top-notch.",
    author: "John Doe",
    position: "Marketing Director, Coinbase",
    companyLogo: svgs.coinbase,
    rating: 3,
    avatar: avatar2,
  },
  {
    id: 3,
    content:
      "Our team relies on ClearLink for all our communication needs. The video quality is unmatched, and the customer support is always helpful.",
    author: "Alex Johnson",
    position: "Tech Lead, Dropbox",
    companyLogo: svgs.dropbox,
    rating: 5,
    avatar: avatar3,
  },
];

export const footerList = [
  {
    title: "Product",
    listItems: [
      { label: "Overview" },
      { label: "Features" },
      { label: "Solutions" },
      { label: "Tutorials" },
      { label: "Pricing" },
    ],
  },
  {
    title: "Company",
    listItems: [
      { label: "About Us", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Press", href: "/" },
      { label: "News", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
  {
    title: "Resources",
    listItems: [
      { label: "Blog", href: "/" },
      { label: "Events", href: "/" },
      { label: "Help Centre", href: "/" },
      { label: "Tutorials", href: "/" },
      { label: "Support", href: "/" },
    ],
  },
  {
    title: "Legal",
    listItems: [
      { label: "Terms", href: "/" },
      { label: "Privacy", href: "/" },
      { label: "Cookies", href: "/" },
      { label: "Licenses", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
];
