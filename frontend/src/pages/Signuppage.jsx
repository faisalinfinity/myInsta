import { useEffect, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";

const Signuppage = () => {
  const [disable, setDisable] = useState(true);
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

  useEffect(() => {
    if (password.length && username.length) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [password, username]);

  return (
    <div className="border h-screen w-full  flex flex-row  bg-white items-center justify-center">
      <div className="flex flex-col justify-center bg-white items-center gap-5  sm:w-1/2 lg:w-1/4 ">
        <div className="border border-gray-300 h-full w-full flex flex-col justify-center gap-3 items-center p-4">
          <img
            className="w-3/6"
            src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
            alt=""
          />
          <p className="w-4/5 text-center">
            Sign up to see photos and videos from your friends.
          </p>
          <button className="flex w-4/5 bg-insta-blue text-white justify-center items-center p-2 rounded-md gap-2">
            <FaFacebookSquare />
            <p className="font-semibold  cursor-pointer text-center">
              Log in with Facebook
            </p>
          </button>
          <div className="flex w-full justify-center items-center gap-2">
            <hr className="w-1/4" /> OR <hr className="w-1/4" />
          </div>
          <input
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Email"
            className="border h-10 w-4/5 placeholder-center text-center"
            type="text"
          />
          <input
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Full Name"
            className="border h-10 w-4/5 placeholder-center text-center"
            type="text"
          />
          <input
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Username"
            className="border h-10 w-4/5 placeholder-center text-center"
            type="text"
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
            className="border h-10 w-4/5 placeholder-center text-center "
            type="password"
          />
          <p className="text-xs w-4/5">
            People who use our service may have uploaded your contact
            information to Instagram
          </p>
          <p className="text-xs w-4/5">
            By signing up, you agree to our <a href="#">Terms </a>,{" "}
            <a href="#"> Privacy Policy</a> and <a href="#"> Cookies Policy</a>.
          </p>
          <button
            disabled={disable}
            className="border h-10 w-4/5 bg-blue-500 text-white font-bold rounded-md py-px disabled:bg-gray-200  hover:bg-insta-blue "
          >
            Sign up
          </button>
        </div>
        <div className="border border-gray-300 p-4 w-full flex flex-col justify-center gap-3 items-center ">
          <p>
            Have an account?{" "}
            <span className="text-insta-blue font-semibold cursor-pointer">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
