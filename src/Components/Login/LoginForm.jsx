import React, { useState } from "react";
import google from "../../assets/Login/google.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../Authentication/Firebase.jsx";
import { signInWithPopup } from "firebase/auth";
import axiosInstance from "../../api/axiosInstance.js";
function LoginForm({ mobileref }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const from = location.state?.from?.pathname || "/"; // default to home

  async function handleGoogleLogin() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      if (firebaseUser) {
        setUserData(firebaseUser);
        const idToken = await result.user.getIdToken();
        await axiosInstance
          .post(
            "http://localhost:3000/api/v1/customer_users/login_google",
            {},
            {
              headers: {
                Authorization: `Bearer ${idToken}`,
              },
            }
          )
          .then((res) => {
            // console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        localStorage.setItem("LoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(firebaseUser));
        navigate(from, { replace: true });
        return { success: true, user: firebaseUser };
      }
    } catch (error) {
      console.error("Login error:", error.code, error.message);
      let message = "Login failed. Please try again.";
      if (error.code === "auth/popup-closed-by-user")
        message = "Login canceled by user.";
      else if (error.code === "auth/network-request-failed")
        message = "Network error, please check connection.";
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col gap-8  ">
      <div className="flex flex-col justify-center gap-3">
        <div className="flex   gap-3">
          <select class="  rounded  text-xs text-center   h-10 w-14   border-[1px] border-[#b2b2b2] text-N5 ">
            <option value="+91">+91</option>
            <option value="+81">+81</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
          </select>

          <input
            placeholder="Enter Phone Number"
            className="border-1 px-2 py-4 rounded-sm font-normal text-xs text-N5 outline-none cursor-pointer border-[#b2b2b2]  min-w-[210px] h-10"
            ref={mobileref}
            maxLength={10}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/\D/g, "");
            }}
          />
        </div>
        <div className="flex gap-1 items-center ">
          <input
            type="checkbox"
            className=" rounded-sm size-4 border-[#b2b2b2] text-N5 outline-none"
          />
          <span className="font-normal text-xs  text-[#626262]">
            Send me Update on whatsapp
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 ">
        <hr className=" w-full text-[#b2b2b2] "></hr>
        <span className="text-[#b2b2b2]">Or</span>
        <hr className="text-[#b2b2b2] w-full "></hr>
      </div>
      <div className="text-center flex flex-col gap-3">
        <div
          className="flex justify-center gap-2.5 items-center border-[1px] border-primary rounded-sm p-1.5 md:p-2.5 cursor-pointer"
          onClick={() => {
            handleGoogleLogin();
          }}
        >
          <img className="cursor-pointer size-7 " src={google}></img>
          <p className="text-primary font-semibold text-xs md:text-sm lg:text-base">
            Sign up with Google
          </p>
        </div>
        {/* link to signUp component */}
        {/* <p className="text-xs cursor-pointer">
          New User ?
          <span
            className="text-primary font-semibold"
            onClick={() => {
              navigate("/signup");
            }}
          >
            {" "}
            signUp ?
          </span>
        </p> */}
      </div>
    </div>
  );
}

export default LoginForm;
