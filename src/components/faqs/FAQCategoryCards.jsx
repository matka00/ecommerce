import React from "react";
import "./FAQCategoryCards.css";
import {
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaChevronDown } from "react-icons/fa";

function FAQCategoryCards({ questionGroupData }) {
  /* console.log(questionGroupData); */

  return (
    <>
      <div className="faq-card-cont">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="question-heading">
              <h3>{questionGroupData[0]}</h3>
              <FaChevronDown />
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div>
            {questionGroupData[1].map((question) => (
              <div className="question-wrapper">
                <h4>{question.question}</h4>
                <p>{question.answer}</p>
              </div>
            ))}
          </div>
        </AccordionItemPanel>
      </div>
    </>
  );
}

export default FAQCategoryCards;
