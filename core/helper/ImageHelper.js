import React from "react";
import { API } from "../../backend";
import "../../styles.scss";
import Custum_logo from "../../image/Custum_Logo.png";

const ImageHelper = ({ blog }) => {
  const imageurl = blog ? `${API}/blog/photo/${blog._id}` : Custum_logo;
  return (
    <div className="p-2">
      <img
        src={imageurl}
        alt="photo"
        className="FullblogImg img-fluid rounded"
        loading="lazy"
      />
    </div>
  );
};

export default ImageHelper;
