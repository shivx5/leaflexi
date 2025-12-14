import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CarDetail from "./Components/Rent/HomeCars/CarDetail.jsx";
import CarDetailPage from "./Components/Rent/CarDetailPage/CarDetailPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <CarDetailPage /> */}
  </StrictMode>
);
