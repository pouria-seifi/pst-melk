import SwiperComponent from "@/app/_components/swiper";
import React from "react";
import "./index.css";
import Image from "next/image";
import Microphone from "/public/images/mic.svg";
import { Qoute } from "@/app/globalTypes";

export default function QuoteFromUsers({
  title,
  quotes,
}: {
  title: string;
  quotes: Qoute[];
}) {
  return (
    <section className="my-12 mx-4">
      <div className="flex flex-col items-center">
        <Image src={Microphone} alt="icon" />
        <h3 className="font-bold text-2xl text-gray4 mt-4 mb-7">{title}</h3>
      </div>
      <SwiperComponent
        slides={quotes.map((quote, index) => (
          <div key={index}>
            <div className="swiperComponentHeader text-center flex flex-col">
              <h3 className="font-bold text-center text-2xl">
                {quote.userName}
              </h3>
              <span className="mb-6 mt-2">{quote.subtitle}</span>
            </div>
            <div className="text-justify">{quote.userQuote}</div>
          </div>
        ))}
      />
    </section>
  );
}
