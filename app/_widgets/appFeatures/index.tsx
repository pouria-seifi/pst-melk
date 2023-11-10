import React, { useState } from "react";
import Navigate from "@/app/_components/navigate/navigate";
import Image from "next/image";
import EmailIcon from "/public/images/features/1.svg";

const data = [
  {
    icon: "/images/features/2.svg",
    title: "انتشار رایگان به صورت عمومی",
    text: "امکان انتشار فایل های املاک به صورت عمومی در سایت پست ملک جهت افزایش شانس اجاره و فروش ملک تنها با یک کلیک به صورت کاملا رایگان و بدون محدویت با درج اطلاعات تماس شما",
  },
  {
    icon: "/images/features/3.svg",
    title: "مدیریت همزمان کارشناسان ملک",
    text: "امکان مدیریت تمام فعالیت ها و امور مربوط به مشاورین یک بنگاه املاک ، تعیین سطوح دسترسی کاربران به فایلها ، امکان گزارش گیری توسط مدیر آژانس با استفاده از سامانه ابری پست ملک",
  },
  {
    icon: "/images/features/4.svg",
    title: "تنظیم قرارداد و ارائه فاکتور",
    text: "امکان تنظیم قرارداد حرفه ایی فروش و اجاره ملک با امکان چاپ و محاسبه کمیسیون املاک به صورت خودکار و صدور فاکتورهای فروش و ثبت اطلاعات تراکنش های مالی در سامانه",
  },
  {
    icon: "/images/features/5.svg",
    title: "جستجوی ساده با امکان انطباق خودکار",
    text: "امکان جستجو بین تمام فایل‌های به صورت دستی و یا انطباق خودکار بین درخواست های خرید ، فروش و یا اجاره بر اساس دست‌بندی و نوع درخواست مشتری مانند متراژ ، بودجه و موقعیت",
  },
  {
    icon: "/images/features/6.svg",
    title: "ثبت و مدیریت درخواست‌ها",
    text: "ثبت و مدیریت تمامی درخواست‌های خرید ، فروش و اجاره انواع ملک با جزیئات کامل در سامانه و دسترسی ساده با امکان ویرایش درخواست‌ها",
  },
  {
    icon: "/images/features/7.svg",
    title: "نرم افزار حسابداری املاک",
    text: "امکان ثبت کامل مشخصات مشتریان به همراه انجام تمامی عملیات مالی، محاسبه کمیسیون و صدور فاکتور فروش معاملات به صورت خودکار و تهیه گزارشات پیشرفته مالی و بانکی.",
  },
  {
    icon: "/images/features/8.svg",
    title: "پروفایل شخصی مشاورین و آژانس ها املاک",
    text: "امکان ایجاد صفحه اختصاصی برای مشاورین و شخصی سازی پروفایل با امکان نمایش آگهی‌های عمومی، راه های تماس، شبکه های اجتماعی و امکان اشتراک گذاری از طریق بارکد به عنوان وب سایت مشاورین",
  },
  {
    icon: "/images/features/9.svg",
    title: "دسترسی آنلاین و 24 ساعته",
    text: "در هر کجای دنیا که باشید فقط کافی است گوشی یا لپ‌تاپ خود را بردارید و با ورود به پروفایل خود در سامانه ابری پست ملک، به تمامی فایل‌های اجاره و فروش خود دسترسی داشته باشید.",
  },
];

export default function AppFeatures() {
  const Card = ({
    data,
  }: {
    data: { icon: string; title: string; text: string };
  }) => (
    <div className="flex flex-col items-start bg-gray1 rounded-2xl p-6 group transition-all duration-500 hover:bg-thirdinary">
      <Image
        className="group-hover:invert"
        src={data.icon}
        width={50}
        height={50}
        alt=""
      />
      <h3 className="text-gray8 text-sm mt-4 group-hover:text-white">
        {data.title}
      </h3>
      <span className="text-gray5 text-xs mt-2 leading-5 group-hover:text-white">
        {data.text}
      </span>
    </div>
  );

  const BlackCard = () => (
    <div className="flex flex-col justify-between items-start bg-gray9 rounded-2xl p-6 bg-features-two-circles bg-no-repeat bg-[position:15%_0%] min-h-[185px]">
      <Image
        className=""
        src="/images/features/1.svg"
        width={50}
        height={50}
        alt=""
      />
      <div className="flex">
        <h3 className="text-white text-xl">
          مشاهده پلن های
          <br />
          نرم افزار املاک پست ملک
        </h3>
        <Image
          className="mt-auto mr-2"
          src="/images/features/arrow-left.svg"
          width={30}
          height={30}
          alt=""
        />
      </div>
    </div>
  );

  return (
    <section className="flex items-center flex-col mt-8 md:mt-20 px-4 md:px-40 mb-4">
      <div className="md:bg-features bg-no-repeat bg-contain md:border-none border-t-1 border-solid border-gray2 ">
        <h3 className="font-iran-sans text-gray9 font-bold mt-14 text-xl md:text-2xl text-center">
          امکانات نرم‌ افزار پست ملک
        </h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          <BlackCard />
          {data.map((item) => (
            <Card key={item.title} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
