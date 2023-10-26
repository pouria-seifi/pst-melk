"use client";
import React, { useState } from "react";
import Select from "../../_components/select";
import Navigate from "@/app/_components/navigate/navigate";

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
  { label: "Option 5", value: "5" },
  { label: "Option 6", value: "6" },
  { label: "Option 7", value: "7" },
  { label: "Option 8", value: "8" },
  { label: "Option 9", value: "9" },
  // Add more options
];

export default function Header() {
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleDropdownChange = (
    selectedOption: { label: string; value: string } | null
  ) => {
    setSelectedOption(selectedOption);
  };

  const onInputChange = (input: string) => {
    if (input.length > 2) {
      setSelectedOptions(options);
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
    }
  };

  return (
    <section className="bg-header-bg-image-mobile md:bg-header-bg-image min-h-[26rem] bg-no-repeat bg-cover flex items-center justify-center py-16 mb-44 md:mb-0">
      <div className="md:bg-dots bg-no-repeat bg-[position:94%_10%] bg-50 lg:bg-60 bg-white shadow-sm rounded-3xl py-7 md:py-12 px-10 md:px-16 w-auto mx-4 -mb-80 md:mb-0">
        <div className="">
          <h3 className="text-primary text-3xl font-bold text-center">
            پست ملک
          </h3>
          <h3 className="text-3xl font-bold text-center my-2">
            سامانه حرفه‌ای املاک
          </h3>
          <span className="block text-gray4 font-medium text-sm text-center mb-5">
            انتخاب اول جستجوی املاک، با سرعت و دقت بالا
          </span>
          <Select
            menuIsOpen={isDropdownOpen}
            options={selectedOptions}
            onChange={handleDropdownChange}
            onInputChange={onInputChange}
            classname="md:min-w-[470px]"
            styles={{ height: "45px" }}
          />
          <div className="flex row mt-3">
            <Navigate href="/" type="secondary" className="ml-1 md:ml-3 w-2/4">
              املاک تهران
            </Navigate>
            <Navigate href="/" type="quaterdinary" className="w-2/4">
              ثبت آگهی ملک
            </Navigate>
          </div>
        </div>
      </div>
    </section>
  );
}
