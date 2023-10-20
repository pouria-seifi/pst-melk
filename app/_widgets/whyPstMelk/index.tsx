import Image from "next/image";
import React from "react";
import HomeImage from "/public/images/home.svg";
import ArrowLeft from "/public/images/arrow-left.svg";
import Navigate from "@/app/_components/navigate/navigate";

export default function WhyPstMelk() {
  return (
    <section className="bg-thirdinary mt-28 flex row px-4 md:px-40 pt-16">
      <div className="text-white mb-9">
        <h3 className="font-bold text-5xl mb-2">چرا پست ‌ملک؟</h3>
        <p className="mb-5">
          چه به دنبال خرید یا اجاره خانه باشید و چه قصد شما فروش خانه باشد، پست
          ملک این امکان را برای شما فراهم کرده که این دو کار را در بستری رایگان
          انجام دهید و شانس خود را در پیدا کردن خانه ایده‌آل و فروش ملک و زمین
          افزایش دهید. در واقع، پست ملک مکانی برای یافتن و فروش ملک و زمین
          شماست. برخی از امکاناتی که پست ملک در اختیار کاربران خود قرار می‌دهد،
          عبارت‌اند از:
        </p>

        <ul className="list-disc">
          <li className="mb-2">
            جستجوی حرفه‌ای ملک از طریق لیست فایل‌های منتشرشده و همچنین از روی
            نقشه
          </li>
          <li className="mb-2">
            آگاهی از قیمت ملک و زمین در صفحات اختصاصی و از روی نقشه و همچنین،
            مشاهده‌ی چگونگی پراکندگی قیمت در مناطق مختلف
          </li>
          <li className="mb-2">
            فیلترهای متنوع برای جستجوی هدفمند انواع ملک در سراسر ایران
          </li>
          <li className="mb-2">
            امکانِ ثبت آگهی رایگان برای فروش و اجاره آپارتمان، زمین، دفتر کار و
            ساختمان تجاری
          </li>
          <li className="mb-2">
            ثبتِ آسان و رایگان آگهی با امکانِ درج مشخصات کامل و بدون محدودیت
          </li>
        </ul>
        <Navigate
          type="thirdinary"
          href="/"
          icon={<Image src={ArrowLeft} alt="" />}
          className="max-w-[183px] mt-6"
        >
          ثبت آگهی ملک
        </Navigate>
      </div>
      <div className="hidden lg:flex items-end">
        <Image alt="home" src={HomeImage} width={1200} height={100} />
      </div>
    </section>
  );
}
