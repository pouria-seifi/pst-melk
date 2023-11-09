import Image from "next/image";
import React from "react";
import HomePocket from "/public/images/home-pocket.svg";
import ArrowLeft from "/public/images/arrow-left.svg";
import Navigate from "@/app/_components/navigate/navigate";

export default function SecondPocket() {
  return (
    <section className="flex flex-col-reverse px-4 justify-center lg:flex-row md:px-40 items-center pt-12 md:pt-24 bg-circle bg-no-repeat bg-[position:100%_60%] lg:bg-[position:82%_20%] bg-250">
      <div className="text-sm font-medium mb-9 text-justify md:pl-10 lg:pl-14">
        <h3 className="font-bold text-2xl mb-3 md:mb-5 text-gray6 text-center md:text-right mt-4 md:mt-0">
          بنگاه املاک در جیب شماست!
        </h3>
        <p className="md:mb-6 md:mt-2 text-gray4 text-base">
          با نرم افزار املاک پست ملک، تمام فایل‌های املاک شما به صورت منظم و
          دسته‌بندی شده، در‌جیب‌تان قرار دارد! با پست ملک‌ می‌توانید تمام امرور
          مربوط به اجاره یا فروش ملک‌های خود از ثبت تقاضای مشتری تا صدور قرارداد
          ملک و فاکتور را به صورت آنلاین انجام دهید.
        </p>
        <div className="flex flex-col md:flex-row">
          <Navigate
            type="quaterdinary"
            href="/"
            className="w-56 md:w-48 h-12 mt-7 mx-auto md:mr-0 md:ml-8 lg:ml-12"
          >
            ثبت‌نام رایگان مشاور آزاد
          </Navigate>

          <Navigate
            type="quaterdinary"
            href="/"
            className="w-56 md:w-48 h-12 mt-7 mx-auto"
          >
            ثبت‌نام رایگان آژانس املاک
          </Navigate>
        </div>
      </div>
      <Image alt="home" src={HomePocket} width={420} height={360} />
    </section>
  );
}
