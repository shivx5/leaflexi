import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Login from "../../Components/Login/Login";
import HostPage from "../../Pages/HostPage/HostPage";
import HomePage from "../../Pages/Home/HomePage";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import HostRoute from "../HostRoute/HostRoute";
import CarDetailPage from "../../Components/Rent/CarDetailPage/CarDetailPage";
import FilterCarList from "../../Components/Rent/FilterCarList/FilterCarList";
import Profile from "../../Components/Profile/MyProfile/Profile";
import PaymentDetails from "../../Components/Payment/PaymentDetails/PaymentDetails";
import LocationNav from "../../Components/Rent/CarDetailPage/CarDetailNav/LocationNav";
import RatingNav from "../../Components/Rent/CarDetailPage/CarDetailNav/RatingNav";
import CancellationNav from "../../Components/Rent/CarDetailPage/CarDetailNav/CancellationNav";
import FAQNav from "../../Components/Rent/CarDetailPage/CarDetailNav/FAQNav";
import ConditionNav from "../../Components/Rent/CarDetailPage/CarDetailNav/ConditionNav";
import MyTrips from "../../Components/Profile/MyTrips/MyTrips";
import SavedCars from "../../Components/Profile/SavedCars/SavedCars";
import Support from "../../Components/Profile/Support/Support";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "availablecars",
        element: <FilterCarList />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        ),
        children: [
          { path: "", element: <Navigate to="mytrips" replace /> },
          { path: "mytrips", element: <MyTrips /> },
          { path: "savedcars", element: <SavedCars /> },
          { path: "support", element: <Support /> },
        ],
      },
      {
        path: "car/:id",
        element: <CarDetailPage />,
        children: [
          { path: "", element: <Navigate to="location" replace /> },
          { path: "location", element: <LocationNav type="trip" /> },
          { path: "ratings", element: <RatingNav /> },
          { path: "cancel", element: <CancellationNav /> },
          { path: "faq", element: <FAQNav from="carDetail" /> },
          { path: "terms&con", element: <ConditionNav /> },
        ],
      },
      {
        path: "payment",
        element: (
          <ProtectedRoutes>
            <PaymentDetails />
          </ProtectedRoutes>
        ),
      },
      {
        path: "host",
        element: <HostPage />,
      },
    ],
  },
  ,
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Login />,
  },
]);

// const AppRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         element: <ProtectedRoutes />,
//         children: [
//           {
//             index: true,
//             element: <HomePage />,
//           },
//           {
//             path: "availablecars",
//             element: <FilterCarList />,
//           },
//           {
//             path: "profile",
//             element: <Profile />,
//           },
//           {
//             path: "car:id",
//             element: <CarDetailPage />,
//           },
//         ],
//       },
//       {
//         element: <HostRoute />,
//         children: [
//           {
//             path: "host",
//             element: <HostPage />,
//           },
//         ],
//       },
//     ],
//   },
//   ,
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "*",
//     element: <Login />,
//   },
// ]);
export default AppRoutes;
