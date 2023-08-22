import React, { useEffect, useState } from "react";
import "./About.css";
import { GiWool } from "react-icons/gi";
import { client, urlFor } from "../../library/client";

function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "about"]{
            paragraph1,
            paragraph2,
            paragraph3,
            paragraph4,
            paragraph5,
            image,
            hexCode,
        }`
      )
      .then((data) => setAboutData(data[0]))
      .catch(console.error);
  }, []);

  return (
    <>
      {aboutData && (
        <div>
          <div className="about-heading">
            <h2>About Handmade Shop</h2>
            <p>
              <GiWool />
            </p>
          </div>
          <div className="about-details">
            <div className="first-part-wrapper">
              <img src={urlFor(aboutData.image)} alt="buddies" />
              <p>{aboutData.paragraph1}</p>
            </div>
            <p>{aboutData.paragraph2}</p>
            <p>{aboutData.paragraph3}</p>
            <p>{aboutData.paragraph4}</p>
            <p>{aboutData.paragraph5}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
