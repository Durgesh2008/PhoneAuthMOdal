"use client";
import React, {  useState } from "react";
import { auth } from "../config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import OtpInput from "react-otp-input";
import OtpInputWithValidation from "./OtpInputWithValidation";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const PhoneAuth: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFill, setIsFill] = useState(false);
  const [code, setCode] = useState("");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha",
      {
        size: "invisible",
        callback: (response: any) => {
          console.log(response);
        },
      },
      auth
    );
  };
  const handleSendCode = () => {
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        window.confirmationResult = confirmationResult;
        setIsFill(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleVerifyCode = () => {
    console.log(code)
    if (code.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(code)
        .then((result: any) => {
          let user = result.user;
          console.log(user);
          alert("User signed in successfully");
          // ...
        })
        .catch((error: any) => {
          alert("User couldn't sign in (bad verification code?)");
        });
    }
  };

  return (
    <>
      <Box className="flex px-2 bg-slate-400 py-3 md:w-[450px] md:h-[450px] w-auto  items-center justify-center shadow-lg flex-col rounded-xl">
        <Typography
          className="text-white py-3 underline"
          variant="h5"
          component="h6"
        >
          Create Account
        </Typography>
        <Image src="/auth.png" width={200} height={200} alt="Image" />
{
  !isFill ?<>
  <PhoneInput
    className=" border-2 p-2 m-2 w-full bg-slate-400 "
    placeholder="Enter phone number"
    defaultCountry="IN"
    value={phoneNumber}
    onChange={setPhoneNumber}
  />
  <Button className="my-2 " variant="contained" onClick={handleSendCode}>
    Send Code
  </Button>
</>: <>
          <OtpInputWithValidation setcode={setCode} />
          <Button onClick={handleVerifyCode} className="my-2" variant="contained">
            Verify
          </Button>
        </>
        
}
        

      </Box>

      <Box id="recaptcha"></Box>
    </>
  );
};

export default PhoneAuth;
