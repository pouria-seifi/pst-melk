import React from "react";
import Link from "next/link";
import { utils } from "@/app/_utility";

type Types = "primary" | "secondary" | "thirdinary";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  type: Types;
  icon?: React.ReactNode;
}

const buttonTypes = {
  primary:
    "text-white bg-secondary py-1.5 px-2.5 flex items-center row w-44 justify-center rounded",
  secondary: "",
  thirdinary: "",
};

const Button: React.FC<ButtonProps> = ({ className, children, type, icon }) => {
  return (
    <button className={utils.classes(className, buttonTypes[type])}>
      {icon ? (
        <div className="flex items-center justify-between w-full">
          {children}
          {icon}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
