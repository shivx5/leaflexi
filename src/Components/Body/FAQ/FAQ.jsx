import React, { useMemo } from "react";
import FAQCard from "./FAQCard";
import QuestionList from "../../../Utility/QuestionList";
function FAQ({ line }) {
  // console.log(QuestionList[0]);

  // Memoizing the mapping to prevent unnecessary re-renders
  const questionList = useMemo(() => QuestionList[0]?.data, [QuestionList]);

  return (
    <div className="lg:p-24 md:p-12 sm:p-6 p-4 ">
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-14 justify-center">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl w-full sm:w-1/2">
            FAQ's
          </h1>
        </div>

        <div className="flex justify-center flex-col gap-4">
          {questionList?.map((data, key) => (
            <FAQCard key={data.id} SingleQuestion={data} line={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default FAQ;
