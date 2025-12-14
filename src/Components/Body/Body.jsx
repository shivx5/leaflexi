import React from "react";
import Offer from "./Offer/Offer";
import Booking from "./Booking/Booking";
import FAQ from "./FAQ/FAQ";
import AffordableCars from "../Rent/HomeCars/HomeCar.jsx";
import HostCard from "../HostCard/HostCard.jsx";
import HostCardList from "../../Utility/HostCardList.js";
import Community from "./Community/Community.jsx";
import Footer from "../Footer/Footer.jsx";
import RentOrLease from "../Rent/Rent.jsx";
import FilterCarList from "../Rent/FilterCarList/FilterCarList.jsx";
import CarDetailPage from "../Rent/CarDetailPage/CarDetailPage.jsx";
import Support from "../Profile/Support/Support.jsx";
import Profile from "../Profile/MyProfile/Profile.jsx";
import AffordableCar from "../Rent/AffordableCar/AffordableCar.jsx";
import Leaflexi from "../Rent/Leaflexi/Leaflexi.jsx";
import Blogs from "../Rent/Blogs/Blogs.jsx";
import Guide from "../Rent/Guide/Guide.jsx";
import Header from "../Header/Header.jsx";
import HomeCars from "../Rent/HomeCars/HomeCar.jsx";
import ExclusiveOffers from "../Rent/ExclusiveOffers/ExclusiveOffers.jsx";
function Body() {
  return (
    <div>
      <RentOrLease />
      {/* <AffordableCars /> */}
      {/* <Question data={QueContact[0]} /> */}
      {/* <RentOrLease /> */}
      <HomeCars />
      <Leaflexi />
      <Booking id={0} />
      <HostCard data={HostCardList[2]} />
      <AffordableCar />
      <ExclusiveOffers />
      <Guide />
      <Blogs />
      <FAQ />
      <Community />

      {/* <Offer /> */}
      {/* <Question data={QueContact[1]} /> */}
    </div>
  );
}

export default Body;
