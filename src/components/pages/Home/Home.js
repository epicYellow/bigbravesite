import React from "react";
import Button from "../../common/Button/Button";
import Style from "./Home.module.scss";

export default function Home() {
  return (
    <div className={Style.Container}>
      <h2>Press Go to start building your character</h2>
      <Button type="Primary" text="Go" />
      <div>
        <p>Created by Reinhardt de Beer</p>
        <p>
          Github link <a>here</a>
        </p>
      </div>
    </div>
  );
}
