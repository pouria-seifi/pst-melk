import React from "react";

export default function EventsTillNow() {
  return (
    <section className="bg-eventsTillNowMobile md:bg-eventsTillNow bg-no-repeat bg-cover mt-10 md:mt-28 flex items-center flex-col px-4 md:px-40 py-8">
      <h3 className="justify-center mt-16 mb-14 text-center text-3xl font-bold md:text-2xl text-white">
        قوی‌ترین سیستم املاک در پست ملک
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-between w-full">
        <div className="text-xl font-normal bg-gray9 opacity-80 rounded-2xl pt-6 pr-6 pb-8 pl-6 flex mb-6 lg:mb-4 ">
          <span className="m-auto text-white">
            بیش از <span className="text-4xl font-bold">۴۲۰۰</span> <br />
            قرارداد تنظیم شده در سامانه
          </span>
        </div>
        <div className="text-xl font-normal bg-gray9 opacity-80 rounded-2xl pt-6 pr-6 pb-8 pl-6 flex mb-6 lg:mb-4 lg:mx-4">
          <span className="m-auto text-white">
            بیش از <span className="text-4xl font-bold">۷۰۰</span> <br />
            مشاور شخصی فعال در سامانه
          </span>
        </div>
        <div className="text-lg font-normal bg-gray9 opacity-80 rounded-2xl pt-6 pr-6 pb-8 pl-6 flex mb-6 lg:mb-4 ">
          <span className="m-auto text-white">
            بیش از <span className="text-4xl font-bold">۲۵۰</span> <br />
            بنگاه مسکن فعال در سامانه
          </span>
        </div>
      </div>
    </section>
  );
}
