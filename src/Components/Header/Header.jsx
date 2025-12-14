import React, { useEffect, useRef, useState } from "react";
import AppLogo from "../../assets/App.svg";
import ProfilePic from "../../assets/Profile.png";
import MenuIcon from "../../assets/MenuIcon.png";
import "./HeaderCss.css";
import MenuButtons from "../../CustButton/MenuButtons";
import MenuButtonList from "../../Utility/MenuButtonList";
import close from "../../assets/Menu/close.svg";
import LoginButton from "./LoginButton/LoginButton";
import { Link, useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton/LogoutButton";
import useAuth from "../../Authentication/useAuth";

function Header() {
  const [enableMenu, setEnableMenu] = useState(false);
  const menuRef = useRef(null);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  // console.log(isLoggedIn);
  function toggleMenuButton() {
    setEnableMenu((prev) => !prev);
  }

  // Lock scroll on menu open
  useEffect(() => {
    document.body.style.overflow = enableMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [enableMenu]);

  const checkLoggedInNav = (loggedin) => {
    if (loggedin !== isLoggedIn) {
      console.log(loggedin, isLoggedIn);
      // navigate("/login");
    } else return;
  };
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setEnableMenu(false);
      }
    };

    if (enableMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [enableMenu]);

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 h-[5.75rem] font-medium text-xs md:text-sm lg:text-base w-full z-30">
      <img
        className="h-[38.86px] w-[137.57px] cursor-pointer"
        src={AppLogo}
        alt="App Logo"
        onClick={() => navigate("/")}
      />

      <div className="flex items-center list-none sm:gap-3 md:gap-6">
        <Link
          className="hidden sm:flex cursor-pointer p-2.5 text-primary"
          to="/"
          onClick={() => setEnableMenu(false)}
        >
          Car Lease
        </Link>
        <Link
          className="hidden sm:flex cursor-pointer p-2.5 text-primary"
          to="/"
          onClick={() => setEnableMenu(false)}
        >
          Car Rent
        </Link>
        <Link to="/host" onClick={() => setEnableMenu(false)}>
          <button className="hidden sm:flex items-center justify-center bg-transparent border-2 rounded-md text-primary hover:cursor-pointer sm:px-2 sm:py-1.5 md:px-2.5 md:py-2 lg:px-3 lg:py-2.5 border-primary">
            Become a Host
          </button>
        </Link>

        <LoginButton loginorNot={isLoggedIn} fromMenu={true} />

        <button
          onClick={toggleMenuButton}
          aria-label="Open menu"
          className="ml-3"
        >
          <img className="h-4 cursor-pointer" src={MenuIcon} alt="Menu Icon" />
        </button>
      </div>

      {/* Menu Drawer and Backdrop */}
      <div className="fixed inset-0 z-40 flex pointer-events-none">
        {/* Background overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            enableMenu ? "opacity-50 pointer-events-auto" : "opacity-0"
          }`}
        ></div>

        {/* Slide-in menu */}
        <div
          ref={menuRef}
          className={`relative ml-auto bg-white h-full overflow-y-auto no-scrollbar sm:w-64 md:w-72 lg:w-80 p-4 flex flex-col gap-2 sm:gap-3 md:gap-4 z-50 transform transition-transform duration-500 ease-out ${
            enableMenu
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full"
          }`}
        >
          <div className="flex justify-between px-4 items-start">
            <LoginButton
              loginorNot={isLoggedIn}
              onClick={() => setEnableMenu(false)}
            />
            <button
              onClick={toggleMenuButton}
              aria-label="Close menu"
              className="cursor-pointer"
            >
              <img src={close} alt="Close Icon" />
            </button>
          </div>

          {/* Menu buttons with close handler */}
          {MenuButtonList()
            ?.filter((item) => item?.display)
            .map((item, value) => (
              <Link to={`/${item?.gotoLink}`} key={item.id}>
                {" "}
                <MenuButtons
                  key={item.id}
                  data={item}
                  onClick={() => setEnableMenu(false)}
                />
              </Link>
            ))}

          {isLoggedIn && <LogoutButton onClick={() => setEnableMenu(false)} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
