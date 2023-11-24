import Button from "@/app/_components/button/button";
import React, { useEffect, useState } from "react";
import PinCodeInput from "./codeInput";

export default function EnterCode({
  phoneNumber,
  goToLoginPhoneNumber,
}: {
  phoneNumber: string;
  goToLoginPhoneNumber: Function;
}) {
  const [hasError, setHasError] = useState<boolean>(false);
  const [pin, setPin] = useState<string>("");

  useEffect(() => {
    if (pin == "12345") {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [pin]);

  return (
    <section className="flex flex-col">
      <span className="text-secondary font-bold text-sm">
        کد تایید را وارد کنید
      </span>
      <span className="text-gray3 font-medium text-xs mt-2">
        کد پیامک شده به شماره {phoneNumber} را وارد کنید.
      </span>
      <div className="flex flex-col relative mt-4">
        <PinCodeInput pin={pin} setPin={setPin} hasError={hasError} />
      </div>
      <div className="flex flex-row justify-between items-center mt-4 mb-8 h-6">
        <span className="text-red font-light text-sm min-h-full">
          {hasError ? "کد وارد شده اشتباه است" : null}
        </span>
        <Button
          onClick={() => {
            goToLoginPhoneNumber();
          }}
          type="quinary"
          className="h-7 text-sm font-normal px-5"
        >
          تغییر شماره موبایل
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-5 justify-between mt-7">
        <Button
          onClick={() => {
            // toggleModal();
          }}
          type="thirdinary"
          className="h-12"
        >
          درخواست کد
        </Button>
        <Button
          // disabled={disabledConfirmationButton}
          // onClick={() => {
          //   goToEnterCode();
          // }}
          type="quaterdinary"
          className="h-12 disabled:bg-gray3 disabled:border-gray3"
        >
          ورود
        </Button>
      </div>
    </section>
  );
}
