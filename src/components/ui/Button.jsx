import React from "react";
import "./Button.css";

function Button({ children, buttonStyle, type, onClick }) {
  return (
    <button className={`btn ${buttonStyle}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
