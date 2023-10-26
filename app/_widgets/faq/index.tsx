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
    <section className="flex items-center flex-col px-4 md:px-56">
      <div className="w-full mt-8">
        <h3 className="text-center">سوالات متداول</h3>
        {faqQuestions.map((item, index) => (
          <div
            className="group cursor-pointer flex flex-col mt-5 w-full"
            tabIndex={index}
            key={index}
          >
            <div className="bg-gray1 group-focus:bg-thirdinary rounded-lg overflow-hidden w-full p-6">
              <div className="flex items-center justify-between w-full group-focus:mb-4">
                <span className="group-focus:text-white text-base font-medium">
                  {item.question}
                </span>
                <Image
                  width={21}
                  height={21}
                  src={FAQIcon}
                  alt="icon"
                  className="transition-all duration-500 group-focus:-rotate-180 group-focus:fill-white group-focus:text-white"
                />
              </div>
              <div className="invisible text-sm font-light text-white h-auto max-h-0 items-center opacity-0 transition-all group-focus:mt-2 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
