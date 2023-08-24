import React from "react";
import "./AboutSection.css";
import { urlFor } from "../../library/client";

function AboutSection({ aboutData }) {
  return (
    <>
      <div className="about-cont">
        <p>{aboutData.paragraph1}</p>
        <img src={urlFor(aboutData.image)} alt="buddies" />
      </div>
    </>
  );
}

export default AboutSection;
