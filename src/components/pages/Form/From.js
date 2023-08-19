import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { HexColorPicker } from "react-colorful";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "../../Input/Input";
import Button from "../../common/Button/Button";
import Style from "./Form.module.scss";

export default function From() {
  let navigate = useNavigate();

  const [hide, setHide] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");

  //values
  const [startDate, setStartDate] = useState(new Date());
  const [color, setColor] = useState("#aabbcc");
  const [Gender, setGender] = useState("");

  //Refs
  const Name = useRef(),
    Surname = useRef(),
    Occupation = useRef();

  const colorChange = async (color) => {
    setColor(color);
    setHide(true);
  };

  const onGenderChange = (e) => {
    setGender(e.target.value);
  };

  const CompileData = () => {
    let allData = {
      name: Name.current.value,
      surname: Surname.current.value,
      occupation: Occupation.current.value,
      color: color,
      birthdate: startDate.getFullYear(),
      gender: Gender,
    };

    //Validation
    if (
      allData.name === "" ||
      allData.surname === "" ||
      allData.occupation === "" ||
      allData.gender === ""
    ) {
      setValidationMessage("Please fill in all the fields");
      console.log(allData);
    } else {
      let today = new Date();
      today = today.getFullYear();
      setValidationMessage("");
      if (today - allData.birthdate < 18) {
        setValidationMessage("You have to be 18 or older");
        console.log(startDate);
        console.log(allData);
      } else {
        sessionStorage.setItem("userData", JSON.stringify(allData));
        navigate("/Result");
      }
    }
  };

  return (
    <div className={Style.Container}>
      <h2>Create your character!</h2>
      <p>Make sure to fill in all the fields</p>
      <div className={Style.FormContainer}>
        <div className={Style.Left}>
          <Input ref={Name} placeholder="Name" rotation={30} />
          <Input ref={Surname} placeholder="Surname" rotation={""} />
          <div className={Style.RadioContainer}>
            <label>Gender:</label>
            <input
              value="Male"
              type="radio"
              name="radio"
              onChange={(e) => onGenderChange(e)}
            />
            <label>Male</label>
            <input
              value="Female"
              type="radio"
              name="radio"
              onChange={(e) => onGenderChange(e)}
            />
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
            <select ref={Occupation}>
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
            <div className={Style.click_indicate}></div>
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
      <p style={{ color: "red" }}>{validationMessage}</p>
      <Button onClick={() => CompileData()} text="Done" />
    </div>
  );
}
