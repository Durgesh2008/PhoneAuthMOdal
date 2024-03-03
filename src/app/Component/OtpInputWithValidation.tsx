import React, { useRef, useState,useEffect } from 'react';

type OtpProps = {
  setcode: React.Dispatch<React.SetStateAction<string>>;
};


const OtpInputWithValidation:React.FC<OtpProps> = ({ setcode }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState("");
  const otpBoxReference = useRef([]);
  useEffect(() => { 
    let optSize = otp.join("")
    if (optSize.length === 6){
      setcode(optSize)
    }
    
  
   }, [otp]);
  function handleChange(value:any, index:any) {
    let newArr = [...otp];
  
    newArr[index] = value;
    setOtp(newArr);
    
    if(value && index < 5){
      otpBoxReference.current[index + 1].focus()
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if(e.key === "Backspace" && !e.target.value && index > 0){
      otpBoxReference.current[index - 1].focus()
    }
    if(e.key === "Enter" && e.target.value && index < 5){
      otpBoxReference.current[index + 1].focus()
    }
  }

  

  return (
    <article className="w-auto px-2 mx-auto">
     
     <div className='flex items-center gap-2'>
      {otp.map((digit, index)=>(
        <input key={index} value={digit} maxLength={1}  
        onChange={(e)=> handleChange(e.target.value, index)}
        onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
        ref={(reference) => (otpBoxReference.current[index] = reference)}
        className={`border w-12 h-auto text-white p-3 rounded-md block bg-slate-400  focus:border-2 focus:outline-none appearance-none`}
        />
      ))}

     </div>
      <p className={`text-lg text-white mt-4 ${otpError ? 'error-show' : ''}`}>{otpError}</p>
    </article>
  );
}

export default OtpInputWithValidation;