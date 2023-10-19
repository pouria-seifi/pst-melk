import React from "react";
import Logo from "/public/images/pstLogo.svg";
import Image from "next/image";
import Navigate from "../navigate/navigate";
import PipLine from "/public/images/pipeLine.svg";
import Instagram from "/public/images/instagram.svg";
import Linkedin from "/public/images/linkedin.svg";
import Youtube from "/public/images/youtube.svg";
import Facebook from "/public/images/facebook.svg";
import CopyWrite from "/public/images/copy-write.svg";

const Footer: React.FC = () => {
  return (
    <section className="bg-secondary flex flex-col items-center justify-center pb-7">
      <div className="flex flex-col items-center max-w-[500px]">
        <Image className="mt-4" width={40} height={40} src={Logo} alt="logo" />
        <a
          // referrerpolicy="origin"
          className="mt-7"
          target="_blank"
          href="https://trustseal.enamad.ir/?id=306277&Code=WwDA90kfHf0fZNTQ6Yka"
        >
          <img
            //   referrerpolicy="origin"
            src="https://trustseal.enamad.ir/logo.aspx?id=306277&Code=WwDA90kfHf0fZNTQ6Yka"
            alt=""
          />
        </a>
        <p className="text-gray2 text-center text-xs font-medium">
          از امروز، رایگان حرفه‌ای کار کنید با قابلیت گروه‌بندی رنج برای کنترل
          دسترسی مشاوران با قابلیت ثبت متقاضی و تطبیق با املاک ثبت شده فیلترینگ
          بی‌نظیر برای جستجوی حرفه‌ای املاک همیشه در دسترس با امنیت فوق‌العاده
          با قابلیت جستجوی نقشه
        </p>
        <div className="flex flex-row items-center justify-center mt-14">
          <Navigate href="/" className="text-gray2 font-medium text-sm">
            دربارهٔ پست ملک
          </Navigate>
          <Image
            className="hidden lg:flex mr-10 ml-8"
            width={0}
            height={32}
            src={PipLine}
            alt="pipe"
          />
          <Navigate href="/" className="text-gray2 font-medium text-sm">
            پشتیبانی و قوانین
          </Navigate>
          <Image
            className="hidden lg:flex mr-10 ml-8"
            width={0}
            height={32}
            src={PipLine}
            alt="pipe"
          />
          <Navigate href="/" className="text-gray2 font-medium text-sm">
            بلاگ پست ملک
          </Navigate>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-10">
          <a target="_blank" href="https://www.instagram.com/postmelk/">
            <Image
              className=""
              width={24}
              height={24}
              src={Instagram}
              alt="Instagram"
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/postmelk">
            <Image
              className=""
              width={24}
              height={24}
              src={Linkedin}
              alt="Linkedin"
            />
          </a>
          <a target="_blank" href="/">
            <Image
              className=""
              width={24}
              height={24}
              src={Youtube}
              alt="Youtube"
            />
          </a>
          <a target="_blank" href="/">
            <Image
              className=""
              width={24}
              height={24}
              src={Facebook}
              alt="Facebook"
            />
          </a>
        </div>
        <hr className="text-white w-full my-8" />
        <div className="flex flex-row">
          <Image
            className="ml-2"
            width={16}
            height={16}
            src={CopyWrite}
            alt="CopyWrite"
          />
          <span className="text-gray2 text-xs font-medium">
            پست ملک ورژن ۱.۱
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
