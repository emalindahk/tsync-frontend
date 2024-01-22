import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "outline" | "solid";
  label: string
}

const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  children,
  className,
  ...props
}) => {
  const solid = "text-white bg-tsBlue-700 hover:bg-blue-900";

  const outline =
    "text-tsGray-900 border-tsGray-400 hover:bg-tsGray-300";

  const common =
    "px-3 py-2 rounded-[100px] transition ease-in-out duration-300 border cursor-pointer text-base";

  const combinedClasses = [
    common,
    variant === "outline" ? outline : solid,
    className,
  ].join(" ");

  return (
    <button className={combinedClasses} {...props}>
      <span>{label}</span>
    </button>
  );
};

export default Button;
