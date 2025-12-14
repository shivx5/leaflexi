import solarMoney from "../assets/Menu/solarmoney.svg";
import UserCircle from "../assets/Menu/UserCircle.svg";
import File from "../assets/Menu/File.svg";
import Help from "../assets/Menu/Help.svg";
import info from "../assets/Menu/info.svg";
import Policy from "../assets/Menu/Policy.svg";
import Heart from "../assets/Menu/Heart.svg";
import BlackArrow from "../assets/Menu/BlackArrow.svg";
import useAuth from "../Authentication/useAuth";
const MenuButtonList = () => {
  const { isLoggedIn } = useAuth();

  return [
    {
      id: 1,
      name: "Refer and earn",
      icon: solarMoney,
      gotoLink: "",
      display: true,
    },
    {
      id: 2,
      name: "My trips",
      icon: File,
      gotoLink: "profile",
      display: isLoggedIn ? true : false,
    },
    {
      id: 3,
      name: "Favorite cars",
      icon: Heart,
      gotoLink: "profile/savedcars",
      display: isLoggedIn ? true : false,
    },
    {
      id: 4,
      name: "Become a Host",
      icon: BlackArrow,
      type: "host",
      gotoLink: "host",
      display: true,
    },
    { id: 5, name: "Host Policies", icon: Policy, gotoLink: "", display: true },
    {
      id: 6,
      name: "Terms and condition",
      icon: info,
      gotoLink: "",
      display: true,
    },
    { id: 7, name: "About Us", icon: Help, display: true },
  ];
};
export default MenuButtonList;
