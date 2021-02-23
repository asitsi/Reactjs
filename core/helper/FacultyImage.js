import React from "react";
import { API } from "../../backend";
import Custum_logo from "../../image/Custum_Logo.png";

const ImageHelper = ({ faculty }) => {
  const imageurl = faculty
    ? `${API}/faculty/photo/${faculty._id}`
    : Custum_logo;
  return (
    <div className="">
      <img src={imageurl} alt="photo" className="card-img-top Avtar_image" />
    </div>
  );
};

export default ImageHelper;
