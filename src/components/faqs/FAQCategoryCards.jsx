import React from "react";
import "./FAQCategoryCards.css";

function FAQCategoryCards({ questionGroupData }) {
  console.log(questionGroupData);

  return (
    <>
      <div className="faq-card-cont">
        <h3>{questionGroupData[0]}</h3>
        <div>
          {questionGroupData[1].map((question) => (
            <div className="question-wrapper">
              <h4>{question.question}</h4>
              <p>{question.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQCategoryCards;
