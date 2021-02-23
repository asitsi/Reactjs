import { Link } from "@material-ui/core";
import React from "react";
import FacultyImage from "../helper/FacultyImage";

const FacultyCard = ({ faculty }) => {
  const cardName = faculty ? faculty.name : "Faculty Name";
  const cardskill = faculty ? faculty.skill : "Faculty skill";
  const cardqualification = faculty
    ? faculty.qualification
    : "Faculty qualification";
  const cardachievement = faculty ? faculty.achievement : "Faculty achievement";

  return (
    <div>
      <div className="card Faculty_card">
        <div className="card_img">
          <FacultyImage faculty={faculty} />
          <div>
            <h5 className="card_name">{cardName}</h5>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <h6>SKILL </h6>
                </td>
                <td>
                  <p>{cardskill}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>QUALIFICATION </h6>
                </td>
                <td>
                  <p>{cardqualification}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>ACHIEVEMENT </h6>
                </td>
                <td>
                  <p>{cardachievement}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default FacultyCard;
