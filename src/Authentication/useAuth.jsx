import { useSelector } from "react-redux";
import { store } from "../Redux/store";

const useAuth = () => {
  const user = useSelector((state) => state.user.userData);
  const isLoggedIn = localStorage.getItem("LoggedIn");
  // console.log(user);
  // const isLoggedIn = user?.isLoggedIn;
  return {
    isLoggedIn,
    user, // default fallback
  };
};

export default useAuth;
