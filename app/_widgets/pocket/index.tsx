import Image from "next/image";
import React from "react";
import HomePocket from "/public/images/home-pocket.svg";
import WhiteArrowLeft from "/public/images/white-arrow-left.svg";
import Navigate from "@/app/_components/navigate/navigate";

export default function Pocket() {
  return (
    <section className="md:bg-gray1 rounded-2xl mt-28 flex items-center flex-col-reverse lg:flex-row px-12 mx-4 md:mx-28">
      <div className="">
        <h3 className="justify-center md:justify-start text-center md:text-right text-xl font-bold md:text-5xl mb-2 flex text-gray6">
          بنگاه املاک در
          <span className="text-primary px-2">جیب</span>
          شماست!
        </h3>
        <p className="mb-5 text-sm md:text-base text-center md:text-right">
          با نرم افزار هوشمند املاک پست ملک ، تمام فایل‌های املاک شما به صورت
          منظم و دسته‌بندی شده، در‌جیب‌تان قرار دارد! با پست ملک‌ می‌توانید تمام
          امرور مربوط به اجاره یا فروش ملک‌های خود از ثبت تقاضای مشتری تا صدور
          قرارداد ملک و فاکتور را به صورت آنلاین انجام دهید.
        </p>
        <Navigate
          type="quaterdinary"
          href="/"
          icon={<Image src={WhiteArrowLeft} alt="" />}
          className="w-40 mt-6 mx-auto md:mr-0 md:ml-auto"
        >
          ثبت آگهی ملک
        </Navigate>
      </div>
      <Image
        className="p-8"
        alt="home"
        src={HomePocket}
        width={435}
        height={375}
      />
    </section>
  );
}
