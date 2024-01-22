import React, { ReactNode } from "react";
const HtmlToReactParser = require("html-to-react").Parser;

interface IconProps {
  content: ReactNode;
  height?: string;
  width?: string;
}

const Icon = ({ content, height, width }: IconProps) => {
  const htmlToReactParser = new HtmlToReactParser();
  const reactElement = htmlToReactParser.parse(content);

  const style = {
    height: height,
    width: width,
  };

  return (
    <div style={style}>
      {typeof content === "string" ? reactElement : content}
    </div>
  );
};

export default Icon;
