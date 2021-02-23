import React from "react";
import { API } from "../../backend";
import "../../styles.scss";

const Ctet = ({ view }) => {
  const VideoUrl = view
    ? `${API}/ctet/video/${view._id}`
    : `https://vod-progressive.akamaized.net/exp=1607383296~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4696%2F17%2F448480646%2F1969407398.mp4~hmac=eaa56875d752e2634c2594729ca132fc75f09ede5c469406fb8bf4e4209cf1bd/vimeo-prod-skyfire-std-us/01/4696/17/448480646/1969407398.mp4?filename=Alone+-+46637.mp4`;
  return (
    <div className="">
      <video className="videostyle" controls loop>
        <source src={VideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Ctet;
