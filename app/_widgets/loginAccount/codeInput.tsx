import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

const PinCodeInput = ({
  hasError,
  pin,
  setPin,
}: {
  hasError: boolean;
  pin: string;
  setPin: Function;
}) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    setPin((prevPin: string) => {
      const newPin = prevPin.split("");
      newPin[index] = value;

      return newPin.join("");
    });

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleInputKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && index > 0) {
      // If the current input is empty, move focus to the previous input
      if (!pin[index]) {
        inputRefs.current[index - 1]?.focus();
      } else {
        // If the current input is not empty, clear the current input
        setPin((prevPin: string) => {
          const newPin = prevPin.split("");
          newPin[index] = "";
          return newPin.join("");
        });
      }
    }
  };

  return (
    <div dir="ltr" className="grid grid-cols-5 gap-6">
      {Array.from({ length: 5 }, (_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="number"
          className={`w-100 h-12 text-center bg-gray1 rounded-md ${
            hasError ? "border-red border-solid border-1" : ""
          }`}
          maxLength={1}
          value={pin[index] || ""}
          onChange={(event) => handleInputChange(index, event)}
          onKeyDown={(event) => handleInputKeyDown(index, event)}
        />
      ))}
    </div>
  );
};

export default PinCodeInput;
