import Image from "next/image";
import React, { Fragment } from "react";
import Navigate from "@/app/_components/navigate/navigate";
import CloseBtn from "/public/images/close-btn.svg";
import { MenuItem } from "@/app/globalTypes";

export default function MobileHeader({
  isModalOpen,
  toggleModal,
  menuItems,
  children,
}: {
  isModalOpen: boolean;
  menuItems: MenuItem[];
  toggleModal: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
}) {

  return (
    <Fragment>
      {/* Overlay */}
      <div
        onClick={toggleModal}
        className={`fixed bottom-0 left-0 right-0 top-0 bg-gray9 opacity-20 z-50 ${
          isModalOpen ? "fixed" : "hidden"
        }`}
      />

      {/* Modal container */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white px-6 pb-6 pt-4 transform transition-transform duration-500 ease-in-out z-50 rounded-t-3xl ${
          isModalOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Modal content */}
        <div className="bg-white flex flex-col">
          {/* header */}
          <div className="flex flex-row justify-between mb-2">
            <span></span>
            <div className="flex flex-row mr-auto" onClick={toggleModal}>
              <span className="text-gray8 font-bold text-base">بستن</span>
              <Image
                className="mr-4"
                width={24}
                height={24}
                src={CloseBtn}
                alt="pipe"
              />
            </div>
          </div>
          <div className="flex flex-col">
            {menuItems.map(({ name, to }) => (
              <Navigate
                key={name}
                className="border-b-1 border-solid border-gray2 py-4 last:border-none"
                href={to}
              >
                {name}
              </Navigate>
            ))}
          </div>
          <Navigate
            href="/"
            type="quaterdinary"
            className="w-full h-12 mt-8 mb-4"
          >
            ورود به سیستم
          </Navigate>
          <Navigate type="thirdinary" href="/" className="w-full h-12">
            ثبت آگهی ملک
          </Navigate>
          {children}
        </div>
      </div>
    </Fragment>
  );
}
