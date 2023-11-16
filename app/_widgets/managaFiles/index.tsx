import Image from "next/image";
import React from "react";
import ManageFilesIcon from "/public/images/manage-files.svg";
import Navigate from "@/app/_components/navigate/navigate";
import WhiteArrowLeft from "/public/images/white-arrow-left.svg";

export default function ManageFiles() {
  return (
    <section className="mt-10 lg:mt-28 mb-20 px-6 lg:px-40 py-8 mx-4 lg:mx-auto text-justify">
      <div className="bg-secondary bg-twoCirclesManageFiles bg-no-repeat bg-[position:10%_100%] lg:bg-[position:45%_100%] rounded-2xl flex justify-between flex-col lg:flex-row items-center px-6 lg:px-14 py-6 lg:py-14">
        <Image
          className="hidden lg:flex lg:ml-6"
          width={32}
          height={36}
          src={ManageFilesIcon}
          alt="Instagram"
        />
        <div className="flex flex-col">
          <span className="text-base lg:text-xl text-white font-bold mb-4 lg:mb-2 text-center lg:text-right">
            دستیار شخصی مدیریت فایل های مسکن
          </span>
          <span className="text-xs text-gray1 max-w-lg lg:ml-4">
            امکان انتشار فایل های املاک به صورت عمومی در وب سایت پست ملک جهت
            افزایش شانس اجاره و فروش ملک تنها با یک کلیک به صورت کاملا رایگان و
            بدون محدویت با درج اطلاعات تماس شما.
          </span>
        </div>
        <Navigate
          type="quaterdinary"
          href="/"
          icon={
            <Image
              // className="hidden lg:flex"
              src={WhiteArrowLeft}
              alt=""
            />
          }
          className="w-48 lg:w-58 h-12 mt-14 lg:mt-auto lg:mb-auto ml-auto lg:ml-0"
        >
          ورود به نرم‌افزار املاک
        </Navigate>
      </div>
    </section>
  );
}
