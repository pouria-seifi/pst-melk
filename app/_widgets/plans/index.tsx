import React from "react";
import ManageFilesIcon from "/public/images/manage-files.svg";
import Navigate from "@/app/_components/navigate/navigate";
import Image from "next/image";
import WhiteArrowLeft from "/public/images/white-arrow-left.svg";

export default function Plans() {
  return (
    <section className="mt-10 lg:mt-20 mb-20 px-4 lg:px-40 py-8 mx-4 lg:mx-auto text-justify">
      <div className="flex flex-col">
        <h3 className="text-gray9 font-bold text-xl md:text-2xl text-center md:border-t-1 border-solid border-gray2 pt-16">
          پلن‌های نرم افزار املاک برای آژانس‌های املاک و مشاورین املاک
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16">
          <div className="bg-gray2 rounded-3xl p-6 md:p-8">
            <h4 className="text-gray6 text-2xl md:text-4xl font-bold mb-4 md:mb-8">
              آژانس‌های املاک
            </h4>
            <span className="text-gray6 mb-3">
              امکانات که پست‌ملک در اختیار شما می‌گذارد:
            </span>
            <ul className="list-disc mt-2 md:mt-3">
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
            </ul>
            <Navigate
              type="quinary"
              href="/"
              icon={
                <Image className="hidden md:flex" src={WhiteArrowLeft} alt="" />
              }
              className="w-full h-12 mt-8 md:mt-11 text-base font-medium"
            >
              مشاهده تعرفه‌های آژانس‌های املاک
            </Navigate>
          </div>

          <div className="bg-gray2 rounded-3xl p-6 md:p-8">
            <h4 className="text-gray6 text-2xl md:text-4xl font-bold mb-4 md:mb-8">
              مشاورین املاک
            </h4>
            <span className="text-gray6">
              امکانات که پست‌ملک در اختیار شما می‌گذارد:
            </span>
            <ul className="list-disc mt-2 md:mt-3">
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
              <li className="text-xs text-gray5 mb-3 mr-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </li>
            </ul>
            <Navigate
              type="quinary"
              href="/"
              icon={
                <Image className="hidden md:flex" src={WhiteArrowLeft} alt="" />
              }
              className="w-full h-12 mt-8 md:mt-11 text-base font-medium"
            >
              مشاهده تعرفه‌های مشاورین املاک
            </Navigate>
          </div>
        </div>
      </div>
    </section>
  );
}
