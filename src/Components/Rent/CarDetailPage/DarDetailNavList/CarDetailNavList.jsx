import React from "react";

function CarDetailNavList({ navItem, id, setActiveTab, activeTab }) {
  // console.log(activeTab, id);
  return (
    <div
      id={id}
      className={`text-nowrap sm:text-sm  text-xs p-1  md:p-2  px-3 py-2  cursor-pointer 
                    ${
                      activeTab == id
                        ? " font-semibold border-b-2 "
                        : "text-gray-500"
                    }   
                        `}
      onClick={() => {
        setActiveTab(id);
      }}
    >
      {navItem?.name}
    </div>
  );
}

export default CarDetailNavList;
