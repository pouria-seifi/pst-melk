import Image from "next/image";
import React from "react";
import FAQIcon from "/public/images/faq-icon.svg";

const faqQuestions = [
  {
    question: "استفاده از سامانه فایلینگ پست ملک به سیستم‌عامل خاصی نیاز دارد؟",
    answer:
      "شما می‌توانید تا سه ماه به صورت رایگان از تمامی سرویس‌های سامانه پست ملک استفاده کنید و در صورت رضایت از خدمات، اشتراک ماهانه خریداری کنید.",
  },
  {
    question: "استفاده از سامانه فایلینگ پست ملک به سیستم‌عامل خاصی نیاز دارد؟",
    answer:
      "شما می‌توانید تا سه ماه به صورت رایگان از تمامی سرویس‌های سامانه پست ملک استفاده کنید و در صورت رضایت از خدمات، اشتراک ماهانه خریداری کنید.",
  },
  {
    question: "استفاده از سامانه فایلینگ پست ملک به سیستم‌عامل خاصی نیاز دارد؟",
    answer:
      "شما می‌توانید تا سه ماه به صورت رایگان از تمامی سرویس‌های سامانه پست ملک استفاده کنید و در صورت رضایت از خدمات، اشتراک ماهانه خریداری کنید.",
  },
  {
    question: "استفاده از سامانه فایلینگ پست ملک به سیستم‌عامل خاصی نیاز دارد؟",
    answer:
      "شما می‌توانید تا سه ماه به صورت رایگان از تمامی سرویس‌های سامانه پست ملک استفاده کنید و در صورت رضایت از خدمات، اشتراک ماهانه خریداری کنید.",
  },
  {
    question: "استفاده از سامانه فایلینگ پست ملک به سیستم‌عامل خاصی نیاز دارد؟",
    answer:
      "شما می‌توانید تا سه ماه به صورت رایگان از تمامی سرویس‌های سامانه پست ملک استفاده کنید و در صورت رضایت از خدمات، اشتراک ماهانه خریداری کنید.",
  },
  {
    question: "استفاده از سامانه فایلینگ پست ملک به سیستم‌عامل خاصی نیاز دارد؟",
    answer:
      "شما می‌توانید تا سه ماه به صورت رایگان از تمامی سرویس‌های سامانه پست ملک استفاده کنید و در صورت رضایت از خدمات، اشتراک ماهانه خریداری کنید.",
  },
  {
    question: "استفاده از سامانه فایلینگ پست ملک به سیستم‌عامل خاصی نیاز دارد؟",
    answer:
      "شما می‌توانید تا سه ماه به صورت رایگان از تمامی سرویس‌های سامانه پست ملک استفاده کنید و در صورت رضایت از خدمات، اشتراک ماهانه خریداری کنید.",
  },
  {
    question: "استفاده از سامانه فایلینگ پست ملک به سیستم‌عامل خاصی نیاز دارد؟",
    answer:
      "شما می‌توانید تا سه ماه به صورت رایگان از تمامی سرویس‌های سامانه پست ملک استفاده کنید و در صورت رضایت از خدمات، اشتراک ماهانه خریداری کنید.",
  },
];

export default function FAQ() {
  return (
    <section className="flex items-center flex-col px-4 md:px-28">
      <div className="m-2 space-y-2 w-full">
        {faqQuestions.map((item, index) => (
          <div
            className="group cursor-pointer flex flex-col gap-2 w-full"
            tabIndex={index}
            key={index}
          >
            <div className="bg-gray1 group-focus:bg-thirdinary rounded-lg overflow-hidden w-full">
              <div className="flex items-center p-5 justify-between w-full group-focus:bg-[#3E6F99]">
                <span className="group-focus:text-white">{item.question}</span>
                <Image
                  width={21}
                  height={21}
                  src={FAQIcon}
                  alt="icon"
                  className="transition-all duration-500 group-focus:-rotate-180 group-focus:fill-white group-focus:text-white"
                />
              </div>
              <div className="invisible text-white h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
