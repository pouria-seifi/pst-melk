import Image from "next/image";
import React from "react";
import PhoneIcon from "/public/images/phone.svg";
import EmailIcon from "/public/images/email.svg";
import "./index.css";

export default function Contact() {
  return (
    <section className="flex mt-10 md:mt-28 mb-20">
      <div className="relative bg-gray1 rounded-2xl inline-block items-center flex-col px-6 lg:px-40 py-8 mx-4 md:mx-auto">
        <h3 className="contact text-2xl font-bold text-center mt-2 ">
          تماس با پست ملک
        </h3>
        <span className="text-gray4 text-justify mt-2 mb-4">
          نظرات و پیشنهادات خود را برای پیشرفت و بهینه‌سازی پست ملک با ما درمیان
          بگذارید.
        </span>
        <div className="flex flex-row justify-between w-full mt-5">
          <div className="flex flex-col items-end h-full">
            <Image alt="phone" src={PhoneIcon} width={20} height={20} />
            <a href="tel:021228422215" className="mt-2">
              ۲۲۸۴۲۲۲۱۵ - ۰۲۱
            </a>
          </div>
          <div className="flex flex-col items-end h-full">
            <Image alt="phone" src={EmailIcon} width={20} height={20} />
            <a href="mailto:info@postmelk.ir" className="mt-2">
              info@postmelk.ir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
