import React, { useEffect, useRef, useState } from "react";
import SignUpForm from "./SignUpForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin, userLogout } from "../../Redux/slice/userSlice";

function OTPform() {
  // array value should come from backend then check the otp
  const navigate = useNavigate();
  const otpRef = useRef([]);
  const [otpVerified, setOtpVerified] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // default to home

  useEffect(() => {
    if (otpVerified === true) {
      const userData = {
        isLoggedIn: "true",
        savedCars: [1, 2, 3, 4, 5],
        booking: [1, 2, 3, 4, 5, 6],
      };
      const isLoggedIn = localStorage.setItem("LoggedIn", "true"); // ✅ must be string
      dispatch(userLogin(userData));
      navigate(from, { replace: true });
    }
    // if (isLoggedIn === "false") {
    //   // localStorage.removeItem("isLoggedIn");
    //   // localStorage.removeItem("role");
    //   navigate("/login");
    //   window.location.reload();
    // }
    // if (isLoggedIn) {
    //   navigate("/");
    //   window.location.reload();
    // }
    // get otp from backend
    // alert opt (5478)
  }, [otpVerified]);

  function handleOptForm(e) {
    e.preventDefault();
    const otp = otpRef.current
      .filter(Boolean)
      .map((input) => input.value)
      .join("");

    if (otp.length !== 4) {
      alert("OTP incomplete");
      return;
    }

    // console.log("OTP:", otp);
    // call backend here
    setOtpVerified(true);
  }
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              ref={(el) => {
                if (el) otpRef.current[i] = el;
              }}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
              className="border-[1px] border-[#CDCDCD] rounded-sm w-12 h-10 md:w-14 md:h-12 lg:w-16 lg:h-14 text-center text-xl"
            />
          ))}
        </div>

        <div className="font-normal text-xs text-N5">
          Resend OTP in 10 seconds
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button
          className="bg-primary rounded-md md:rounded-lg p-2.5 cursor-pointer text-center font-semibold text-base text-N12 w-[17rem]"
          onClick={(event) => {
            handleOptForm(event);
          }}
        >
          Continue
        </button>

        <p className="text-N2 text-xs text-center font-semibold ">
          Didn't receive OTP ?{" "}
          <span className="cursor-pointer underline">Resend again</span>
        </p>
      </div>
    </div>
  );
}

export default OTPform;
//  <SignUpForm />
