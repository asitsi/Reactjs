import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";
import { getCtetvideos, DeleteCtetvideos } from "./helper/adminapicall";
import "../styles.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ManageCtet = () => {
  const [Freevideo, setFreevideo] = useState([]);
  const { user, token } = isAutheticated();

  const preload = () => {
    getCtetvideos().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setFreevideo(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deletemyFreecoursevideos = (freecourseId) => {
    DeleteCtetvideos(freecourseId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <div>
      <div className="user_table container py-md-5 py-3">
        <div className="table-responsive container">
          <h1 className="text-center blog_heading">All Video's</h1>
          <table className="table table-hover table-bordered shadow-lg rounded">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Video's Title</th>
                <th scope="col" className="text-center">
                  Update
                </th>
                <th scope="col" className="text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {Freevideo.reverse().map((freevideo, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1})-</th>

                  <td>
                    <p>{freevideo.name}</p>
                  </td>
                  <td>
                    <p>
                      <Link
                        className="btn btn-success"
                        to={`/admin/Updatectetvideo/${freevideo._id}`}
                      >
                        <span className="">Update</span>
                      </Link>
                    </p>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deletemyFreecoursevideos(freevideo._id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/admin/dashboard" className="Backbtn btn w-100">
          <ArrowBackIcon /> Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default ManageCtet;
