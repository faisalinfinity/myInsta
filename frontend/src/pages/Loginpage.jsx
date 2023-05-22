import { useEffect, useRef, useState } from "react";
import iphone1 from "../assets/iphone.png";
import iphone2 from "../assets/iphone-2.png";

const Loginpage = () => {
  const [disable, setDisable] = useState(true);
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const imageRef = useRef();

  useEffect(() => {
    if (password.length && username.length) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [password, username]);

  useEffect(() => {
    let i = 1;
    let arr = [iphone1, iphone2];
    const id = setInterval(() => {
      imageRef.current.src = arr[i];
      i++;
      if (i == 2) {
        i = 0;
      }
    }, 2500);

    return () => clearInterval(id);
  }, []);
  return (
    <div className="border h-screen w-full  flex flex-row  bg-white items-center justify-center gap-5">
      <div className="hidden lg:block">
        <img className="max-w-2xl min-w-2xl" ref={imageRef} alt="" />
      </div>
      <div className="sm:w-1/3 md:w-1/2 lg:w-1/4  flex flex-col justify-center bg-white items-center gap-5 p-4">
        <div className="border border-gray-300 h-full w-full flex flex-col justify-center gap-3 items-center p-4">
          <img
            className="w-3/5"
            src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
            alt=""
          />
          <input
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Username or email"
            className="border h-10 w-3/5 placeholder-center text-center"
            type="text"
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
            className="border h-10 w-3/5 placeholder-center text-center "
            type="password"
          />
          <button
            disabled={disable}
            className="border h-10 w-3/5 bg-blue-500 text-white font-bold rounded-md py-px disabled:bg-gray-200  hover:bg-insta-blue "
          >
            Login
          </button>

          <div className="flex w-full justify-center items-center gap-2">
            <hr className="w-1/4" /> OR <hr className="w-1/4" />
          </div>
          <div className="flex  justify-center items-center">
            <img
              className="w-6"
              src="https://revolvingcompass.com/wp/wp-content/uploads/2017/06/facebook-icon-preview-1-400x400.png"
              alt=""
            />
            <p className="text-[#465993] font-semibold  cursor-pointer">Log in with Facebook</p>
          </div>
          <p className=" cursor-pointer">Forgot password?</p>
        </div>
        <div className="border border-gray-300 p-4 w-full flex flex-col justify-center gap-3 items-center ">
          <p>
            Dont have an account?{" "}
            <span className="text-insta-blue font-semibold cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
