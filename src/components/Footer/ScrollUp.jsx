import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";

function ScrollUp() {
  return (
    <>
      <Link
        to="main-cont"
        spy={true}
        smooth={true}
        offset={-120}
        duration={800}
      >
        <FaChevronUp />
      </Link>
    </>
  );
}

export default ScrollUp;
