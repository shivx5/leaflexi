import React from "react";

import DefaultProfile from "../../../assets/Menu/UserCircle.svg";
import Profile from "../../../assets/Profile/profilePic.svg";
import { Link, useNavigate } from "react-router-dom";

function LoginButton({ loginorNot, fromMenu, onClick }) {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    // Close the menu when clicking the link
  };
  return (
    <>
      {!loginorNot ? (
        <Link to={"/login"}>
          <div
            className={` ${
              fromMenu ? "hidden sm:flex" : "flex"
            } cursor-pointer  items-center justify-center bg-primary rounded-md text-N12 hover:cursor-pointer sm:px-3.5 sm:py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 w-20 h-10  sm:w-24 sm:h-12`}
          >
            Login
          </div>
        </Link>
      ) : (
        <img
          src={Profile ? Profile : DefaultProfile}
          className={` cursor-pointer size-10 ${
            fromMenu && " hidden sm:block"
          } `}
          onClick={() => {
            navigate("/profile");
            handleLinkClick();
          }}
        />
      )}
    </>
  );
}

export default LoginButton;
