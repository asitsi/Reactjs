import React from "react";
import FreeCourseVideo from "../../helper/FreecourseVideo";

const PlushonePlushtwoCourseCard = ({ view }) => {
  const cardTitle = view ? view.name : "Video Title";
  const cardDescription = view ? view.description : "Video Description";

  return (
    <div>
      <div className="card">
        <FreeCourseVideo view={view} />
        <div className="card-body ">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h5 className="card-title text-center Freecoursevideo_title">
                {cardTitle}
              </h5>
            </li>
            <li className="list-group-item">
              <p className="card-text Freecoursevideo_description">
                {cardDescription}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlushonePlushtwoCourseCard;
