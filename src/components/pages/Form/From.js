import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "../../Input/Input";
import Button from "../../common/Button/Button";
import Style from "./Form.module.scss";

export default function From() {
  const [startDate, setStartDate] = useState(new Date());
  const [hide, setHide] = useState(true);
  const [color, setColor] = useState("#aabbcc");

  const colorChange = async (color) => {
    setColor(color);
    setHide(true);
  };
  return (
    <div className={Style.Container}>
      <h2>Create your character!</h2>
      <p>Make sure to fill in all the fields</p>
      <div className={Style.FormContainer}>
        <div className={Style.Left}>
          <Input placeholder="Name" rotation={30} />
          <Input placeholder="Surname" rotation={""} />
          <div className={Style.RadioContainer}>
            <label>Gender:</label>
            <input type="checkbox" />
            <label>Male</label>
            <input type="checkbox" />
            <label>Female</label>
          </div>
        </div>
        <div className={Style.Center}>
          <div className={Style.Loading_Container}>
            <div className={Style.Top}></div>
            <div className={Style.Animated}></div>
          </div>
          <p>Thinking...</p>
        </div>
        <div className={Style.Right}>
          <div className={Style.RadioContainer}>
            <select>
              <option>Occupation</option>
              <option>Chef</option>
              <option>Yoga instructor</option>
              <option>Developer</option>
              <option>Social Media Influencer</option>
            </select>
          </div>

          <div
            onClick={() => setHide(false)}
            style={{ backgroundColor: color }}
            className={Style.SelectContainer}
          >
            <label>Favourite color</label>
          </div>

          <div className={hide ? Style.ModalHide : Style.ModalShow}>
            <HexColorPicker
              color={color}
              onChange={setColor}
              onClick={() => setHide(true)}
            />
          </div>

          <div className={Style.DateContainer}>
            <label>Birthdate:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
      </div>
      <Button text="Done" />
    </div>
  );
}
