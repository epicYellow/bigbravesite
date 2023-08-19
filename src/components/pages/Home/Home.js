import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import Style from "./Home.module.scss";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className={Style.Container}>
      <h2>Press Go to start building your character</h2>
      <Button onClick={() => navigate("/Form")} type="Primary" text="Go" />
      <div>
        <p>Created by Reinhardt de Beer</p>
        <p>
          Github link <a>here</a>
        </p>
      </div>
    </div>
  );
}
