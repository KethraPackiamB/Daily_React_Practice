import { useState, useEffect } from "react";

export const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setMessage("OTP Expired");
      setCanResend(true);
    }

    const intervalID = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [timeLeft]);

  const verifyOtp = () => {
    if (otp === "123456") {
      setMessage("Otp Verified Successfully");
      setTimeLeft(0);
    } else {
      setMessage("Invalid OTP");
      setCanResend(true);
    }
  };

  const resendOtp = () => {
    setTimeLeft(60);
    setMessage("New OTP sent");
    setOtp("");
    setCanResend(false);
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <input
        type="text"
        onChange={(e) => {
          setOtp(e.target.value);
        }}
      />
      <p>Time Left :{timeLeft}s</p>
      <p>Message : {message} </p>
      <button onClick={verifyOtp}>Verify OTP</button>
      <button onClick={resendOtp} disabled={!canResend}>
        Resend OTP
      </button>
    </div>
  );
};
