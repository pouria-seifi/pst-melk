import React from "react";
import Link from "next/link";
import { utils } from "@/app/_utility";

type Types =
  | "primary"
  | "secondary"
  | "thirdinary"
  | "quaterdinary"
  | "quinary";

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
    "text-white bg-secondary py-1.5 px-2.5 flex items-center w-44 justify-center rounded",
  secondary: "",
  thirdinary:
    "border-primary text-primary bg-white py-1.5 px-2.5 flex items-center justify-center rounded border-1 rounded border-solid",
  quaterdinary:
    "border-primary text-white bg-primary py-1.5 px-2.5 flex items-center justify-center rounded border-1 rounded border-solid",
  quinary:
    "border-gray1 text-gray3 bg-gray1 py-1.5 px-2.5 flex items-center justify-center rounded border-1 rounded border-solid",
};

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  type,
  icon,
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={utils.classes(buttonTypes[type], className)}
    >
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
