import React from "react";
import { IoDiamondSharp } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { GiShoulderScales } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import './style.css'

const WhyChooseMe = () => {
  return (
    <div className="why-choose-me-section">
      <div>
        <IoDiamondSharp className="icon"/>
        <p>world class Apps</p>
      </div>
      <div>
        <CiBoxList className="icon" />
        <p>Tailored to your needs</p>
      </div>
      <div>
        <GiShoulderScales className="icon" />
        <p>Pixel Perfect Code</p>
      </div>
      <div>
        <FaHeart  className="icon"/>
        <p>Build with love</p>
      </div>
    </div>
  );
};

export default WhyChooseMe;
