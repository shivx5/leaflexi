import React, { useEffect, useState } from "react";

function FooterList({ value }) {
  //   console.log(value);
  const [enableNav, setEnableNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // sm = 640px

  const { name, data } = value;
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (!mobile) {
        setEnableNav(true); // Always show on desktop
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log(data);
  return (
    <div className=" ">
      <div className="flex  justify-between items-center">
        <div className=" md:p-2 pb-2  lg:p-3 font-medium text-base text-[#ffffff]">
          {name}
        </div>
        <span
          className="font-bold min-[450px]:hidden"
          onClick={() => {
            setEnableNav(!enableNav);
          }}
        >
          {!enableNav ? "+" : "-"}
        </span>
      </div>
      {enableNav && (
        <div className="flex flex-col gap-1 lg:gap-2 text-[#b9b9b9]">
          {data.map((value, key) => {
            return (
              <div key={value?.id}>
                <span className=" md:p-1.5  lg:p-2.5   text-sm  ">
                  {value?.name}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FooterList;
