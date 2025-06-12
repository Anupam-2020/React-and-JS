import React, { useEffect, useRef, useState } from "react";
import "./otp.css";

const OTP = ({ otpLength = 4 }) => {
  const [otpInput, setOtpInput] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  const handleInput = (e, index) => {
    let key = e.key;
    console.log(key);

    if (!isNaN(key)) {
      let updatedOtp = [...otpInput];
      updatedOtp[index] = e.key;
      setOtpInput(updatedOtp);
      if (index < otpLength - 1) {
        ref.current[index + 1].focus();
      }
      return;
    }

    if (key === "ArrowLeft") {
      if (index > 0) {
        let prevInput = ref.current[index - 1]
        prevInput.focus();
        prevInput.setSelectionRange(1,2);
      }
      return;
    }

    if (key === "ArrowRight" && index < otpLength - 1) {
      ref.current[index + 1].focus();
      return;
    }

    if (key === "Backspace") {
      let updatedOtp = [...otpInput];
      updatedOtp[index] = "";
      setOtpInput(updatedOtp);
      if (index > 0) {
        ref.current[index - 1].focus();
      } else {
        ref.current[index].focus();
      }
      return;
    }
  };

  useEffect(() => {
    ref.current["0"].focus();
  }, []);

  return (
    <>
      {otpInput.map((otp, index) => {
        return (
          <input
            className="input"
            key={index}
            ref={(currentInput) => (ref.current[index] = currentInput)}
            type="password"
            value={otp}
            onKeyDown={(e) => handleInput(e, index)}
          />
        );
      })}
    </>
  );
};

export default OTP;