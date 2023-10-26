import React, { useState } from "react";
import Navigate from "@/app/_components/navigate/navigate";
import Image from "next/image";

const suggests = [
  {
    title: "قیمت آپارتمان در بلوار سمیه رشت",
    link: "/test",
    imageLink: "/images/suggest1.svg",
  },
  {
    title: "خرید آپارتمان در سعادت آباد تهران",
    link: "/test",
    imageLink: "/images/suggest2.svg",
  },
  {
    title: "خرید خانه در رشت تا ۶۰۰ میلیون",
    link: "/test",
    imageLink: "/images/suggest3.svg",
  },
  {
    title: "خرید آپارتمان در سعادت آباد تهران",
    link: "/test",
    imageLink: "/images/suggest4.svg",
  },

  // Add more options
];

export default function SuggestedPages() {
  return (
    <section className="flex items-center flex-col mt-20 px-4 md:px-56">
      <h3 className="font-iran-sans text-gray4 font-bold mt-4 text-2xl text-center">
        صفحات پیشنهادی پست ملک
      </h3>
      <h5 className="text-gray4 mt-2 mb-4">
        دسترسی آسان به صفحات آگهی املاک پر بازدید پست ملک
      </h5>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 w-full">
        {suggests.map((item) => (
          <Navigate
            key={item.title}
            type="primary"
            href={item.link}
            className="transition font-bold relative"
          >
            <span className="z-10 text-white min-h-[90px] sm:min-h-[120px] md:min-h-[150px] flex items-center justify-center text-center">
              {item.title}
            </span>
            <Image src={item.imageLink} alt={item.title} fill />
          </Navigate>
        ))}
      </div>
    </section>
  );
}
