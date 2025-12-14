import React from "react";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center gap-4 flex-col">
        <form className="flex flex-col gap-4 text-xs">
          <div className="flex flex-col  w-[17rem] gap-2">
            <label className="font-normal  text-black">Name</label>
            <input
              type="text"
              placeholder="eg : Example"
              className="  border-[1px] border-N9 py-2 px-2 outline-none rounded-md text-N5"
            />
          </div>
          <div className="flex flex-col  w-[17rem] gap-2">
            <label className="font-normal  text-black">Email ID</label>
            <input
              placeholder="siva@gmail.com"
              type="email"
              className="border-[1px] border-N9 py-2 px-2 outline-none rounded-md text-N5"
            />
          </div>
          <div className="flex flex-col  w-[17rem] gap-2">
            <label className="font-normal  text-black">Mobile Number</label>
            <input
              type="number"
              placeholder="9876543789"
              className="border-[1px] border-N9 py-2 px-2 outline-none rounded-md text-N5"
            />
          </div>
        </form>
        <SubmitButton />
        <p className="text-xs cursor-pointer">
          Already Logged In ?
          <span
            className="text-primary font-semibold"
            onClick={() => {
              navigate("/login");
            }}
          >
            {" "}
            Login ?
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
