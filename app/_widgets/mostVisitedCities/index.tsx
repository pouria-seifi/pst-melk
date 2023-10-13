import React, { useState } from "react";
import Navigate from "@/app/_components/navigate/navigate";
import Image from "next/image";
import Location from "/public/images/location.svg";

const cities = [
  { name: "املاک تهران", link: "/city1" },
  { name: "املاک رشت", link: "/city2" },
  { name: "املاک شیراز", link: "/city3" },
  { name: "املاک اصفهان", link: "/city4" },
  { name: "املاک کیش", link: "/city5" },
  { name: "املاک ساری", link: "/city6" },
  { name: "املاک چالوس", link: "/city7" },
  { name: "املاک تبریز", link: "/city8" },
  { name: "املاک مشهد", link: "/city9" },
  { name: "املاک قم", link: "/city10" },
  { name: "املاک ارومیه", link: "/city11" },
  { name: "املاک زنجان", link: "/city12" },
  // Add more options
];

export default function MostVisitedCities() {
  return (
    <section className="mx-4 flex items-center flex-col">
      <Image
        className="mt-4"
        width={32}
        height={32}
        src={Location}
        alt="location"
      />
      <h3 className="text-primary font-bold mt-4 mb-9 text-2xl text-center">
        شهرهای پربازدید
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-full">
        {cities.map((city) => (
          <Navigate
            type="secondary"
            href={city.link}
            className="transition font-bold hover:bg-thirdinary hover:text-white hover:border-none"
          >
            {city.name}
          </Navigate>
        ))}
      </div>
    </section>
  );
}
