import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OTPform from "./OTPform";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { userLogin, userLogout } from "../../Redux/slice/userSlice";
import axios from "axios";

function Login() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mobileref = useRef(null);
  const mobileNumber = mobileref.current?.value;
  function handleLogin(e) {
    // if (!clicked)
    e.preventDefault();
    const mobileNumber = mobileref.current.value;

    if (!/^\d{10}$/.test(mobileNumber)) {
      alert("Enter a valid 10-digit number");
      return;
    }
    console.log(mobileNumber);
    if (mobileNumber == 9999999999) {
      // todo mobile number verification
      setClicked(true);
    } else {
      alert("Enter valid mobile number ");
      mobileref.current.value = null;
    }
    // } else handleOTPSubmit();
  }
  function handleOTPSubmit() {
    // after verification
    // const isLoggedIn = ;

    // axios
    //   .post(`https://api.example.com/users/${id}/posts`, {
    //     title: "My first post",
    //     body: "Hello world!",
    //   })
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.error(err));

    // ✅ Simulate login
    // localStorage.setItem("isLoggedIn", "true"); // ✅ must be string
    // localStorage.setItem("role", "host"); // or "user"

    // const role = localStorage.getItem("role");
    // const isLoggedIn = localStorage.getItem("isLoggedIn");
    // ✅ Redirect based on role
    if (isLoggedIn === "false") {
      // localStorage.removeItem("isLoggedIn");
      // localStorage.removeItem("role");
      navigate("/login");
      window.location.reload();
    }
    // if (role === "host") {
    //   navigate("/host", { replace: true });
    // } else {
    //   navigate("/", { replace: true });
    // }
    if (isLoggedIn) {
      navigate("/");
      window.location.reload();
    }
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center rounded-2xl w-full md:w-[70%] m-auto bg-transparent ">
      <form className="flex flex-col p-12 gap-10 sm:gap-12 md:gap-14 lg:gap-16 justify-center items-center z-50 rounded-lg ">
        <div className="flex flex-col text-center justify-center gap-3 md:gap-3.5 lg:gap-4  ">
          <div className="p-2.5 font-bold text-xl">
            {!clicked ? "Login/Signup" : "Verify Phone Number"}
          </div>
          <p className="font-normal text-xs md:text-sm text-[#646464] ">
            {clicked ? (
              <>
                We sent OTP to your phone number{" "}
                <Link to="/login">
                  <span className="cursor-pointer underline text-N3">
                    {mobileNumber}
                  </span>
                </Link>
              </>
            ) : (
              "Enter your mobile number to continue booking and start your journey with us"
            )}
          </p>
        </div>

        {!clicked ? <LoginForm mobileref={mobileref} /> : <OTPform />}

        {!clicked && (
          <div className="flex flex-col gap-2 lg:gap-3 justify-center items-center  ">
            <button
              className="bg-primary rounded-md md:rounded-lg p-2.5 cursor-pointer text-center font-semibold text-base text-N12 w-[17rem]"
              onClick={(event) => {
                handleLogin(event);
              }}
            >
              Continue
            </button>

            {!clicked && (
              <p className="text-[10px] text-center text-[#666666] w-[80%]">
                By continuing you agree to our{" "}
                <span className="underline cursor-pointer">
                  Terms of Services and Privacy Policy
                </span>
              </p>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
