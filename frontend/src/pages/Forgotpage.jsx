import { useEffect, useRef, useState } from "react";

import lock from "../assets/lock.png";

const Forgotpage = () => {
  const [disable, setDisable] = useState(true);
  const [email, setemail] = useState("");
  const [enteredOTP, setEnteredOTP] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [genOTP, setgenOTP] = useState("");
  const sendRef = useRef();
  const intervalRef = useRef(null);

  function generateRandom() {
    let num = "";

    for (let i = 1; i <= 6; i++) {
      num += Math.floor(Math.random() * 9);
    }
    setgenOTP(num);
  }

  const handleSend = () => {
    generateRandom();
    setDisable(true);
    setIsSent(true);
    let sec = 10;
    intervalRef.current = setInterval(() => {
      sendRef.current.innerText = `Resend after ${Math.floor(sec / 60)}:${
        sec % 60
      }`;
      sec--;
      if (sec == -1) {
        setDisable(false);
        sendRef.current.innerText = "Resend OTP";
        clearInterval(intervalRef.current);
      }
    }, 1000);
  };

  const handleVerify = () => {
    if (enteredOTP == genOTP) {
      alert("Correct");
    }
  };

  useEffect(() => {
    sendRef.current.innerText = "Send Code";
    setIsSent(() => false);
    if (email.includes("@") && !isSent) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [email]);

  return (
    <div className="border h-screen w-full  flex flex-row  bg-white items-center justify-center gap-5">
      <div className="sm:w-1/3 md:w-1/2 lg:w-1/4  flex flex-col justify-center bg-white items-center gap-5 p-4">
        <div className="border border-gray-300 h-full w-full flex flex-col justify-center gap-3 items-center p-4">
          <img className="w-3/5" src={lock} alt="" />
          <p className="font-semibold text-center">Trouble logging in?</p>
          <p className=" text-xs text-gray-500 text-center w-10/12">
            Enter your email and we will send you a OTP to get back into your
            account.
          </p>
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="Enter email "
            className="border h-10 w-10/12 placeholder-center text-center"
            type="text"
          />

          {isSent && (
            <input
              maxLength={6}
              type="text"
              value={enteredOTP}
              onChange={(e) => {
                if (!isNaN(e.target.value))
                  setEnteredOTP(e.target.value.trim());
              }}
              placeholder={`Enter OTP sent to ${email}`}
              className="border h-10 w-10/12 placeholder-center text-center"
            />
          )}

          <button
            onClick={handleSend}
            ref={sendRef}
            disabled={disable}
            className="border h-10 w-10/12 bg-blue-500 text-white font-bold rounded-md py-px disabled:bg-gray-200  hover:bg-insta-blue"
          >
            Send Code
          </button>
          {isSent && enteredOTP.length == 6 && (
            <button
              onClick={handleVerify}
              className="border h-10 w-10/12 bg-blue-500 text-white font-bold rounded-md py-px disabled:bg-gray-200  hover:bg-insta-blue"
            >
              Verify
            </button>
          )}
          <div className="flex w-full justify-center items-center gap-2">
            <hr className="w-1/4" /> OR <hr className="w-1/4" />
          </div>

          <p className=" cursor-pointer">Create new account?</p>
          <div className="border border-gray-300 p-2 w-full flex flex-col justify-center gap-3 items-center bg-gray-100 cursor-pointer ">
            <p className="">Back to Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpage;
