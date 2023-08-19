import React from "react";
import Input from "../../Input/Input";
import Button from "../../common/Button/Button";
import Style from "./Form.module.scss";

export default function From() {
  return (
    <div className={Style.Container}>
      <h2>Create your character!</h2>
      <p>Make sure to fill in all the fields</p>
      <div className={Style.FormContainer}>
        <div className={Style.Left}>
          <Input placeholder="Name" rotation={30} />
          <Input placeholder="Name" rotation={""} />
          <Input placeholder="Name" rotation={-30} />
        </div>
        <div className={Style.Center}>
          <div className={Style.Loading_Container}>
            <div className={Style.Top}></div>
            <div className={Style.Animated}></div>
          </div>
          <p>Thinking...</p>
        </div>
        <div className={Style.Right}>
          <Input placeholder="Name" rotation={-30} />
          <Input placeholder="Name" rotation={""} />
          <Input placeholder="Name" rotation={30} />
        </div>
      </div>
      <Button text="Done" />
    </div>
  );
}
