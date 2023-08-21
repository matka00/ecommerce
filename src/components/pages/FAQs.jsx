import React, { useEffect, useState } from "react";
import "./FAQs.css";
import FAQCategoryCards from "../faqs/FAQCategoryCards";
import { client } from "../../library/client";

function FAQs() {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  console.log(questionsAndAnswers);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "faq"]{
            questionType,
            question,
            answer
        }`
      )
      .then((data) => {
        setQuestionsAndAnswers(
          Object.groupBy(data, ({ questionType }) => questionType)
        );
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h2>Frequently Asked Questions</h2>
      {questionsAndAnswers &&
        Object.entries(questionsAndAnswers).map((questionGroup, index) => (
          <FAQCategoryCards key={index} questionGroupData={questionGroup} />
        ))}
    </>
  );
}

export default FAQs;
