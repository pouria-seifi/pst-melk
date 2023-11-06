import Image from "next/image";
import React from "react";
import Logo from "/public/images/pstLogo.svg";
import PipLine from "/public/images/pipeLine.svg";
import AddIcon from "/public/images/add-icon.svg";
import Person from "/public/images/person.svg";
import Hamburger from "/public/images/hamburger.svg";
import Button from "../button/button";
import Navigate from "../navigate/navigate";

const menuItems = [
  {
    name: "املاک عمومی",
    to: "/route1",
  },
  {
    name: "پشتیبانی",
    to: "/route2",
  },
  {
    name: "درباره ما",
    to: "/route3",
  },
];

const SecondHeader: React.FC = () => {
  return (
    <header className="bg-primary py-4 px-5 text-xs">
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
                key={item.name}
                className="ml-3 text-white"
                href={item.to}
              >
                {item.name}
              </Navigate>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex">
          {/* <Navigate
            type="primary"
            href="/add"
            className="ml-6 w-44"
            icon={<Image src={AddIcon} alt="" />}
          >
            ثبت اگهی ملک
          </Navigate> */}
          <Button
            type="primary"
            className="w-44"
            icon={<Image src={Person} alt="" />}
          >
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

export default SecondHeader;
