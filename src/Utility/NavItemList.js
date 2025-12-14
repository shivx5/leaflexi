import hatchback from "../assets/Rent/hatchbackk.svg";
import sedan from "../assets/Rent/sedann.svg";
import suv from "../assets/Rent/suvv.svg";
import electric from "../assets/Rent/electric.svg";
import hybrid from "../assets/Rent/hybrid.svg";
import van from "../assets/Rent/van.svg";
import car1 from "../assets/CarDetail/car1.svg";
import car2 from "../assets/CarDetail/car2.svg";
import car3 from "../assets/CarDetail/car3.svg";
import car4 from "../assets/CarDetail/car4.svg";
import car5 from "../assets/CarDetail/car5.svg";

const navItems = {
  carrent: [
    { id: 0, name: "Sedan", img: sedan, activeImg: car4 },
    { id: 1, name: "Hatch", img: hatchback, activeImg: car5 },
    { id: 2, name: "Hybrid", img: hybrid, activeImg: car1 },
    { id: 3, name: "SUV", img: van, activeImg: car2 },
    { id: 4, name: "Electric", img: electric, activeImg: car3 },
  ],
};
export default navItems;
