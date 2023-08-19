import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/pants.svg";
import Button from "../../common/Button/Button";
import { MySVGComponent } from "../../common/SvgComponent";
import Style from "./Result.module.scss";

export default function Result() {
  let navigate = useNavigate();

  const [headImage, setHeadImage] = useState(""),
    [topImage, setTopImage] = useState(""),
    [pantsColor, setPantsColor] = useState("#826EB6"),
    [age, setAge] = useState(0),
    [name, setName] = useState("name"),
    [occupation, setOccupation] = useState("work"),
    [gender, setGender] = useState("gender");

  let today = new Date();
  today = today.getFullYear();

  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("userData"));

    //Create character
    console.log(data);
    setPantsColor(data.color);
    setAge(today - data.birthdate);
    setName(data.name + " " + data.surname);
    setGender(data.gender);
    setOccupation(data.occupation);

    //Check gender and age
    //If older than 35 then old
    switch (data.gender) {
      case "Male":
        if (today - data.birthdate > 35) {
          setHeadImage(Style.Head_M_Old);
        } else {
          setHeadImage(Style.Head_M);
        }
        break;
      case "Female":
        if (today - data.birthdate > 35) {
          setHeadImage(Style.Head_F_Old);
        } else {
          setHeadImage(Style.Head_F);
        }
        break;
      default:
        setHeadImage(Style.Head_F);
    }

    //check occupation
    switch (data.occupation) {
      case "Chef":
        setTopImage(Style.Top_Chef);
        break;
      case "Developer":
        setTopImage(Style.Top_Developer);
        break;
      case "Social Media Influencer":
        setTopImage(Style.Top_Social);
        break;
      case "Yoga instructor":
        setTopImage(Style.Top_Yoga);
        break;
      default:
        setHeadImage(Style.Top_Social);
    }
  }, []);

  return (
    <div className={Style.Container}>
      <div style={{ width: "60%" }}>
        <h2>This is your character</h2>
        <p>
          Allow me to introduce you to {name}, a {age} year old with a timeless
          spirit. {gender === "Male" ? "He" : "She"} has honed{" "}
          {gender === "Male" ? "his" : "her"} expertise in {occupation} over the
          years and continue to embrace life's adventures.
        </p>
      </div>
      <div className={Style.CharacterContainer}>
        <div className={headImage}></div>
        <div className={topImage}></div>
        <div className={Style.Pants}>
          <MySVGComponent color={pantsColor} />
        </div>
      </div>

      <Button
        onClick={() => {
          navigate("/");
          sessionStorage.clear();
        }}
        text="Restart"
      />
    </div>
  );
}
