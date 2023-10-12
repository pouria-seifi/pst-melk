// Header.tsx
import Image from "next/image";
import React from "react";
import Logo from "/public/pstLogo.svg";
import PipLine from "/public/pipeLine.svg";
import AddIcon from "/public/add-icon.svg";
import Person from "/public/person.svg";
import Hamburger from "/public/hamburger.svg";
import Button from "../button/button";
import Navigate from "../navigate/navigate";

const menuItems = [
  {
    name: "نرم‌افزار املاک",
    to: "/route1",
  },
  {
    name: "درباره ما",
    to: "/route2",
  },
  {
    name: "پشتیبانی",
    to: "/route3",
  },
  {
    name: "پروفایل من",
    to: "/route4",
  },
];

const Header: React.FC = () => {
  return (
    <header className="bg-primary py-4 px-5">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image width={40} height={40} src={Logo} alt="logo" />
          <Image
            className="hidden lg:flex mr-10 ml-8"
            width={0}
            height={32}
            src={PipLine}
            alt="pipe"
          />
          <div className="hidden lg:flex">
            {menuItems.map((item) => (
              <Navigate
                type="thirdinary"
                key={item.name}
                className="ml-7 text-white"
                href={item.to}
              >
                {item.name}
              </Navigate>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex">
          <Navigate
            type="primary"
            href="/add"
            className="ml-6"
            icon={<Image src={AddIcon} alt="" />}
          >
            ثبت اگهی ملک
          </Navigate>
          <Button type="primary" icon={<Image src={Person} alt="" />}>
            ورود به سیستم
          </Button>
        </div>
        <div className="lg:hidden">
          <Image src={Hamburger} alt="hamburger icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
