import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import RentOrLease from "./Components/Rent/Rent";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import Profile from "./Components/Profile/MyProfile/Profile";
import Lease from "./Components/Lease/Lease";
import Booking from "./Components/Body/Booking/Booking";
import Host from "./Components/Host/Host";
import PaymentDetails from "./Components/Payment/PaymentDetails/PaymentDetails";
import CarDetailPage from "./Components/Rent/CarDetailPage/CarDetailPage";
import MyOngoingTrip from "./Components/Profile/MyTrips/MyOngoingTrip";
import FilterCarList from "./Components/Rent/FilterCarList/FilterCarList";
import Offer from "./Components/Body/Offer/Offer";
import ExclusiveOffers from "./Components/Rent/ExclusiveOffers/ExclusiveOffers";
import HomeCars from "./Components/Rent/HomeCars/HomeCar";
import SignUpForm from "./Components/Login/SignUpForm";
import OTPform from "./Components/Login/OTPform";
import HomePage from "./Pages/Home/HomePage";
import HostPage from "./Pages/HostPage/HostPage";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={AppRoutes} />
      </Provider>
      {/* <CarDetailPage /> */}
    </>
  );
}

export default App;

{
  /* <Header /> */
}
{
  /* <RentOrLease /> */
}
{
  /* <Body /> */
}
{
  /* <Header />
      <Body />
      <Payment /> */
}
{
  /* <PaymentDetails />
      <Profile />
      <Lease />
      <Booking id={0} />
      <Host />
      <CarDetailPage />
      <MyOngoingTrip />
      <FilterCarList /> */
}
{
  /* <CarDetailPage />
      <Profile /> */
}
{
  /* <Login /> */
}
{
  /* <OTPform /> */
}
{
  /* <SignUpForm /> */
}
{
  /* <CarDetailPage /> */
}
{
  /* <Payment /> */
}
{
  /* <Profile /> */
}
{
  /* <PaymentDetails /> */
}
{
  /* <Host /> */
}
{
  /* <Footer /> */
}
{
  /* <FilterCarList /> */
}
{
  /* <HomePage /> */
}
{
  /* <HostPage /> */
}
