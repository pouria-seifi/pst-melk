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
  href: string;
  children?: React.ReactNode;
  type?: Types;
  icon?: React.ReactNode;
}

const buttonTypes = {
  primary:
    "text-secondary bg-white py-1.5 px-2.5 flex items-center row justify-center rounded",
  secondary:
    "text-secondary bg-white py-1.5 px-2.5 flex items-center row justify-center rounded border-1 rounded border-solid",
  thirdinary:
    "border-primary text-primary bg-white py-1.5 px-2.5 flex items-center row justify-center rounded border-1 rounded border-solid",
  quaterdinary:
    "border-primary text-white bg-primary py-1.5 px-2.5 flex items-center row justify-center rounded border-1 rounded border-solid",
  quinary:
    "text-white bg-secondary py-1.5 px-2.5 flex items-center row w-44 justify-center rounded",
};

const Navigate: React.FC<ButtonProps> = ({
  href,
  className,
  children,
  type,
  icon,
}) => {
  if (type)
    return (
      <Link href={href} className={utils.classes(className, buttonTypes[type])}>
        {icon ? (
          <div className="flex items-center justify-between w-full">
            {children}
            {icon}
          </div>
        ) : (
          children
        )}
      </Link>
    );

  return (
    <Link href={href} className={className}>
      {icon ? (
        <div className="flex items-center justify-between w-full">
          {children}
          {icon}
        </div>
      ) : (
        children
      )}
    </Link>
  );
};

export default Navigate;
