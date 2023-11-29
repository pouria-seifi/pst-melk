import Button from "@/app/_components/button/button";
import { number, phoneNumberRegex } from "@/app/_utility/regex";
import React, { useState } from "react";

export default function LoginPhoneNumber({
  toggleModal,
  goToEnterCode,
  setPhoneNumber,
  phoneNumber,
}: {
  toggleModal: Function;
  goToEnterCode: Function;
  setPhoneNumber: Function;
  phoneNumber: string;
}) {
  const [showError, setShowError] = useState(false);
  const [disabledConfirmationButton, setDisabledConfirmationButton] =
    useState(true);

  return (
    <section className="flex flex-col">
      <span className="text-secondary font-bold text-sm">
        شماره موبایل خود را وارد کنید
      </span>
      <span className="text-gray3 font-medium text-xs mt-2">
        کد تأیید به این شماره پیامک خواهد شد.
      </span>
      <div className="flex flex-col relative mt-4">
        <input
          dir="ltr"
          className={`bg-gray1 w-full h-12 rounded-md pl-20 pr-4 text-left placeholder:text-right  ${
            showError ? "border-red border-1 border-solid" : ""
          }`}
          placeholder="شماره موبایل"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            if (!number.test(e.target.value)) {
              setPhoneNumber(phoneNumber.replaceAll(e.target.value, ""));
              // setShowError(true);
              // setDisabledConfirmationButton(true);
              return;
            }
            if (phoneNumberRegex.test(e.target.value)) {
              setShowError(false);
              setDisabledConfirmationButton(false);
              setPhoneNumber(e.target.value);
              return;
            }
            if (
              !phoneNumberRegex.test(e.target.value) &&
              e.target.value.length > 9
            ) {
              setShowError(true);
              setDisabledConfirmationButton(true);
              return;
            }
            setShowError(false);
            setDisabledConfirmationButton(true);
          }}
          maxLength={11}
        />
        <div className="flex bg-secondary absolute left-2 top-1 rounded-md w-14 h-10 text-white">
          <span dir="ltr" className="m-auto">
            +۹۸
          </span>
        </div>
      </div>
      <div className="text-red font-light text-sm mt-2 h-6">
        <span className="min-h-full">
          {showError ? "شماره موبایل صحیح نمی باشد" : null}
        </span>
      </div>
      <span className="text-secondary text-base font-normal mt-8">
        شرایط استفاده از خدمات و جریم خصوصی پست ملک را می پذیرم
      </span>
      <div className="grid grid-cols-2 gap-5 justify-between mt-7">
        <Button
          onClick={() => {
            toggleModal();
          }}
          type="thirdinary"
          className="h-12"
        >
          بستن
        </Button>
        <Button
          disabled={disabledConfirmationButton}
          onClick={() => {
            goToEnterCode();
          }}
          type="quaterdinary"
          className="h-12 disabled:bg-gray3 disabled:border-gray3"
        >
          تایید
        </Button>
      </div>
    </section>
  );
}
