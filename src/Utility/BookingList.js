import BookingImg from "../assets/Booking/booking.svg";
import Browse from "../assets/Booking/browse.svg";
import Delivery from "../assets/Booking/delivery.svg";
import Drive from "../assets/Booking/drive.svg";
import Instant from "../assets/Booking/instant.svg";

const BookingList = [
  {
    id: 0,
    type: "rent",
    style: "md:grid-cols-3 lg:grid-cols-4",
    title1: "Seamless Booking in Simple Steps",
    titleIcon: BookingImg,
    title2: "4 simple steps to rent",
    para: "Flexible leasing and rental options designed to meet your personal and business needs seamlessly",
    data: [
      {
        id: 0,
        name: "Browse & Choose",
        desc: "Select your preferred car from our wide range",
        icon: Browse,
      },
      {
        id: 1,
        name: "Book Instantly",
        desc: "Pick your preferred date and confirm the rental",
        icon: Delivery,
      },
      {
        id: 2,
        name: "PickUp or Delivery",
        desc: "Get the car at your location or pick it up.",
        icon: Drive,
      },
      {
        id: 3,
        name: "Drive & Return",
        desc: "Enjoy your ride and return the car hassle-free",
        icon: Instant,
      },
    ],
  },
  {
    id: 1,
    style: "md:grid-cols-3 lg:grid-cols-4",
    type: "lease1",
    title1: "How it works",
    titleIcon: BookingImg,
    title2: "Easy way to lease a car",
    para: "Flexible leasing and rental options designed to meet your personal and business needs seamlessly",
    data: [
      {
        id: 0,
        name: "Affordable Monthly plans",
        desc: "Lower costs compared to renting",
        icon: Browse,
      },
      {
        id: 1,
        name: "Maintenance & Insurance",
        desc: "Covered for a stress-free experience",
        icon: Delivery,
      },
      {
        id: 2,
        name: "Flexible Terms",
        desc: "Lease for 1–5 years based on your needs",
        icon: Drive,
      },
      {
        id: 3,
        name: "Easy Upgrade",
        desc: "Switch to a new car at the end of your lease",
        icon: Instant,
      },
    ],
  },
  {
    id: 2,
    type: "host",
    style: "md:grid-cols-3 ",
    title1: "How it works",
    titleIcon: BookingImg,
    title2: "3 Simple ways to host",

    data: [
      {
        id: 0,
        name: "List Your Car",
        desc: "Lower costs compared to renting",
        icon: Browse,
      },
      {
        id: 1,
        name: "Accept Booking",
        desc: "Manage and approve customer requests",
        icon: Browse,
      },
      {
        id: 2,
        name: "Earn & Track",
        desc: "Receive secure payouts and track your earnings.",
        icon: Browse,
      },
    ],
  },
  {
    id: 3,
    type: "lease",
    style: " ",
    title1: "Key Benefits of Lease",
    titleIcon: BookingImg,
    title2: "What to Expect?",
    para: "Flexible leasing and rental options designed to meet your personal and business needs seamlessly",
    data: [
      {
        id: 0,
        name: "Affordable Monthly plans",
        desc: "Lower costs compared to renting",
        icon: Browse,
      },
      {
        id: 1,
        name: "Maintenance & Insurance",
        desc: "Covered for a stress-free experience",
        icon: Delivery,
      },
      {
        id: 2,
        name: "Flexible Terms",
        desc: "Lease for 1–5 years based on your needs",
        icon: Drive,
      },
      {
        id: 3,
        name: "Easy Upgrade",
        desc: "Switch to a new car at the end of your lease",
        icon: Instant,
      },
    ],
  },
  {
    id: 4,
    type: "Leaflexi",
    style: "",
    title1: "Seamless Booking in Simple Steps",
    titleIcon: BookingImg,
    title2: "4 simple steps to rent",
    para: "Flexible leasing and rental options designed to meet your personal and business needs seamlessly",
    data: [
      {
        id: 0,
        name: "Browse & Choose",
        desc: "Select your preferred car from our wide range",
        icon: Browse,
      },
      {
        id: 1,
        name: "Book Instantly",
        desc: "Pick your preferred date and confirm the rental",
        icon: Delivery,
      },
      {
        id: 2,
        name: "PickUp or Delivery",
        desc: "Get the car at your location or pick it up.",
        icon: Drive,
      },
      {
        id: 3,
        name: "Drive & Return",
        desc: "Enjoy your ride and return the car hassle-free",
        icon: Instant,
      },
      {
        id: 3,
        name: "Drive & Return",
        desc: "Enjoy your ride and return the car hassle-free",
        icon: Instant,
      },
      {
        id: 3,
        name: "Drive & Return",
        desc: "Enjoy your ride and return the car hassle-free",
        icon: Instant,
      },
    ],
  },
];
export default BookingList;
