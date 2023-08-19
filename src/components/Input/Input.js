import React, { forwardRef } from "react";
import Style from "./Input.module.scss";

const Input = forwardRef(({ ...props }, ref) => {
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
        ref={ref}
        className={Style.InputStyling}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
});

export default Input;
