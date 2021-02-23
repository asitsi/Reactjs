import React, { useEffect, useState } from "react";
import { getFreecoursevidero } from "../../helper/coreapicalls";
import PlushonePlushtwoCourseCard from "./PlushonePlushtwoCourseCard";

const PlushonePlushtwo = () => {
  const [video, setVideo] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    preload();
  }, []);

  const preload = () => {
    getFreecoursevidero().then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setVideo(data);
        // console.log(data);
      }
    });
    setLoading(true);
  };
  return (
    <div>
      <div className="container">
        <div className="row py-md-5 py-3 gy-5">
          <h1 className="Freecoursevideo_heading">All Video's</h1>
          <div className="row">
            {video.reverse().map((view, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
                  {loading ? (
                    <PlushonePlushtwoCourseCard view={view} />
                  ) : (
                    <div class="spinner-border text-danger" role="status"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlushonePlushtwo;
