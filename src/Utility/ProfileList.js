import logout from "../assets/Menu/logout.svg";
import trip from "../assets/Menu/file.svg";
import support from "../assets/Profile/support.svg";
import saved from "../assets/Profile/trips.svg";
const ProfileList = {
  user: {
    data: [
      { id: 0, name: "My trips", icon: trip, gotoLink: "mytrips" },
      {
        id: 1,
        name: "Saved cars",
        icon: saved,
        gotoLink: "savedcars",
      },
      { id: 2, name: "Help", icon: support, gotoLink: "support" },
    ],
  },
  host: {
    data: [
      { id: 0, name: "Bookings", icon: trip },
      { id: 1, name: "My cars", icon: saved },
      { id: 2, name: "Earnings", icon: saved },
      { id: 3, name: "Rating and Reviews", icon: saved },
      { id: 4, name: "support", icon: support },
    ],
  },
};
export default ProfileList;
