import React from "react";
import Section1 from "./HomeSections/Section1";
import Section2 from "./HomeSections/Section2";
import Section3 from "./HomeSections/Section3";
import CarDetailPage from "../../Components/Rent/CarDetailPage/CarDetailPage";
import PaymentDetails from "../../Components/Payment/PaymentDetails/PaymentDetails";
import Login from "../../Components/Login/Login";
import DateTimePicker from "../../Components/DateTimePicker/DateTimePicker";
import ScrollToTop from "../../Routes/ScrollToTop";
import Payment from "../../Components/Payment/Payment";
function HomePage() {
  // console.log("homepage");
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}

export default HomePage;
