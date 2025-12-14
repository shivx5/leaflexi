import React from "react";
import QuestionList from "../../../Utility/QuestionList";
import FAQCard from "../../Body/FAQ/FAQCard";
function Support() {
  return (
    <div className="flex flex-col gap-2 sm:gap-3  md:gap-4 lg:gap-6">
      <div className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-N3">
        Support
      </div>
      <div className="font-semibold text-N1  text-sm sm:text-base md:text-lg lg:text-xl">
        FAQ's
      </div>
      <div className="flex flex-col gap-4">
        {QuestionList[0]?.data?.map((data, key) => {
          return <FAQCard key={data.id} SingleQuestion={data} line={true} />;
        })}
      </div>
    </div>
  );
}

export default Support;
