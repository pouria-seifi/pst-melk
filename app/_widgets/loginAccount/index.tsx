import React, { useState } from "react";
import LoginPhoneNumber from "./loginPhoneNumber";
import EnterCode from "./enterCode";

export default function LoginAccount({
  toggleModal,
}: {
  toggleModal: Function;
}) {
  const [showLoginPhoneNumber, setShowLoginPhoneNumber] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <section className="mt-11">
      {showLoginPhoneNumber ? (
        <LoginPhoneNumber
          toggleModal={toggleModal}
          goToEnterCode={() => {
            setShowLoginPhoneNumber(false);
          }}
          setPhoneNumber={setPhoneNumber}
        />
      ) : (
        <EnterCode
          goToLoginPhoneNumber={() => {
            setShowLoginPhoneNumber(true);
          }}
          phoneNumber={phoneNumber}
        />
      )}
    </section>
  );
}
