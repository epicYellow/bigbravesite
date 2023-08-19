import React from "react";
import Style from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={props.type === "Primary" ? Style.Primary : Style.Secondary}
    >
      {props.text}
    </button>
  );
};

export default Button;
