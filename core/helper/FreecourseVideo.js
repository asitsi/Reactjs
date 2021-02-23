import React from "react";
import { API } from "../../backend";
import Custum_logo from "../../image/Custum_Logo.png";
import "../../styles.scss";

const ImageHelper = ({ view }) => {
  const VideoUrl = view
    ? `${API}/freecoursevideo/video/${view._id}`
    : Custum_logo;
  return (
    <div className="">
      <video
        src={VideoUrl}
        className="videostyle"
        type="video/mp4"
        controls
        loop
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ImageHelper;
