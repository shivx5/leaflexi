const FilterList = [
  {
    id: 1,
    name: "Delivery type",
    type: "checkbox",
    list: [
      {
        listId: 1,
        title: "Home delivery",
        desc: "Extra charge will be added for this",
      },
    ],
  },
  {
    id: 2,
    name: "price",
    type: "range",
    values: {
      min: 200,
      max: 499,
    },
  },
  {
    id: 3,
    name: "Car type",
    type: "checkbox",
    list: [
      {
        listId: 1,
        title: "Home delivery",
      },

      {
        listId: 2,
        title: "SUV",
      },
      {
        listId: 3,
        title: "Hatchback",
      },
    ],
  },
  {
    id: 4,
    name: "Vehicle type",
    type: "checkbox",
    list: [
      { listId: 1, title: "Manual" },
      { listId: 2, title: "Automatic" },
    ],
  },
  {
    id: 5,
    name: "Fuel type",
    type: "checkbox",
    list: [
      { listId: 1, title: "Petrol" },
      { listId: 2, title: "Diesel" },
      { listId: 2, title: "Electric" },
    ],
  },
  {
    id: 6,
    name: "Model year",
    type: "range",
    values: {
      min: 2000,
      max: 2024,
    },
  },
  {
    id: 7,
    name: "Seat type",
    type: "checkbox",
    list: [
      { listId: 1, title: "Petrol" },
      { listId: 2, title: "Diesel" },
      { listId: 2, title: "Electric" },
    ],
  },
];
export default FilterList;
