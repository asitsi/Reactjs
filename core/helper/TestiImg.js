import React from "react";
import { API } from "../../backend";
import "../../styles.scss";
import Custum_logo from "../../image/Custum_Logo.png";

const TestiImg = ({ testi }) => {
  const imageurl = testi ? `${API}/testi/photo/${testi._id}` : Custum_logo;
  return (
    <div className="p-2">
      <img src={imageurl} alt="photo" className="img-fluid" loading="lazy" />
    </div>
  );
};

export default TestiImg;
