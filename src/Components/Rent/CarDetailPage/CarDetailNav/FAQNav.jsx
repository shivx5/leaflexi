import React from "react";
import QuestionList from "../../../../Utility/QuestionList";
import FAQCard from "../../../Body/FAQ/FAQCard";
function FAQNav({ from }) {
  // console.log(QuestionList[1]);
  return (
    <div className="flex flex-col gap-4">
      {QuestionList[1]?.data?.map((data, key) => {
        return (
          <FAQCard
            key={data.id}
            SingleQuestion={data}
            line={false}
            from={from}
          />
        );
      })}
    </div>
  );
}

export default FAQNav;
