import React, { useEffect, useState } from "react";
import Logout from "../../../assets/Menu/Logout.svg";
import useAuth from "../../../Authentication/useAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../../../Redux/slice/userSlice";
import { getAuth, signOut } from "firebase/auth";

function LogoutButton({ onClick }) {
  const { isLoggedIn } = useAuth;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // console.log(isLoggedIn);
  useEffect(() => {}, [isLoggedIn]);

  function handleLogout() {
    const logout = async () => {
      setLoading(true);
      try {
        await signOut(auth);
        setUser(null);
        localStorage.removeItem("LoggedIn");
        localStorage.removeItem("userData");
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        setLoading(false);
      }
    };

    dispatch(userLogout());
    localStorage.removeItem("LoggedIn");
    navigate("/");
    onClick();
  }
  return (
    <>
      <div
        className="text-[#F20707] flex items-center text-left  gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 py-2.5 rounded-lg h-[56px]   text-xs md:text-sm lg:text-md cursor-pointer hover:bg-red-100"
        onClick={() => {
          handleLogout();
        }}
      >
        <img
          src={Logout}
          className={` 
                sm:size-3.5  md:size-4  lg:size-5"
              }`}
        ></img>
        <h3>Logout</h3>
      </div>
    </>
  );
}

export default LogoutButton;
