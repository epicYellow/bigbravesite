import React from "react";
import Style from "./Input.module.scss";

export default function Input(props) {
  return (
    <div
      className={
        props.rotation === 30
          ? Style.rotate_thirty
          : props.rotation === -30
          ? Style.rotate_thirty_minus
          : Style.none
      }
    >
      <input
        className={Style.InputStyling}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}
